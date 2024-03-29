function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if(idade>= 0 && idade <10){
              // Criança  
              img.setAttribute('src','menino.png')
            } else if (idade< 21){
                // jovem
              img.setAttribute('src','homemaduto.png')
            } else if (idade < 50){
              img.setAttribute('src','homem-40.png-24.png')
                //Adulto
            }else {
              img.setAttribute('src','homemidoso.png')
                //idoso
            }
                
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>= 0 && idade <10){
                // Criança  
                img.setAttribute('src','menina.png')
              } else if (idade< 21){
                  // jovem
                  img.setAttribute('src','mulheradulta.png')
              } else if (idade < 50){
                  //Adulto
                  img.setAttribute('src','mulheres-negras.png')
              }else {
                  //idoso
                  img.setAttribute('src','mulheridosa.png')
              }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}