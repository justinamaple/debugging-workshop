const form = document.getElementById('joke-form')
const jokeList = document.getElementById('joke-list')
const nameInput = document.getElementById('name-input')

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (event) => createJoke(event));
});

function createJoke() {
  event.preventDefault();

  const username = nameInput.value
  if(username === "") return;
  fetchJoke()
}

function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })
  .then(res => res.json())
  .then(jokeData => addJokeToDOM(jokeData))
}

function addJokeToDOM(jokeData) {
  const newJokeLi = document.createElement('li')
  const username = nameInput.value
  const joke = jokeData.joke

  newJokeLi.innerHTML = `<span class="username">${username} says:</span> ${joke}`
  jokeList.append(newJokeLi)
}