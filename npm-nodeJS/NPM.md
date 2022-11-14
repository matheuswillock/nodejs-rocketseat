# NPM

Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [X] Verificar se temos o npm instalado `npm -v`
- [X] Criar nosso próprio pacote `npm init` or `npm init -y`
- [X] O que é o arquivo package.json
- [X] Utilizar módulos de terceiros `npm install 'module'` or `npm i module` or `npm i 'module' -D`

- [X] O que é o diretório node_modules
- [X] O que é o arquivo package-lock.json

  - Serve para fazer a manutenção de módulos do projeto;
  - Não enviamos o arquivo `package-lock.json` para o __GitHub__. Vamos utilizar o`.gitinore` para ignorá-lo.

    Dessa forma quando baixarmos o projeto novamente basta executar na raiz do projeto o `npm install` que vai baixar todas as dependências que estão no arquivo `package.json`

- [X] Criar scripts para rodar com o npm

  - Basta escrevemos o nosso script na seção `scripts` do arquivo `package.json`

    ```` json
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
      }
    ````

  - Para rodar o script basta na raiz do nosso projeto rodarmos o script desejado `npm run start`

- [] Instalando pacotes de maneira global `npm i 'module' -g`

  - Quando instalarmos de maneira global o módulo não vai aparecer no nosso projeto basta rodarmos `npm root -g` que iremos descobrir.
  - Para desinstlar `npm uninstall 'module' -g`

- [] gerenciando as versões do NPM `npm upgrade` | `npm outdate` | `npm install 'module'@latest`-> vai pegar a última versão.
