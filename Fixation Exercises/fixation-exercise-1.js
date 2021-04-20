function myFirstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resolvedPromise = (Math.random() * 1000) < 3000
      if(!resolvedPromise) {
        return reject(new Error("Promise falhou durante a requisição!"));
      }
      resolve(console.log("Olá Tryber! Sua requisição foi um sucesso =)"));
    }, 3000);
  })
}

myFirstPromise();