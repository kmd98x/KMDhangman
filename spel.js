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



let levens = 10
const woorden = ["hallo","vloer","droom","tafel"] 
const buttons = document.querySelectorAll("button")

//als je bv 1e woord wou kiezen, doe je let gekozenwoord = woorden[0].split(""). Maar nu heb ik 4 woorden in mijn array, dus om een random woord uit mijn array te kiezen, maak ik gebruik van math.floor(Math.random()) en hij mag niet een grotere nummer genereren dan de array, dus daarom * woorden.lenght

// BRON SPLIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split. 0 is de 1e woord van het woord en de split zorgt ervoor dat hallo gesplit wordt in gekozenwoord


let gekozenwoord = woorden[Math.floor(Math.random() * woorden.length)].split("")

console.log(gekozenwoord)


//we selecteren eerst alle buttons, en dan loopen we door elke button en vervolgens doen we iets(de functie) met elke button 


// BRON: FOR LOOP:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#converting_a_for_loop_to_foreach/ https://www.youtube.com/watch?v=24Wpg6njlYI

//BRON PREVENT DEFAULT: je wilt dat als je op een letter klikt,dat de pagina niet refreshed wordt, maar dat je op dezelfde pagina blijft. Bron: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault - 

// ik heb een lijst van allemaal knoppen(de letters). We gaan door alle knoppen(letters) heen met de for loop

for (let i=0; i < buttons.length; i++){
    let button = buttons[i]

    //Deze functie heeft 3 acties, nl: 1: hij prevent, dus het voorkomt dat de pagina wordt herladen. 2; de letters worden klein gemaakt. 3; het checkt of het gekozenwoord de letter bevat.
    function checkletters(event) {
        event.preventDefault()

        //BRON LOWER CASE: https://www.shecodes.io/athena/23781-how-to-convert-a-string-to-lowercase-in-javascript#:~:text=To%20convert%20a%20string%20to%20lowercase%2C%20we%20can%20use,toLowerCase()%20method%20in%20JavaScript.&text=let%20myString%20%3D%20%22HeLLo%20WoRLD!,output%3A%20%22hello%20world!%22

        //we gaan nu kleine letters maken, want de woorden/letters in de array zijn kleine letters en de keyboard grote, dus dan krijg je een false uitkomst

        const kleinLetter = button.textContent.toLowerCase()
        // console.log(kleinLetter)

        //BRON INCLUDES :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?retiredLocale=nl

        if (gekozenwoord.includes(kleinLetter)) {
             //de functie heeft voegDeLetterToe en heeft 2 parameters.
            voegDeLetterToe (gekozenwoord, kleinLetter)
            
            // console.log(leine letter bestaat in gekozen woord)
        }
        else {
            //dit telt de levens af van de gebruiker als hij/zij op een verkeerde letter klikt.
            levens--
            //console.log(levens)

            voegDeAfbeeldingToe ()
            //console.log("Kleine letter bestaat niet in gekozen woord")
        }
    }

    //als je op een button (in dit geval een letter clickt, dan voert het de fucntie checkletters uit en daarin heb je ook nog de fucntie voegDeLetter toe die hij ook uitvoert.
    button.addEventListener("click", checkletters)
}


//In deze functie kijken we dus of de kleinletter in de gekozenwoord voorkomt.

function voegDeLetterToe (gekozenwoord, kleinLetter){
    //we pakken al die _ tekens van de p tag uit mn html.
    const letters = document.querySelectorAll(".textarea p")
    
    //gekozenwoord is al gesplitst in regel 23. We gaan door het gekozenwoord en kijken vervolgens of het kleineletter in het gekozenwoord bestaat. Zo ja, dan plaatsen we de kleinletter op de juiste plek mbv letters[i]. De i zegt welke positie hij krijgt.
    gekozenwoord.forEach(function(letter, i) {
        if(letter === kleinLetter){
            // console.log(kleinLetter)
            //console.log(i)
            letters[i].textContent = kleinLetter
            //console.log(letters[i])
        }
    }) 
}

function voegDeAfbeeldingToe (){
    const afbeeldingen = document.querySelectorAll(".linkerKant img")

    //console.log(afbeeldingen)

    //levens is een global scope dus ik kan het hier meteen gebruiken. Dus ik hoef het niet als een parameter te gebruiken.
    afbeeldingen[levens].classList.add('laatZien')
    console.log(afbeeldingen)
}







