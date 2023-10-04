import tablica_kategorii_i_piosenek from './tablica_kategorii_i_piosenek.js';

const startButton = document.getElementById("startButton");
const startBox = document.getElementById("startBox");
const divGra = document.getElementById("divGra");
const divTitles = document.getElementById("divTitles");
const iloscElementow = tablica_kategorii_i_piosenek.length;
//const iloscKategorii = 15

startButton.addEventListener("click",ClickStart)

function start()
{
    //tablica z nazwami kategorii
    for(let i = 0; i < iloscElementow; i++)
    {
        const box = document.createElement('div'); // Tworzenie nowego elementu <p>
        box.textContent = tablica_kategorii_i_piosenek[i].Kategoria; // Ustawienie tekstu w elemencie <p>
        box.setAttribute("data-title",tablica_kategorii_i_piosenek[i].Piosenka)
        if(i%3 == 1)
        {
            box.classList.add("rzadPierwszy");
        }
        if(i%3 == 2)
        {
            box.classList.add("rzadDrugi");
        }
        if(i%3 == 0)
        {
            box.classList.add("rzadTrzeci");
        }
        if(i==0)
        {
            box.classList.add("kolumna1")
        }
        else
        {
            if(i%5 == 0)
            {
                box.classList.add("kolumna5")
            }
            if(i%5 == 1)
            {
                box.classList.add("kolumna1")
            }
            if(i%5 == 2)
            {
                box.classList.add("kolumna2")
            }
            if(i%5 == 3)
            {
                box.classList.add("kolumna3")
            }
            if(i%5 == 4)
            {
                box.classList.add("kolumna4")
            }
        }
        divGra.appendChild(box); // Dodanie elementu <p> do listy
    }
}


function zniknijNaZawsze(event) {
    const target = event.target;
    if (target == divGra || divTitles.classList.contains("show"))
    {
        divTitles.classList.add("hide")
        divTitles.classList.remove("show")
    }
    else
    {   
        divTitles.classList.add("show")
        divTitles.classList.remove("hide")
        divTitles.textContent = target.getAttribute("data-title");/*coś co zwróci wartość zapisaną w data-title*/;
        target.classList.add("hideForever");
    }
    console.log(divTitles.classList.contains("show"))
}
divGra.addEventListener("click", zniknijNaZawsze);
function ClickStart()
{
    start()
    startBox.classList.add("hideForever")
}