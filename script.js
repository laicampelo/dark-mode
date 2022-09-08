document.querySelector('.ball').addEventListener('click', (e)=>{;
    e.target.classList.toggle('ball-move');
    document.body.classList.toggle('dark');
    diaOuNoite ()
});


function diaOuNoite (){
    let ceu=document.querySelector('#botao')
    let botao=document.querySelector('.ball');

    if (document.body.className == "dark") {
        ceu.classList.add("noite");
        ceu.classList.remove("dia");
        botao.classList.add("ball-noite");
        botao.classList.remove("ball-dia");
    }else {
        ceu.classList.add("dia");
        ceu.classList.remove("noite");
        botao.classList.add("ball-dia");
        botao.classList.remove("ball-noite");
    }
    
}

