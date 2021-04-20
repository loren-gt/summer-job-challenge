# GABARITO DOS EXERCÍCIOS GERAIS E BÔNUS :rocket:

## EXERCÍCIO 1 + BÔNUS
>exercise-1.html

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Doggos</title>
</head>
<body>
  <h1>Cutest dogs ever!</h1>
  <button type="button" id="button">Next!</button>
  <script>
    const API_URL = 'https://dog.ceo/api/breeds/image/random';
    const fetchJoke = () => {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => document.getElementById('dog').src = data.message)
        .catch(error => alert(error));
    }
    fetchJoke();
    
    const nextDog = document
      .getElementById('button')
      .addEventListener('click', () => {
      fetchJoke();
    }) 
  </script>
   <img id="dog" src="" alt="Cute Dog">
</body>
</html>
```
---

## EXERCÍCIO 2 + BÔNUS
>exercise-1.html

```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Doggos</title>
</head>
<body>
  <h1>Cutest dogs ever!</h1>
  <button type="button" id="button">Next!</button>
  <script>
    const API_URL = 'https://dog.ceo/api/breeds/image/random';
    const fetchJoke = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      document.getElementById('dog').src = data.message;
    }
    fetchJoke();
    
    const nextDog = document
      .getElementById('button')
      .addEventListener('click', () => {
      fetchJoke();
    }) 
  </script>
   <img id="dog" src="" alt="Cute Dog">
</body>
</html>
```
