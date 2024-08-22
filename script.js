function verificar(){
    var data = new Date()
    var ano = data.getFullYear()//Fullyear ano com 4 dígitos
    //Lógica vai ser: Pegar o ano digitado e subtrair ao ano atual(ano)
    var anoDigitado = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(anoDigitado.value.length == 0 || anoDigitado.value >ano){
        window.alert(`Verifique os dados e tente novamente!`)
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoDigitado.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var gênero = ''
        if (fsex[0].checked){
            //Masculino
            gênero = 'Homem'
            if (idade>=0 && idade <10){
                //Criança
                img.setAttribute('src', 'BebeMasculino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
            else if(idade>=10 & idade <21){
                //Jovem
                img.setAttribute('src', 'JovemMasculino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
            else if(idade>=21 & idade <50){
                //Adulto
                img.setAttribute('src', 'AdultoMasculino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
            else{
                //idoso
                img.setAttribute('src', 'IdosoMasculino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
        }
        else if (fsex[1].checked){
            //feminino
            gênero = 'Mulher'
            if (idade>=0 && idade <10){
                //Criança
                img.setAttribute('src', 'BebeFeminino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
            else if(idade>=10 & idade <21){
                //Jovem
                img.setAttribute('src', 'JovemFeminino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
            else if(idade>=21 & idade <50){
                //Adulto
                img.setAttribute('src', 'AdultoFeminino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
            else{
                //idoso
                img.setAttribute('src', 'IdosoFeminino.png')
                img.style.width = '250px'
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade} anos</strong>`
        res.appendChild(img)
    }
}