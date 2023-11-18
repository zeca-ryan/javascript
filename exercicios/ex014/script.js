function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'img/manha.png'
        document.body.style.background = '#F2E205'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#F25C05'
    } else {
        // boa noite
        img.src = 'img/noite.png'
        document.body.style.background = '#142740'
    }
}
/*
#F2E205 amarelo manha
#F25C05 laranja tarde
#142740 azul noite
*/