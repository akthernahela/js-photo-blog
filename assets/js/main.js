/*
Milestone 1

Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica:
concentriamoci su HTML e CSS riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)

Milestone 2

Utilizzando Postman, testiamo una chiamata a questo endpoint: 
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

Milestone 3

Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, 
sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

*/
/*
//Postman result:
- https://lanciweb.github.io/demo/api/pictures/

[
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
]
*/

//Creo una variabile per url
const linkImage = "https://lanciweb.github.io/demo/api/pictures/";
//Variabile per prendere il row dove inserire le col
const rowCol = document.getElementById('rowToInsert');
/*
//Aggiungo una funzione per racchiudere un ciclo for 
function getCol() {
    let colContainer = '';
    axios.get(linkImage)
        .then(response => {
            const pictures = response.data
            //Utilizzo un ciclo forEach
            pictures.forEach(picture => {
                //Per ogni picture devo aggiungere il codice HTML (CREO UNA VARIABILE CHE INCLUDE IL CODICE)
                const colDiv = `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <div class="pin">
                            <img src="./assets/img/pin.svg" alt="">
                        </div>
                        <img src="${picture.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text-body-secondary date">${picture.date}</h6>
                            <h5 class="card-title">${picture.title}</h5>
                        </div>
                    </div>
                </div>`
                //Concateno alla variabile stinga creata precedentemente
                colContainer += colDiv;
            });
            rowCol.innerHTML = colContainer;
        })
}
getCol()
*/

//Faccio la funzione precedente con l'overlay
//Aggiungo una funzione per racchiudere un ciclo for 
function getCol() {
    let colContainer = '';
    axios.get(linkImage)
        .then(response => {
            const pictures = response.data
            //Utilizzo un ciclo forEach
            pictures.forEach(picture => {
                //Per ogni picture devo aggiungere il codice HTML (CREO UNA VARIABILE CHE INCLUDE IL CODICE)
                const colDiv = `
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <div class="pin">
                            <img src="./assets/img/pin.svg" alt="">
                        </div>
                        <img src="${picture.url}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-subtitle mb-2 text-body-secondary date">${picture.date}</h6>
                            <h5 class="card-title">${picture.title}</h5>
                        </div>
                    </div>
                </div>`
                //Concateno alla variabile stinga creata precedentemente
                colContainer += colDiv;
            });
            rowCol.innerHTML = colContainer;
        })
}
getCol()

