const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let startButt = document.getElementById('start');
let reloadButt = document.getElementById("reload")
const message = document.getElementById("message");

canvas.width = 675;
canvas.height = 415;

const first = new Image();
const second = new Image();
const third = new Image();
const fourth = new Image();

let EllipseX = canvas.width / 2;
let EllipseY = canvas.height / 2;

let count = 1;
let step = 1;

first.src = "1.jpg";
second.src = "2.jpg";
third.src = "3.jpg";
fourth.src = "4.png";

const drawAnim = () => {

    localStorage.setItem(new Date().toLocaleString(), "play");

    ctx.beginPath();

    ctx.lineWidth = 5;

    ctx.moveTo(5, 5);
    ctx.lineTo(5, canvas.height);
    ctx.lineTo(canvas.width - 5, canvas.height);
    ctx.lineTo(canvas.width - 5, 5);
    ctx.lineTo(5, 5);
    ctx.strokeStyle = 'green';
    ctx.drawImage(first, 0, 0, 200, 200, 0, 0, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(second, 0, 0, 200, 200, canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(third, 0, 0, 200, 200, 0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(fourth, 0, 0, 100, 100, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);

    ctx.stroke();

    ctx.closePath();

}



let interval;

const startEllipse = () => {


    ctx.beginPath();



    if (count === 1) {
        EllipseX -= step * 2;
        count = 2;
    }

    else if (count === 2) {
        EllipseY -= step * 2;
        count = 3;
    }

    else if (count === 3) {
        EllipseX += step * 2;
        count = 4;
    }

    else if (count === 4) {
        message.innerHTML = "step: " + step;
        EllipseY += step * 2;
        count = 1;
        step++;
    }

    if (EllipseX >= canvas.width || EllipseY >= canvas.height || EllipseY <= 0 || EllipseX <= 0) {
        clearInterval(interval);
        startButt.style.display = "none";
        reloadButt.style.display = "inline-block";
        message.innerHTML = "step: " + step + " ended";
    }

    ctx.ellipse(EllipseX, EllipseY, 10, 10, 0, 0, 360);
    ctx.fill();

    ctx.lineWidth = 5;

    ctx.moveTo(5, 5);
    ctx.lineTo(5, canvas.height);
    ctx.lineTo(canvas.width - 5, canvas.height);
    ctx.lineTo(canvas.width - 5, 5);
    ctx.lineTo(5, 5);
    ctx.strokeStyle = 'green';

    ctx.drawImage(first, 0, 0, 200, 200, 0, 0, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(second, 0, 0, 200, 200, canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(third, 0, 0, 200, 200, 0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
    ctx.drawImage(fourth, 0, 0, 100, 100, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);

    ctx.stroke();

    ctx.closePath();


}

const reloadAnim = () => {
    localStorage.setItem(new Date().toLocaleString()+1, "reload");

    EllipseX = canvas.width / 2;
    EllipseY = canvas.height / 2;
    count = 1;
    step = 1;
    startInt();
}

const startInt = () => {
    localStorage.setItem(new Date().toLocaleString(), "start");

    interval = setInterval(startEllipse, 100);
}


const rofl4 = document.getElementById("rofl4");

const closeAnim = () => {
    clearInterval(interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const keys = Object.keys(localStorage);
    let i = 0, key;
    let text = ""
    for (; key = keys[i]; i++) {
        text = text + key + '=' + localStorage.getItem(key);
    }
    rofl4.innerText = text

}