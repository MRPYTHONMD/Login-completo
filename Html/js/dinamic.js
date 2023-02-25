function cambioTema(){
    if(document.getElementById('button').innerHTML==="Tema negro"){
        document.body.style.background='#73C6B6'
        document.body.style.color='blue'
        document.getElementById('button').innerHTML='tema claro'
    }else{
        document.body.style.background='#ECF0F1'
        document.body.style.color='#ECF0F1'
        document.getElementById('button').innerHTML='Tema negro'
    }

}
