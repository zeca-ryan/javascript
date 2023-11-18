function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'img/bebe-m.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-m.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-m.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //bebe
                img.setAttribute('src', 'img/bebe-f.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovem-f.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Gênero: ${genero}, Idade: ${idade}`
        res.appendChild(img)
    }
}