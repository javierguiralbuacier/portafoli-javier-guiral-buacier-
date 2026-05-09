document.addEventListener('dblclick', inici);
//la forma
function inici(){
    console.log('has fet click');    
}

//2a forma
document.addEventListener('keyup', (tecla)=>{
    document.getElementsByTagName('h1')[0].style.color = 'orange';
    document.getElementsByTagName('h1')[0].style.background = 'blue';
    // console.log('tecla.key');
    // console.log('tecla.keycode')

    if(tecla.key == 'ArrowUp'){
        console.log('amunt!');
    }

    if(tecla.key == 'ArrowDown'){
        console.log('abaix!');
    }

    if(tecla.key == 'ArrowLeft'){
        console.log('izquierda!');
    }

    if(tecla.key == 'ArrowRight'){
        console.log('derecha!');
    }
    if(tecla.key == ' '){
        console.log('saltar!');
    }

});

document.addEventListener('keydown', ()=>{
    console.log('has pres una tecla');
    document.getElementsByTagName('h1')[0].style.color = 'pink';
});