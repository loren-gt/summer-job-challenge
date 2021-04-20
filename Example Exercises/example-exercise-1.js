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