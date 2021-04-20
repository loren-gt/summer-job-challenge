# PROMISES

## O QUE VAMOS APRENDER?

A aplicação contínua de *calbacks* pode  gerar uma poluição visual no código, dependendo da complexidade do que se deseja desenvolver. Felizmente existe um recurso em *JavaScript* conhecido como *promises*, que facilita nossa leitura e permite que sejam criadas páginas *web* para captação de dados de determinado serviço através de APIs.

---

## VOCÊ SERÁ CAPAZ DE:

:heavy_check_mark: Fazer chamadas assíncronas utilizando *promises*
:heavy_check_mark: Realizar chamadas a API's de terceiros através da função *fetch*
:heavy_check_mark: Tratar os dados em JSON recebidos

---

## PORQUE ISSO É IMPORTANTE?

Embora não pareçam intuitivas, as *promises* facilitam muito a leitura de códigos assíncronos, tornando o processo de desenvolvimento mais conciso e coerente. São também muito usadas em *JavaScript* para se comunicarem com APIs.

A conexão com serviços de terceiros é fundamental na rotina de quem trabalha com desenvolvimento web. Independente do tipo de dado coletado, o uso da API é indispensável, pois ela atua como facilitador para o acesso a informação. Hoje você irá iniciar seus estudos nesse assunto e o levará por todo o restante do curso.

Por isso, é importante ressaltar que esse será um aprendizado gradual. Se dedique a realizar os exercícios e a ler o material com atenção. Haverá tempo suficiente para a absorção desse conteúdo ao longo da sua formação. Vamos com tudo tryber! 🚀 

---

## CONTEÚDOS

### INTERFACE DE PROGRAMAÇÃO DE APLICATIVO (API)

Em termos simples, uma API é um conjunto de regras e padrões de programação, que possibilita que diferentes aplicações conversem entre si. Ela funciona como um intermediador (ou, se preferir, um *ponto de acesso*) para que um aplicativo possa acessar um banco de dados.

