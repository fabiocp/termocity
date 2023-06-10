#Termocity - Descrição

Termocity é uma aplicação Web que permite consultar a temperatura atual e a previsão do tempo de diversas cidades.
Até o momento, as cidades disponíveis são:
- Chapecó - SC (Brasil)
- Londres (Inglaterra)
- Paris (França)
- Berlin (Alemanha)

#Estrutura do projeto:

O projeto trata-se de uma aplicação SPA, desenvolvida com uso das tecnologias Angular e Bootstrap.

A estrutura basicamente consiste em quatro componentes (App, Layout, Cidade e Spinner),  dois services (Wheater e Spinner) e um interceptor Http ("Requisicao").

Ao iniciar a aplicação, o componente "starter" App 

O componente central da aplicação é o CidadeComponent, que corresponde ao display das informações do clima da cidade selecionada.


#Passo a passo para a execução do projeto:

1) clonar o projeto com o comando:
git clone https://github.com/fabiocp/termocity.git

2) abrir a pasta via console e executar os seguintes comandos em sequência:
npm install
ng serve --o
