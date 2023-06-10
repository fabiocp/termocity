# Termocity

Termocity é uma aplicação Web que permite consultar a temperatura atual e a previsão do tempo de diversas cidades. Até o momento, as cidades disponíveis são:

- Chapecó - SC (Brasil)
- Londres (Inglaterra)
- Paris (França)
- Berlim (Alemanha)


# Descrição do projeto:

O projeto trata-se de uma aplicação SPA, desenvolvida com uso das tecnologias Angular e Bootstrap.

A ideia é basicamente disponibilizar uma tela única (TelaPrincipalComponent) com uma nav-bar superior com quatro links para cidades. Ao clicar em um deles, a aplicação cria e exibe um componente (CidadeComponent), que obtém os dados do clima da cidade a partir da API https://openweathermap.org/api (centralizada no serviço WheaterAPIService) e monta um HTML listando o nome da localização, juntamente com a temperatura e clima atuais, seguidos pela previsão dos próximos quatro dias.

A estrutura basicamente consiste e um único módulo (AppModule) com quatro componentes (App, TelaPrincipal, Cidade e Spinner), dois services (WheaterAPI e Spinner) e um interceptor Http ("Requisicao").

- AppComponent: componente inicial da aplicação. Ele cria e exibe o componente TelaPrincipalComponent e também configura um evento no SpinnerService para controlar a exibição do spinner conforme o valor da propriedade "mostrarSpinner". Foi feito dessa forma pois assim outros componentes criados futuramente poderiam reutilizar o mesmo recurso.

- TelaPrincipalComponent: é o componente da tela única da aplicação. Contém uma nav-bar, os links dos cidades e uma imagem de fundo. No onclick do link da cidade, a rotina cria um CidadeComponent através do recurso ComponentFactoryResolver e o carrega dinamicamente no template "container" (substituindo o componente já criado caso existir). Após a criação, a rotina chama o método Inicializar() do componente da cidade, passando a cidade selecionada e um callback de sucesso. Esse callback é utilizado para mostrar o template principal apenas após o carregamento bem-sucedido das informações.

- CidadeComponent: é o principal componente da aplicação e é responsável por solicitar e exibir os dados do clima. Para isso, o componente chama dois métodos (chamarObterTemperaturaAtual() e chamarObterPrevisaoProximosdias()) do WheaterAPIService para obter a temperatura atual da cidade e para obter as previsões de clima. A chamada dos dois é encadeada, ou seja, o método chamarObterPrevisaoProximosdias() só é chamado caso o chamarObterTemperaturaAtual() retornar sucesso. No fim, os dados obtidos do service são formatados e exibidos no HTML do componente.

- SpinnerComponent: é o componente com o HTML do spinner

- SpinnerService: serviço injetável que disponibiliza os métodos exibirSpinner e ocultarSpinner (auto explicativos)

- WheaterAPIService: serviço injetável que se comunica diretamente com a API https://openweathermap.org/api. As URLs e apiKey são obtidas do arquivo de configuração environment.ts do projeto.

- RequisicaoInterceptor: é um interceptor HTTP que gerencia a exibição do spinner durante as requisições feitas em qualquer local da aplicação. Também trata os erros de requisição de forma centralizada (no caso, está apenas exibindo um alert).

# Passo a passo para a execução do projeto:

1) baixar e instalar o Node.js 
	https://nodejs.org/en/download

2) instalar o gerenciador de pacotes NPM através do comando: 
	npm install -g npm

3) baixar e instalar git 
	https://git-scm.com/downloads

4) clonar o projeto com o comando: 
	git clone https://github.com/fabiocp/termocity.git

5) dentro da pasta do projeto, executar os seguintes comandos em sequência: 
	npm install 
	ng serve --o  (ou npm run ng serve --o)
	
A aplicação será aberta automaticamente no navegador.
