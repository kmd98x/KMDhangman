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




const woorden = ["hallo","vloer","droom","tafel"] 
const buttons = document.querySelectorAll("button")
let gekozenwoord = woorden[Math.floor(Math.random() * woorden.length)].split("")

// BRON SPLIT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split. 0 is de 1e woord van het woord en de split zorgt ervoor dat hallo gesplit wordt in gekozenwoord
console.log(gekozenwoord)


//we selecteren eerst alle buttons, en dan loopen we door elke button en vervolgens doen we iets(de functie) met elke button 


// BRON: FOR LOOP:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#converting_a_for_loop_to_foreach/ https://www.youtube.com/watch?v=24Wpg6njlYI

// ik heb een lijst van allemaal knoppeN(de letters). We gaan door alle knoppen heen met de for loop

for (let i=0; i < buttons.length; i++){
    let button = buttons[i]
    function checkletters(event) {
        event.preventDefault()

        //BRON PREVENT DEFAULT: je wilt dat als je op een letter klikt,dat de pagina niet refreshed wordt, maar dat je op dezelfde pagina blijft. Bron: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault - 

        //BRON LOWER CASE: https://www.shecodes.io/athena/23781-how-to-convert-a-string-to-lowercase-in-javascript#:~:text=To%20convert%20a%20string%20to%20lowercase%2C%20we%20can%20use,toLowerCase()%20method%20in%20JavaScript.&text=let%20myString%20%3D%20%22HeLLo%20WoRLD!,output%3A%20%22hello%20world!%22

        const kleinLetter = button.textContent.toLowerCase()
        // console.log(kleinLetter)

        //BRON INCLUDES :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes?retiredLocale=nl

        if (gekozenwoord.includes(kleinLetter)) {
            voegDeLetterToe (gekozenwoord, kleinLetter)
            // console.log(leine letter bestaat in gekozen woord)
        }
        else {
            voegDeAfbeeldingToe ()
            //console.log("Kleine letter bestaat niet in gekozen woord")
        }
    }

    button.addEventListener("click", checkletters)
}


//we gaan nu kleine letters maken, want de woorden/letters in de array zijn kleine letters en de keyboard grote, dus dan krijg je een false uitkomst


//Nu gaan we kijken of de letter in het woord voorkomt


function voegDeLetterToe (gekozenwoord, kleinLetter){
    const letters = document.querySelectorAll(".textarea p")
    
    gekozenwoord.forEach(function(letter, i) {
        if(letter === kleinLetter){
            // console.log(kleinLetter)
            letters[i].textContent = kleinLetter
            // console.log(letters[i])
        }
    }) 
}

function voegDeAfbeeldingToe (){
    
}





