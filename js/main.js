//Crea un array di 10 oggetti che rappresentano una
//zucchina, indicando per ognuna varietà, peso e lunghezza.



arrayZucchine = [{
        varieta: "verde",
        peso: 1,
        lunghezza: 9
    },
    {
        varieta: "rossa",
        peso: 2,
        lunghezza: 15
    },
    {
        varieta: "gialla",
        peso: 3,
        lunghezza: 10
    },
    {
        varieta: "blu",
        peso: 4,
        lunghezza: 18
    },
    {
        varieta: "verde",
        peso: 5,
        lunghezza: 20
    },
    {
        varieta: "arancione",
        peso: 6,
        lunghezza: 10
    },
    {
        varieta: "marcia",
        peso: 7,
        lunghezza: 11
    },
    {
        varieta: "grande",
        peso: 10,
        lunghezza: 12
    },
    {
        varieta: "piccola",
        peso: 9,
        lunghezza: 14
    },
    {
        varieta: "media",
        peso: 10,
        lunghezza: 8
    }
]

var arrayZucchineMin15 = [];
var arrayZucchineMax15 = [];

//Calcola quanto pesano tutte le zucchine.
var sommaPeso = 0
for (key in arrayZucchine) {
    sommaPeso += arrayZucchine[key].peso;
};
console.log(sommaPeso);

//Dividi in due array separati le zucchine che misurano
//meno o più di 15cm.


for (key in arrayZucchine) {
    if (arrayZucchine[key].lunghezza < 15) {
        arrayZucchineMin15.push(arrayZucchine[key]);
    } else {
        arrayZucchineMax15.push(arrayZucchine[key]);
    }
};
console.log(arrayZucchineMin15);
console.log(arrayZucchineMax15);


//Infine stampa separatamente quanto pesano i due gruppi
//di zucchine

var sommaPesoMin15 = 0;

for (key in arrayZucchineMin15) {
    sommaPesoMin15 += arrayZucchineMin15[key].peso;
};

console.log(sommaPesoMin15);

var sommaPesoMax15 = 0;

for (key in arrayZucchineMax15) {
    sommaPesoMax15 += arrayZucchineMax15[key].peso;
};

console.log(sommaPesoMax15);

//Scrivi una funzione che accetti una stringa come
//argomento e la ritorni girata (es. Ciao -> oaiC)

function parolaAlcontrario(parola) {
    var parolaAlDritto = [];
    for (var i = 0; i < parola.length; i++) {
        parolaAlDritto.push(parola[i]);
    }
    var parolaContraria = "";
    for (var i = parola.length - 1; i >= 0; i--) {
        parolaContraria += parolaAlDritto[i];

    }
    return parolaContraria
};

console.log(parolaAlcontrario("supercalifragilistichespiralitoso"));

/* 1)
Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati. */

var nomi = ["Edoardo", "Filippo", "Gertrude", "Genoveffa", "Gergingetorige"];

var cognomi = ["Pollo", "Mucca", "Gallina", "Maiale", "Zucchine", "Patateconpatate"];

var falsaLista = [{
        Nome: "",
        Cognome: ""
    },
    {
        Nome: "",
        Cognome: ""
    },
    {
        Nome: "",
        Cognome: ""
    }
];

console.log(cognomi);

for (var i = 0; i < falsaLista.length; i++) {
    falsaLista[i].Nome = nomi[getRndInteger(0, nomi.length - 1)];
    falsaLista[i].Cognome = cognomi[getRndInteger(0, cognomi.length - 1)];
};

console.log(falsaLista);


//funzioni utilizzate

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



/*
2)
Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari */

var numeri = [10, 20, 304, 40, 33, 55, 66, 87, 98, 50];

var sommadispari = 0;

for (var i = 0; i < numeri.length; i++) {
    if (i % 2 != 0) {
        sommadispari += numeri[i];
    }
};
console.log(sommadispari);



/*
3)
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

var arrayCorto = [1, 2, 3, 4];
var arrayLungo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


while (arrayCorto.length < arrayLungo.length) {
    arrayCorto.push(getRndInteger(1, 10));
};
while (arrayCorto.length > arrayLungo.length) {
    arrayLungo.push(getRndInteger(1, 10));
};

console.log(arrayLungo);
console.log(arrayCorto);



//funzioni utilizzate

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};



/*
4)
Scrivi una funzione che fonda due array (aventi lo stesso
numero di elementi) prendendo alternativamente gli
elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
5)
Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */