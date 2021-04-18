![ioasys](https://github.com/WilliamPhilippe/ioasysapp/blob/master/src/assets/logo-login.png)

## Escopo e Tecnologias

#### Design
O design system usado foi a biblioteca Materialized CSS, inspirada no Material Design.
Algumas cores e várias propriedades (principalmente tamanho e posicionamento) foram alteradas.

A lib styled-components também foi usada para criar alguns componentes personalizados, principalmente containers.


#### Login e Autenticação
O login usado é o padrão, usuário e senha no próprio app.
O sistema de autenticação OAuth2.0 foi usada para permissões de requests.
Axios foi a biblioteca responsável pela integração.


#### Forms
Foi usando o react-hook-form como uma alternativa simples e rápida para o desenvolvimento de alguns poucos Forms.


## Como usar

Você irá precisar do Node 12+ instalado. Também irá precisar do YARN como gerenciador de pacotes. Você pode instalá-lo [aqui](https://yarnpkg.com/).

Originalmente o aplicativo foi desenvolvido usando Windows. Mas deve ser compatível com Mac e Linux, qualquer problema, favor reportar.

- Clone o projeto.
- Entre na pasta raiz e execute `yarn` para instalar as dependências.
- Depois de instalar as dependências, rode `yarn start` para rodar o projeto.

O projeto está sendo rodado na porta 3006 (http://localhost:3006/), caso você precise alterar, bastar ir em package.json e alterar a linha 'scripts start' para a sua porta.

