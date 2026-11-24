# Cantina do Campus — Simulação

Objeto de aprendizagem para o componente **Práticas Administrativas** do curso Técnico em Administração, concomitante ao Ensino Médio, do **IFRS — Campus Erechim**.

É um jogo de simulação empresarial que opera como mini-ERP: as equipes gerenciam a cantina do campus ao longo de cinco rodadas, decidindo compras, preços, marketing e caixa, e observam as consequências de cada decisão. A regra central é que **nenhuma decisão pode ser submetida sem a análise que a fundamente** — uma planilha, uma consulta ao banco de dados ou um relatório extraído do próprio sistema. É assim que a Informática deixa de ser conteúdo a decorar e passa a ser instrumento de decisão.

**Acesse:** https://SEU-USUARIO.github.io/cantina-do-campus/
<!-- Depois de publicar, troque SEU-USUARIO pelo seu nome de usuário do GitHub,
     aqui e no arquivo CITATION.cff. -->

---

## Como usar

**No navegador.** Abra o endereço acima. Não há instalação nem cadastro.

**Instalado como aplicativo.** No Chrome ou no Edge, use o ícone de instalação na barra de endereços; no celular, "Adicionar à tela de início". Depois da primeira visita o objeto abre **sem conexão**, o que resolve a queda de rede no meio da aula.

**Sem internet, desde o começo.** Baixe o `index.html` e abra-o com dois cliques. Funciona igual: o arquivo é autocontido, sem nenhuma dependência externa. Nesse modo não há instalação nem cache offline, e a persistência dos dados é menos confiável — veja a advertência abaixo.

## Onde ficam os dados

Tudo é gravado no **armazenamento local do navegador**, na própria máquina. Nada é enviado a servidor algum: não há back-end, não há coleta remota, não há conta de usuário.

Três consequências práticas, e elas importam:

- Cada equipe precisa usar **sempre o mesmo computador e o mesmo navegador** ao longo das rodadas. Trocar de máquina significa começar do zero.
- Navegação anônima e limpeza de dados do navegador **apagam a partida**.
- Ao fim de cada encontro, **exporte o arquivo da equipe** pelo console do professor. É a única cópia que sobrevive a uma reconfiguração do laboratório.

## Para o professor

A sequência didática completa, o manual de condução, os instrumentos de avaliação e o plano de testes estão na pasta do projeto, não neste repositório. O console do professor fica na própria interface do objeto.

## Publicando uma versão nova

Ao alterar o `index.html`, **troque o número da versão do cache** na primeira linha útil do `sw.js`:

```js
const CACHE = 'cantina-v1';   // v2, v3, ...
```

Sem isso o navegador continua servindo a versão antiga aos estudantes, mesmo depois da publicação.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | O objeto inteiro: interface, motor de simulação e registro de uso, em arquivo único |
| `manifest.webmanifest` | Metadados que tornam o objeto instalável |
| `sw.js` | Service worker: faz o objeto abrir sem conexão |
| `icone*.png` / `icone.svg` | Ícones do aplicativo |
| `.nojekyll` | Impede o GitHub Pages de processar os arquivos como site Jekyll |

## Licença

Este objeto é um **Recurso Educacional Aberto**, licenciado sob [Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/deed.pt).

Você pode usar, adaptar ao seu contexto, remixar e redistribuir, inclusive para fins comerciais, desde que dê o crédito e mantenha a mesma licença nas versões derivadas.

> "Cantina do Campus — Simulação", de Newton Nyamasege Marube, está licenciado sob a licença Creative Commons Atribuição-CompartilhaIgual 4.0 Internacional.

## Origem

Desenvolvido como objeto de aprendizagem do **Projeto Dirigido** do Curso de Especialização em Inovação na Educação Mediada por Tecnologias (IEMTec) da **Universidade Federal do ABC**, segundo a **Metodologia Intera**.

Autor: Newton Nyamasege Marube — professor no IFRS, Campus Erechim.
