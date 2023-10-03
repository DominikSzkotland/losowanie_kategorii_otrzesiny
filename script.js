const startButton = document.getElementById("startButton");
const startBox = document.getElementById("startBox");
const divGra = document.getElementById("divGra");
const tablicaKategorii = [];
// const iloscKategorii = tablicaKategorii.length
const iloscKategorii = 15

startButton.addEventListener("click",znikanijNaZawsze)

function start()
{
    //tablica z nazwami kategorii
    for(let i = 1; i < iloscKategorii + 1; i++)
    {
        const box = document.createElement('div'); // Tworzenie nowego elementu <p>
        box.textContent = "Kategoria"; // Ustawienie tekstu w elemencie <p>
        if(i <= Math.ceil (iloscKategorii)/3)
        {
            box.classList.add("rzadPierwszy");
            
        }
        if(i > Math.ceil(iloscKategorii)/3 && i <= (Math.ceil(iloscKategorii)/3)*2)
        {
            box.classList.add("rzadDrugi");
        }
        if(i > (Math.ceil(iloscKategorii)/3)*2)
        {
            box.classList.add("rzadTrzeci");
        }
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
        divGra.appendChild(box); // Dodanie elementu <p> do listy
    }
}

function znikanijNaZawsze()
{
    startBox.classList.add("hideForever")
    start()
}