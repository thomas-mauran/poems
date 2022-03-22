const url = "https://poetrydb.org/random"

const titre = document.getElementById("titre")
const auteur = document.getElementById("auteur")
const ligneDiv = document.getElementById("ligne-div")

let title, author, text;


function getData(){



    document.querySelector("body").style.backgroundColor = `rgba(${randomIntFromInterval(20, 220)}, ${randomIntFromInterval(20, 220)}, ${randomIntFromInterval(20, 220)}, 0.5)`

    xml = new XMLHttpRequest()

    xml.open("GET", url, false)

    xml.addEventListener("load", () => {

        if(xml.status != 200){
            alert(`Error ${xml.status}: ${xml.statusText}`);         
        }else{
            response = JSON.parse(xml.responseText);
            response = response[0]

            title = response.title
            author = response.author
            text = response.lines

            displayData()
        }
    })
    xml.send()
}

function displayData(){
    titre.innerText = title
    auteur.innerText = author


    text.forEach(ligne => {
        pLigne = document.createElement("p")
        pLigne.innerText = ligne
        ligneDiv.appendChild(pLigne)
    });

}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
    }