# GABARITO DOS EXERCÍCIOS DE FIXAÇÃO :rocket:

## EXERCÍCIO 1
>fixation-exercise-1.js

```bash
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
```
---

## EXERCÍCIO 2
>fixation-exercise-2.js

```bash
const myPromise = new Promise((resolve, reject) => {
  const number = Math.round(Math.random() * 100);
  const resolvedPromise = (number % 2 === 0 );
  if(!resolvedPromise) {
    return reject(new Error(`Promise rejeitada =( nosso número foi ${number}`))
  }
  resolve(console.log(`Promise resolvida =) nosso número foi ${number}`));
  
});
```
