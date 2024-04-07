const btnE1=document.getElementById("btn");
const jokeE1=document.getElementById("joke")

const apiKey="EAOkrKRlXuFo1u9Hpunv7g==fRKqCC5fxv83IaTN";

const options={
    method:"Get",
    headers:{
        "X-Api-Key":apiKey,
    },
};

const apiURL ="https://api.api-ninjas.com/v1/jokes?limit=1"

async function getJoke(){
    try{
        jokeE1.innerText="updating...";
        btnE1.disabled=true;
        btnE1.innerText="Loading....";
        const response=await fetch(apiURL,options);
        const data= await response.json();

        btnE1.disabled=false;
        btnE1.innerText="Tell me a joke";
        jokeE1.innerText=data[0].joke;

    } catch(error){
        jokeE1.innerText="An error happened, try again later";
        btnE1.disabled=false;
        btnE1,innerText="Tell me a joke";
        console.log(error);
    }
}

btnE1.addEventListener("click",getJoke)