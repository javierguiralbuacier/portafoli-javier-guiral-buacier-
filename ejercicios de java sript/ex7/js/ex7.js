
let nom = 'joan';

// console.log(nom);

// console.log(`el teu nom es ${nom}`); 

let numero = '18' 

// console.log(numero);
// console.log(`tens ${numero} anys`);


let fruita = ['maduixes','pomes','melo','cireres'];

// console.log(fruita); 
// console.log(fruita[0]);
// console.log(fruita[1]);
// console.log(fruita[2]);
// console.log(fruita[3]);


// for(i=0; i < fruita.length; i++){
//    console.log(fruita[i]);
// }

// oficina.push('paperera');       
// oficina.unshift('teclat');

let oficina = ['cadira','taula','pantalla','boli','impresora'];

// for(i=0; i < oficina.length; i++){
//    console.log(oficina[i]);
// }

//segon exercici 

document.getElementById('afegir').addEventListener('click',afegir);

let arry_coses =[];

function afegir({
    let element = prompt('escriu lo que tens a casa');
    
    array_cosses.push(element);
    console.log(array_coses)
})