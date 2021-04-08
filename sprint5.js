
const url = "https://icanhazdadjoke.com/";
const options = { 
  method: 'GET',
  headers: {
    "Accept" : "application/json" 
  }
};

const getJoke=async()=>{
    const jokeRecieved= await fetch(url,options);
    const jokeRecievedJSON= await jokeRecieved.json();
   /*  console.log(jokeRecievedJSON.joke); */
   mostrar(jokeRecievedJSON);
}

function mostrar(jokeRecievedJSON){
    document.getElementById('joke').innerHTML = jokeRecievedJSON.joke;
}



