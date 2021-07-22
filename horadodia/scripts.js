function carregar() {
    var msg = document.getElementById('msg')
    var photo = document.getElementById('foto')
    var data = new Date();
    var time = data.getHours();
    var time = 8
    msg.innerHTML = `<h2>São exatamente ${time}h</h2>.`
    if (time>=0&&time < 12) {
        photo.src = "imagens/imagem_manha.png"
        document.body.style.background = '#F7AB42'
    } else if (time >= 12 && time <=18 ) {
        photo.src = "imagens/imagem_tarde.png"
        document.body.style.background = '#E7A372'
    } else {
        photo.src = "imagens/imagem_noite.jpg"
        document.body.style.background = '#332944'
    }
}