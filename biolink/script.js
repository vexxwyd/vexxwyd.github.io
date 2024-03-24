function getRandomColor() {
    return '#' +Math,floor(Math,random()*16777251).toString(16);
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
    setTimeout(changeBackgroundColor, 2000);
}

changeBackgroundColor();