import fetch from "node-fetch";

function demoFetchWithThen() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((res) => console.log(res));
  console.log('heelo dog');
}

async function demoFetchWithAwait() {
  const response = await fetch(
    "https://api.kanye.rest/"
  );
  const jsonBody = await response.json();
  console.log(jsonBody);
  console.log('hello kanye');
}

function demoFetchNoAsync() {
  const dogData = fetch("https://dog.ceo/api/breeds/image/random")
  
  console.log(dogData);
  console.log('hellol')
}

demoFetchNoAsync();

demoFetchWithThen();
console.log('hello 1')
demoFetchWithAwait();
console.log('hello2')

