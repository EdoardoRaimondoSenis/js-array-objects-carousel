const img = [
    {
        immagine: 'img/01.webp',
        titolo: "Marvel's Spiderman Miles Morales",
        descrizione: "Experienca the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man"
    },
    {
        immagine: 'img/02.webp',
        titolo: "Marvel's Spiderman Miles Morales",
        descrizione: "Experienca the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man"
    },
    {
        immagine: 'img/03.webp',
        titolo: "Marvel's Spiderman Miles Morales",
        descrizione: "Experienca the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man"
    },
    {
        immagine: 'img/04.webp',
        titolo: "Marvel's Spiderman Miles Morales",
        descrizione: "Experienca the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man"
    },
    {
        immagine: 'img/05.webp',
        titolo: "Marvel's Spiderman Miles Morales",
        descrizione: "Experienca the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man"
    }
];

let leftarrow = document.getElementById("leftarrow");
let rightarrow = document.getElementById("rightarrow");

const contenitore = document.querySelector(".prisultato");

for (let key in img) {
    let immagini = img[key];
    const immagineuno = img.filter ((imgOgg) => imgOgg.immagine);

    let contimmagini = `
                <div class="container">
                    <img class="risultato" src="${immagineuno}">
                /div>
          `;
          contenitore.innerHTML += contimmagini;

};


// for (let i = 0; i < img.length; i++) {
//     let immagini = img[i];
    
//     let contimmagini = `
//             <div class="container">
//                 <img class="risultato" src="${immagini}">
//             </div>
//             `;
//     contenitore.innerHTML += contimmagini;
    
// }



const container = document.getElementsByClassName("risultato");
console.log(container);

let activecontainer = 0;
container[activecontainer].classList.add("visible");


rightarrow.addEventListener('click',
    function() {
        container[activecontainer].classList.remove("visible");
        activecontainer++;
        container[activecontainer].classList.add("visible");
    }
);

leftarrow.addEventListener('click',
    function() {
        container[activecontainer].classList.remove("visible");
        activecontainer--;
        container[activecontainer].classList.add("visible");
    }
);

