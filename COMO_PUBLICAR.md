# Como publicar no GitHub Pages

Leva cerca de dez minutos. Ao final você terá um endereço público e estável para o objeto, do tipo `https://seu-usuario.github.io/cantina-do-campus/`.

---

## Antes de começar

**Esta pasta vira um repositório próprio**, separado do repositório `Projects` que você já versiona. São coisas diferentes: o `Projects` guarda o trabalho da especialização, e é privado; este guarda só o objeto publicado, e precisa ser público para o Pages funcionar na conta gratuita.

Nada aqui é sigiloso: é o objeto que os estudantes vão usar, mais licença e documentação.

---

## 1. Substituir o texto da licença

O `LICENSE` traz hoje um resumo em português, não o código legal. Abra

    https://creativecommons.org/licenses/by-sa/4.0/legalcode.pt

copie o texto inteiro e substitua o conteúdo do arquivo. O resumo serve para leitura; o que vale juridicamente é o código legal.

## 2. Criar o repositório

No GitHub, **New repository**:

- Nome: `cantina-do-campus`
- Visibilidade: **Public**
- **Não** marque "Add a README file" — já existe um aqui.

## 3. Enviar os arquivos

Pelo navegador, sem linha de comando: na página do repositório vazio, clique em **uploading an existing file** e arraste **todo o conteúdo desta pasta** — inclusive o `.nojekyll`, que é um arquivo oculto e pode não aparecer no explorador do Windows até você ativar "Itens ocultos" na aba Exibir.

Se preferir o terminal, dentro desta pasta:

```
git init
git add .
git commit -m "Objeto de aprendizagem Cantina do Campus, versao 1.0"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cantina-do-campus.git
git push -u origin main
```

## 4. Ligar o Pages

No repositório: **Settings → Pages**.

- Source: **Deploy from a branch**
- Branch: **main**, pasta **/ (root)**
- **Save**

A primeira publicação leva de um a dois minutos. O endereço aparece no alto da mesma página.

## 5. Trocar o endereço nos dois arquivos

Em `README.md` e `CITATION.cff`, substitua `SEU-USUARIO` pelo seu nome de usuário. São três ocorrências ao todo.

---

## Conferir se ficou bom

Abra o endereço no Chrome e verifique:

1. **O jogo abre e funciona** — entre com uma equipe, processe uma rodada.
2. **Dá para instalar** — aparece um ícone de instalação na barra de endereços. No celular, "Adicionar à tela de início".
3. **Funciona sem rede** — carregue a página, desligue o wi-fi, recarregue. Deve abrir igual.
4. **O ícone aparece certo** na aba e no atalho instalado.

Se a instalação não for oferecida, abra o **DevTools (F12) → Application → Manifest** e veja o que o Chrome reclama. O erro mais comum é o endereço ainda não estar em `https`, o que o Pages resolve sozinho depois de alguns minutos.

> **Ressalva honesta.** Preparei e testei estes arquivos num ambiente sem navegador: conferi que o manifesto é válido, que o service worker tem sintaxe correta, que todos os arquivos referenciados existem e que o servidor entrega cada um com o tipo certo. O que **não** pude verificar é o comportamento real no navegador — instalação, cache offline e execução do jogo. Os quatro passos acima são justamente essa verificação, e vale fazê-los antes de divulgar o endereço.

---

## Depois de publicar

- Cole o endereço na **Seção 4 da Definição do OA**, que está com essa pendência em aberto.
- Preencha o campo **Localização** na ficha `Metadados_e_Licenca_Cantina.docx`.
- Anote o endereço no `INDICE_GERAL_da_pasta.docx`.
- Guarde o `index.html` num pen drive. Se a rede do laboratório bloquear o GitHub no dia da aula, abrir o arquivo localmente é o plano B imediato.

## Ao publicar uma versão nova

Altere o `index.html`, **troque o número da versão do cache** no `sw.js`:

```js
const CACHE = 'cantina-v1';   // passe para v2, v3, ...
```

e envie os dois arquivos. Sem essa troca o navegador dos estudantes continua servindo a versão antiga, mesmo depois da publicação — é o erro mais comum e o mais difícil de perceber, porque na sua máquina costuma funcionar.
