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




const woorden = ["hallo"]
const buttons = document.querySelectorAll("button")


// bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

//we selecteren eerst alle buttons, en dan loopen we door elke button en vervolgens doen we iets(de functie) met elke button 



buttons.forEach(function (button) {

    function checkletters(event) {
        event.preventDefault()
        //je wilt dat als je op een letter klikt,dat de pagina niet refreshed wordt, maar dat je op dezelfde pagina blijft. Bron: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        console.log(button.textContent)
    }

    button.addEventListener("click", checkletters)
})

