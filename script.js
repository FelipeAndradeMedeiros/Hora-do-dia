function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date();
    var hora = data.getHours();
    msg.textContent = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png (2).png';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png.png';
    } else {
        img.src = 'fotonoite.png.png';
    }
}