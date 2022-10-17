import fetch from "node-fetch";

    let joke = fetch('https://jokestemp.neillbogie.repl.co/random_joke')
    console.log(joke);


async function doDemo() {
    fetch('https://jokestemp.neillbogie.repl.co/random_joke')
    .then(response => console.log(response));
}

// doDemo();


async function doDemo2() {
    fetch('https://jokestemp.neillbogie.repl.co/random_joke')
    .then(response => response.json())
    .then(response => console.log(response))
}

doDemo2();