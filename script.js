// Tablica z piosenkami

const tablica_kategorii_i_piosenek = [
    {
      Kategoria: "Powiew lata",
      Piosenka: "Wakacje znów będą wakacje"
    },
    {
      Kategoria: "Zazwyczaj bez łez",
      Piosenka: "Chłopaki nie płaczą"
    },
    {
      Kategoria: "Morskie opowieść",
      Piosenka: "Morskie opowieść"
    },
    {
      Kategoria: "Bojowa szanta",
      Piosenka: "Bitwa (szanta)"
    },
    {
      Kategoria: "Odkrywcy",
      Piosenka: "Drobnostka z Vaiany"
    },
    {
      Kategoria: "Dla każdego",
      Piosenka: "We are the champion"
    },
    {
      Kategoria: "Nie dla Kubusia Puchatka",
      Piosenka: "Pszczółka Maja"
    },
    {
      Kategoria: "Kawa czy herbata",
      Piosenka: "Kawka na wynos"
    },
    {
      Kategoria: "Strata",
      Piosenka: "O Ela straciłaś przyjaciela"
    },
    {
      Kategoria: "Prestiż w górach",
      Piosenka: "Zakopane"
    },
    {
      Kategoria: "World of tanks",
      Piosenka: "4 pancerni i pies"
    },
    {
      Kategoria: "Działania na liczbach ujemnych",
      Piosenka: "Mniej niż 0"
    },
    {
      Kategoria: "Marzenia zawodowe",
      Piosenka: "Chciałbym być marynarzem"
    },
    {
      Kategoria: "Dla murarza",
      Piosenka: "Czerwony jak cegła"
    },
    {
      Kategoria: "Nic nie muszę, wszystko mogę",
      Piosenka: "Mam tę moc"
    },
    {
      Kategoria: "Zimowe szaleństwo",
      Piosenka: "Ulepimy dziś bałwana"
    },
    {
      Kategoria: "Warzywna piosenka",
      Piosenka: "Ogórek zielony ma garniturek"
    },
    {
      Kategoria: "Kolejowa piosenka",
      Piosenka: "Nic nie robić nie mieć zmartwień"
    },
    {
      Kategoria: "Skok",
      Piosenka: "Gumisie"
    },
    {
      Kategoria: "Zero trosk",
      Piosenka: "Hakuna matata"
    }
  ];

// Dalsza czesc

const startButton = document.getElementById("startButton");
const startBox = document.getElementById("startBox");
const divGra = document.getElementById("divGra");
const divTitles = document.getElementById("divTitles");
const iloscElementow = tablica_kategorii_i_piosenek.length;

startButton.addEventListener("click",ClickStart)
divGra.addEventListener("click", zniknijNaZawsze);

function start()
{
    for(let i = 0; i < iloscElementow; i++)
    {
        const box = document.createElement('div');
        box.textContent = tablica_kategorii_i_piosenek[i].Kategoria;
        box.setAttribute("data-title",tablica_kategorii_i_piosenek[i].Piosenka)
        
        if(i%4 == 0)
        {
            box.classList.add("kolumna2")
            box.classList.add("rzadDrugi");
            
        }
        if(i%4 == 1)
        {
            box.classList.add("kolumna1")
            box.classList.add("rzadPierwszy");
        }
        if(i%4 == 2)
        {
            box.classList.add("kolumna2")
            box.classList.add("rzadPierwszy");
        }
        if(i%4 == 3)
        {
            box.classList.add("kolumna1")
            box.classList.add("rzadDrugi");
        }
        divGra.appendChild(box);
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
        divTitles.textContent = target.getAttribute("data-title");
        target.classList.add("hideForever");
    }
    console.log(divTitles.classList.contains("show"))
}

function ClickStart()
{
    start()
    startBox.classList.add("hideForever")
}

