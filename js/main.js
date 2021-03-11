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