![Gif API](https://miro.medium.com/max/700/1*_JJTknJYPxJPLNEEB3jh7Q.gif)


É através do uso de APIs que é possível fazer requisições de informações especificas na *web* e, até mesmo, alterar dados em outros aplicativos a partir de um site. Um exemplo desse último caso é um botão que alguns sites possuem de "Compartilhar no Facebook". Assim que esse botão é clicado, o site que o usuário está visitando se comunica com a sua conta do Facebook e altera os dados, adicionando um novo *status*.

#### MAS PORQUE USAR UMA API?

Imagine que você tem um aplicativo que mostra os dados meteorológicos da sua cidade. Para o aplicativo exibir essas informações na tela é preciso que ele tenha, primeiro, acesso a essas informações, certo? Porém, temos alguns pontos a considerar nesse cenário:

- Os dados retornados devem ser confiáveis para que a leitura do clima seja correta
- Essas informações precisam ser atualizadas constantemente para não se tornarem obsoletas.

Seria muito mais simples se houvesse uma maneira desses dados serem fornecidos a seu aplicativo por uma fonte segura, estável e que atualizasse automaticamente essas informações, não é mesmo? E é por isso que o recurso da API se mostra interessante, pois essas questões já seriam resolvidas a partir do momento que o aplicativo realizasse uma requisição.

![Gif Smart Thinking](https://p3y6v9e6.stackpathcdn.com/wp-content/uploads/zikoko/2018/07/stay-woke.gif)


### FLUXO ASSÍNCRONO

Entender a ordem de execução de funções em *JavaScript* será de suma importância para compreender melhor como as *promises* funcionam. Portanto, vamos relembrar rapidamente esse assunto.

No *JavaScript*, as funções síncronas são lidas de cima para baixo *(top-down)* e organizadas em uma espécie de fila, onde a primeira função lida é a primeira a ser executada. Quando ela termina, um valor é retornado e, logo em seguida, a próxima função entra em execução e o fluxo segue até que todas as funções tenham sido chamadas.

No caso das funções assíncronas, essa organização ocorre de modo diferente. Ao ser identificada, uma função assíncrona é encaminhada para uma "área especial", e então teremos duas filas sendo executadas em paralelo: uma síncrona e outra assíncrona. Uma consideração importante sobre a segunda fila é que ela possui uma ordenação própria, baseada no tempo de execução de cada função assíncrona (assim, não necessariamente a primeira função a entrar é a que será imediatamente executada). Preste atenção nisso!

Como você pode perceber, é difícil organizar a "fila" das funções assíncronas. Para resolver esse problema, as pessoas desenvolvedoras começaram a usar *callbacks*, o que a princípio parecia ser uma ótima solução. Porém, em alguns casos a sequência de *callbacks* expandia de forma descontrolada, gerando o famoso *~~e não tão querido~~* ***callback hell***.

![Gif Callback Hell](https://s3.amazonaws.com/com.twilio.prod.twilio-docs/original_images/31orCejQRkSvmchYeZC2GKswNtst-d_xEoSPoP3X-bAm9RRe8hxz59vVZrrRm78VvJgVbuUo5R.png)

Assim, foi preciso buscar novas soluções e é aí que entra o objeto do nosso estudo: as *promises*!

### PROMISES

Existem algumas considerações a serem feitas sobre *~~o que é, como vive e como se reproduz~~* uma *promise*. A princípio, é interessante perceber que elas:

1. São usadas para processar funções assíncronas.
2. **SEMPRE** retornam uma resposta.
3. São criadas a partir de um construtor. Veremos mais adiante como essa lógica é implementada.

Como foi dito acima, a *promise* retorna alguma coisa. Isso é útil quando temos algo a ser processado mas não sabemos quando teremos uma resposta. Um exemplo simples seria o ato de pedir comida por um aplicativo. Enquanto o pedido é analisado, o *app* nos **promete** uma resposta, que não sabemos quando será executada: ou o pedido foi aprovado, ou foi rejeitado pelo restaurante.

#### CONSTRUÍNDO UMA PROMISE

Crie um novo arquivo em seu editor de texto e adicione o seguinte comando:

```javascript
const myFirstPromise = new Promise((resolve, reject) => {

});
```
A *promise* é gerada a partir do construtor **Promise** e do operador **new**. A função do construtor é a de gerar um objeto a partir de uma classe. Sim, a *promise* é um objeto, *~~mindblowing não é mesmo?~~* mas nesse primeiro momento foque em entender apenas a sua sintaxe. Para obter nossa resposta e concluir a *promise*, precisamos passar como parâmetro uma **função** (nesse exemplo representada por uma *arrow function*) que resolva ou rejeite a *promise*.

#### ESTADOS DE UMA PROMISE

Uma *promise* pode apresentar os seguintes estados: ***Pending***, ***Resolved*** e ***Rejected***. Quando ela é executada, entra em um estado inicial, onde irá processar as informações recebidas (*pending*). Ao ser concluída, ela pode apresentar uma resposta de sucesso (*resolved*) **ou** de falha (*rejected*). Nesse momento em que a *promise* é resolvida ou não, entram em cena os dois parâmetros que passamos para a nossa *promise* anteriormente: *resolve* e *reject*.

O *resolve* retorna uma resposta positiva e o *reject* retorna uma resposta negativa. Ambos funcionam de modo análogo ao *return* das funções, com uma pequena diferença: o *return* interrompe a execução da função quando é chamado, enquanto o *resolve/reject* não o fazem. Dessa forma, podemos utilizar o *return* antes do parâmetro que desejamos para interromper a execução da *promise*. Vamos aplicar esse conceito nos exercícios a seguir.

#### EXERCÍCIOS DE FIXAÇÃO

1. Crie uma função que simule uma chamada à API utilizando a função [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp). Essa função deve retornar uma promise depois de 3 segundos. Quando essa promise é resolvida, ela deve imprimir a mensagem *Olá Tryber! Sua requisição foi um sucesso =)* 
- Bônus: faça também que a promise retorne uma mensagem de erro quando ela for rejeitada. Não se preocupe com o erro que será exibido, mais adiante veremos como trata-lo. Execute algumas vezes o programa para ver o que acontece.

2. Crie uma promise que analise um número inteiro aleatório e determine que, se esse número for par, ela será resolvida. Caso contrário, será rejeitada. Não se preocupe com o erro que será exibido, mais adiante veremos como trata-lo. Execute algumas vezes o programa para ver o que acontece.

#### MÉTODOS PARA GESTÃO DE FLUXO

Existem dois métodos úteis para gerir o fluxo assíncrono com *promises*: o ```.then()``` e o ```.catch()```. Vamos abordar primeiro o uso do ```.then()```. Para isso, vamos refatorar seu código do segundo exercício de fixação até agora:

```javascript
const myPromise = new Promise((resolve, reject) => {
  const number = Math.round(Math.random() * 100);
  const resolvedPromise = (number % 2 === 0 );
  if(!resolvedPromise) {
    return reject(new Error(`Promise rejeitada =( nosso número foi ${number}`))
  }
  resolve(number);
})
  .then(number => `Promise resolvida =) nosso número foi ${number}`)
  .then(message => console.log(message));
```

Observe bem a sintaxe exigida pelo método ```.then()```. Precisamos passar como argumento uma função que, por sua vez, também recebe um argumento, que é o retorno do ```resolve``` da nossa *promise* (representada pela constante ```number```). É possível também, conforme demonstrado no código acima, encadear mais de um ```.then()``` em outro. Esse conceito é conhecido como *chaining*, e é útil quando queremos que o retorno do primeiro ```.then()``` seja o argumento da função interna do segundo e assim por diante. Para finalizar, note que o ```.then()``` aguarda até que a *promise* ou o ```.then()``` anterior esteja concluído para ser executado. Isso permite que nosso fluxo esteja controlado.

Agora, vamos ver como tratar o erro exibido quando a *promise* é rejeitada. Para isso, vamos precisar implementar ao código o método ```.catch()```. Veja só o que acontece:

```javascript
const myPromise = new Promise((resolve, reject) => {
  const number = Math.round(Math.random() * 100);
  const resolvedPromise = (number % 2 === 0 );
  if(!resolvedPromise) {
    return reject(number);
  }
  resolve(number);
})
  .then(number => `Promise resolvida =) nosso número foi ${number}`)
  .then(message => console.log(message))
  .catch(number => console.log(`Promise rejeitada =( nosso número foi ${number}`));
```

Se você executar o código acima em seu editor de texto, perceberá que o erro exibido anteriormente foi tratado. De modo semelhante ao método ```.then()```, o  ```.catch()``` recebe como argumento uma função interna que também recebe um argumento, que é o retorno do ```reject```. Nesse caso, quando a *promise* retorna ```reject```, ela não passa pelos ```.then()``` e cai diretamente no primeiro ```.catch()``` que encontrar. Além disso, a vantagem do ```.catch()``` é que ele captura qualquer erro que possa ter ocorrido dentro de um ```.then()``` anterior, sendo por esse motivo, geralmente usado ao final do código.

![Gif Applause](https://media1.tenor.com/images/0de120c10a661c15cb60fe77b8eac367/tenor.gif?itemid=5833390)

Parabéns! Você construiu uma promise 100% funcional e acaba de passar para o próximo desafio: usar seus conhecimentos recém adquiridos para fazer requisições a uma API com uma das funções mais usadas pelas pessoas desenvolvedoras: o ***Fetch***!

#### FETCH API

Como já mencionamos, a função *fetch* é responsável por fazer requisições a APIs. Contudo, ela também possui outras responsabilidades, como tratar os dados recebidos e devolvê-los, além de gerenciar eventuais erros.

O retorno da função *fetch* irá variar conforme a API utilizada, tanto em termos de formato quanto de conteúdo. Como nosso foco maior é *JavaScript*, vamos lidar principalmente com respostas no formato JSON ou equivalentes.

#### ASYNC / AWAIT

O *async* e o *await* são *keywords* utilizadas para dar legibilidade e organização ao código, geralmente usadas juntas. O *async* faz com que a função se torne assíncrona e retorne uma promise. Para usar, basta inserir *async* antes da definição da função e BOOM! Você tem uma promise com *async*.

Porém, além do *async* temos também o *await*. O *await* só pode ser usado dentro de uma função que tenha recebido o *async* e a finalidade dele é fazer com que a função aguarde uma resposta para só então continuar a ser executada.

O motivo para a adição do *async* e *await* foi similar ao da adição das promises ao *JavaScript*. Só que, ao invés do *callback hell*, passou-se a ter o *promisse hell*, onde o uso contínuo de *promises* envolvendo outras tornava a leitura muito mais difícil.

---

### EXERCÍCIOS

Para fazer os exercícios a seguir, observe a [documentação](https://dog.ceo/dog-api/) de um site de API de imagens de cachorros. Você precisa utilizar o endpoint https://dog.ceo/api/breeds/image/random para a realização do exercício.

1. Para consolidar seus conhecimentos, utilize o *fetch* e os métodos ``.then()`` e ``.catch()`` para fazer uma requisição a uma API de imagens de cães para criar seu próprio site gerador de catioros! 🐶 

2. Agora faça a requisição utilizando o *async/await*

---

### RECURSOS ADICIONAIS

- Bônus: nos dois exercícios anteriores, coloque um botão de modo que, ao ser clicado, a tela seja atualizada e uma nova imagem apareça.

- [Entenda promises de uma vez por todas](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)
- [Vídeo: desvendando as promises em JavaScript](https://www.youtube.com/watch?v=nRJhc6vXyK4)
- [Usando promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Usando_promises)
- [Mais sobre o Fetch API](https://braziljs.org/artigos/fetch-api-e-o-javascript/)
- [Aprenda a usar o node-fetch](https://www.npmjs.com/package/node-fetch)
- [Funções assíncronas e async/await](https://imasters.com.br/desenvolvimento/funcoes-assincronas-e-retornos-como-o-async-await-tornaram-o-codigo-mais-legivel)
