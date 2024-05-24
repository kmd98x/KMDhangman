/**
 * - var creeeren met een array die woorden heeft
 * - alle buttons selecteren lopen door elke button
 * - eventListener toevoegen aan elke button
 * - checken we of de letter van de button = letter i.d array
 * - ja:
 *      letter verschijnt bij textArea
 * - nee:
 *      deel van de afbeelding verschijnt
 */

const spelRegels = document.querySelector (".spel-regels p") // dit pakt 'spel' uit mijn HTML 

const spelRegelsPijltje = document.querySelector (".spel-regels img")

const spelRegelsButton = document.querySelector (".spel-regels button")

function klikopspelregels () {
    spelRegelsPijltje.classList.toggle("rotate180")
    spelRegels.classList.toggle("uitgeklapt")
}

spelRegelsButton.addEventListener("click", klikopspelregels)


let levens = 10
const woorden = ["hallo", "vloer", "droom", "tafel", "appel", "stoel", "vogel", "boter", "druif",
    "klein", "lente", "gelei", "harde", "aarde",
    "liefs", "kaars", "fiets", "brood", "smaak",
    "regen", "winst", "klank", "bloem", "schat"]
const buttons = document.querySelectorAll(".keyboard button")

//als je bv 1e woord wou kiezen, doe je let gekozenwoord = woorden[0].split(""). Maar nu heb ik 4 woorden in mijn array, dus om een random woord uit mijn array te kiezen, maak ik gebruik van math.floor(Math.random()) en hij mag niet een grotere nummer genereren dan de array, dus daarom * woorden.lenght

// BRON SPLIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split. 0 is de 1e woord van het woord en de split zorgt ervoor dat hallo gesplit wordt in gekozenwoord



let gekozenwoord = woorden[Math.floor(Math.random() * woorden.length)].split("")



console.log(gekozenwoord)


//we selecteren eerst alle buttons, en dan loopen we door elke button en vervolgens doen we iets(de functie) met elke button 


// BRON: FOR LOOP:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#converting_a_for_loop_to_foreach/ https://www.youtube.com/watch?v=24Wpg6njlYI

//BRON PREVENT DEFAULT: je wilt dat als je op een letter klikt,dat de pagina niet refreshed wordt, maar dat je op dezelfde pagina blijft. Bron: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault - 

// ik heb een lijst van allemaal knoppen(de letters). We gaan door alle knoppen(letters) heen met de for loop

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i]

    //Deze functie heeft 3 acties, nl: 1: hij prevent, dus het voorkomt dat de pagina wordt herladen. 2; de letters worden klein gemaakt. 3; het checkt of het gekozenwoord de letter bevat.
    function checkletters(event) {
        event.preventDefault()

        //BRON LOWER CASE: https://www.shecodes.io/athena/23781-how-to-convert-a-string-to-lowercase-in-javascript#:~:text=To%20convert%20a%20string%20to%20lowercase%2C%20we%20can%20use,toLowerCase()%20method%20in%20JavaScript.&text=let%20myString%20%3D%20%22HeLLo%20WoRLD!,output%3A%20%22hello%20world!%22

        //we gaan nu kleine letters maken, want de woorden/letters in de array zijn kleine letters en de keyboard grote, dus dan krijg je een false uitkomst

        const kleineLetter = button.textContent.toLowerCase()
        console.log(kleineLetter)


        //button heeft niet de class geklikt, en in css gaan we designen zodat geklikt wel te zien is en je kunt er niet meer op klikken.
        if (!button.classList.contains("geklikt")) {
            button.classList.add("geklikt")

            //BRON INCLUDES :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?retiredLocale=nl

            if (gekozenwoord.includes(kleineLetter)) {
                //de functie heeft voegDeLetterToe en heeft 2 parameters.
                voegDeLetterToe(gekozenwoord, kleineLetter)

                // console.log(leine letter bestaat in gekozen woord)
            }
            else {
                //dit telt de levens af van de gebruiker als hij/zij op een verkeerde letter klikt.
                levens--
                weergeefLevens()
                //console.log(levens)

                if (levens<1) {
                    geefResultaat("Helaas","U heeft verloren")
                }

                voegDeAfbeeldingToe()
                //console.log("Kleine letter bestaat niet in gekozen woord")
            }

        }

    }

    //als je op een button (in dit geval een letter clickt, dan voert het de fucntie checkletters uit en daarin heb je ook nog de fucntie voegDeLetter toe die hij ook uitvoert.
    button.addEventListener("click", checkletters)
}


//In deze functie kijken we dus of de kleineLetter in de gekozenwoord voorkomt.
const letters = document.querySelectorAll(".textarea p")
function voegDeLetterToe(gekozenwoord, kleineLetter) {
    //we pakken al die _ tekens van de p tag uit mn html.

    let gekozenLetters = []

    //gekozenwoord is al gesplitst in regel 23. We gaan door het gekozenwoord en kijken vervolgens of het kleineletter in het gekozenwoord bestaat. Zo ja, dan plaatsen we de kleineLetter op de juiste plek mbv letters[i]. De i zegt welke positie hij krijgt.
    gekozenwoord.forEach(function (letter, i) {
        if (letter === kleineLetter) {
            // console.log(kleineLetter)
            //console.log(i)
            letters[i].textContent = kleineLetter
            //console.log(letters[i])
        }
    })

    letters.forEach(function (letter) {
        gekozenLetters.push(letter.textContent)

    })

    //console.log(gekozenLetters)

    if (gekozenLetters.join("") === gekozenwoord.join("")) {
        geefResultaat("Hoera","U heeft gewonnen")
        //console.log("gewonnen")
    }
    //console.log(gekozenLetters.join(""))

}


function voegDeAfbeeldingToe() {
    const afbeeldingen = document.querySelectorAll(".linkerKant img")

    //levens is een global scope dus ik kan het hier meteen gebruiken. Dus ik hoef het niet als een parameter te gebruiken.
    afbeeldingen[levens].classList.add('laatZien')
    //console.log(afbeeldingen)
}

// function gewonnen() {

//     const opnieuwSpelen = document.querySelector(".opnieuw")
//     opnieuwSpelen.addEventListener("click", nieuwespel)
//     const eindstand = document.querySelector(".eindstand")
//     eindstand.classList.remove("hidden")
// }


function nieuwespel() {


    //console.log("nieuwespel")

    gekozenwoord = woorden[Math.floor(Math.random() * woorden.length)].split("")

    console.log(gekozenwoord)

    const eindstand = document.querySelector(".eindstand")
    eindstand.classList.add("hidden")
    levens = 10
    weergeefLevens()
    const afbeeldingen = document.querySelectorAll(".linkerKant img")
    afbeeldingen.forEach(function (afbeelding) {
        afbeelding.classList.remove("laatZien")

    })

    buttons.forEach(function (button) {
        button.classList.remove("geklikt")
    })


    letters.forEach(function (letter) {
        letter.textContent = "__"
        console.log(letter)
    })

}

function geefResultaat(titel,tekst){
    
    const opnieuwSpelen = document.querySelector(".opnieuw")
    opnieuwSpelen.addEventListener("click", nieuwespel)
    const eindstand = document.querySelector(".eindstand")
    eindstand.classList.remove("hidden")
    const eindstandH= document.querySelector(".eindstand h3").textContent=titel
    const eindstandP= document.querySelector(".eindstand p").textContent=tekst
}


function weergeefLevens(){
    const aantalKansen = document.querySelector (".aantalKansen").textContent= "Probeer het nog "+ levens+ " keer"
}

