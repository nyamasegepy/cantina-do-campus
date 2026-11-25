/* Service worker do OA "Cantina do Campus".
 *
 * Estratégia: cache-first para os arquivos do aplicativo, que são poucos e
 * mudam só quando há nova versão. Depois da primeira visita o objeto abre
 * sem rede — o que importa num laboratório cuja conexão pode cair no meio
 * da rodada.
 *
 * IMPORTANTE AO PUBLICAR UMA NOVA VERSÃO DO JOGO
 * Troque o número em CACHE. Sem isso o navegador continua servindo a versão
 * antiga do index.html, e os estudantes jogam o que você já corrigiu.
 */

const CACHE = 'cantina-v2';

const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icone-192.png',
  './icone-512.png',
  './icone-512-maskable.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll falha por inteiro se um arquivo faltar; aqui cada um é
      // independente, para que um ícone ausente não impeça a instalação.
      .then((c) => Promise.allSettled(ARQUIVOS.map((a) => c.add(a))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(
        nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Navegação: tenta a rede primeiro, para que uma versão nova chegue
  // assim que publicada; cai no cache quando não há conexão.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((resp) => {
          const copia = resp.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copia));
          return resp;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Demais arquivos: cache primeiro.
  e.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((resp) => {
      if (resp && resp.status === 200 && resp.type === 'basic') {
        const copia = resp.clone();
        caches.open(CACHE).then((c) => c.put(req, copia));
      }
      return resp;
    }).catch(() => hit))
  );
});
