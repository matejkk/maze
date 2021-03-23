var canvas;
var ctx;
var dx = 5;
var dy = 5;
var x;
var y;
var WIDTH = 702;
var HEIGHT = 702;
var img = new Image();
var collision = 0;
var cas = document.getElementById('cas');
var glavni = document.getElementById('glavni');
var play = document.getElementById('play');
var back = document.getElementById('goback');
var napis = document.getElementById('typewriter');
var gumbi = document.getElementById('gumbi');
var konec = true;
//timer
var sekundeI;
var minuteI;
var sekunde = 0;
var izpisTimer = "00:00";
var intervalTimer;
var time = false;
function timer() {
    if (time) {
        sekunde++;
        sekundeI = ((sekundeI = (sekunde % 60)) > 9) ? sekundeI : "0" + sekundeI;
        minuteI = ((minuteI = Math.floor(sekunde / 60)) > 9) ? minuteI : "0" + minuteI;
        izpisTimer = minuteI + ":" + sekundeI;
    }
    cas.innerHTML = "TIME: " + izpisTimer;
}
localStorage.setItem("time", izpisTimer);


function rect(x, y, w, h) {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.drawImage(img, 0, 0);
}

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    var t = 0;
    if (t == 0) {
        var stevilka = Math.floor(Math.random() * 8 + 1);
        if (stevilka == 1) {
            x = 295;
            y = 35;
        }
        else if (stevilka == 2) {
            x = 100;
            y = 35;
        }
        else if (stevilka == 3) {
            x = 581;
            y = 35;
        }
        else if (stevilka == 4) {
            x = 612;
            y = 35;
        }
        else if (stevilka == 5) {
            x = 196;
            y = 35;
        }
        else if (stevilka == 6) {
            x = 645;
            y = 262;
        }
        else if (stevilka == 7) {
            x = 30;
            y = 645;
        }
        else if (stevilka == 8) {
            x = 100;
            y = 30;
        }
    }
    img.src = "mazes/maze" + stevilka + ".gif";
    return setInterval(draw, 1);
}


function checkcollision() {
    var imgd = ctx.getImageData(x, y, 20, 20);
    var pix = imgd.data;
    for (var i = 0; n = pix.length, i < n; i += 4) {
        if (x > 660 || y > 660) {
            konec = false;
            localStorage.setItem("time", izpisTimer);
            sweat();
            time = false;
            glavni.style.display = 'none';
            back.style.display = 'none';
            gumbi.style.height = '100vh';
            if (stevilka == 1) {
                x = 660;
                y = 420;
            }
            else if (stevilka == 2) {
                x = 660;
                y = 610;
            }
            else if (stevilka == 3) {
                x = 660;
                y = 390;
            }
            else if (stevilka == 4) {
                x = 660;
                y = 450;
            }
            else if (stevilka == 5) {
                x = 660;
                y = 290;
            }
            else if (stevilka == 6) {
                x = 490;
                y = 660;
            }
            else if (stevilka == 7) {
                x = 195;
                y = 660;
            }
            else if (stevilka == 8) {
                x = 580;
                y = 660;
            }
        }
        if (pix[i] == 0) {
            collision = 1;
        }
    }
}

function draw() {
    clear();
    ctx.fillStyle = "purple";
    rect(x, y, 20, 20);
}

function doKeyDown(evt) {
    if (konec) {
        switch (evt.keyCode) {
            case 38:
                time = true;  //gor
                if (y - dy > 0) {
                    y -= dy;
                    clear();
                    checkcollision();
                    if (collision == 1) {
                        y += dy;
                        collision = 0;
                    }
                }

                break;
            case 40:
                time = true; //dol
                if (y + dy < HEIGHT) {
                    y += dy;
                    clear();
                    checkcollision();
                    if (collision == 1) {
                        y -= dy;
                        collision = 0;
                    }
                }

                break;
            case 37:
                time = true;  //levo
                if (x - dx > 0) {
                    x -= dx;
                    clear();
                    checkcollision();
                    if (collision == 1) {
                        x += dx;
                        collision = 0;
                    }
                }
                break;
            case 39:
                time = true;  //desno
                if ((x + dx < WIDTH)) {
                    x += dx;
                    clear();
                    checkcollision();
                    if (collision == 1) {
                        x -= dx;
                        collision = 0;
                    }
                }
                break;
        }
    }
}

init();
window.addEventListener('keydown', doKeyDown, true);
intervalTimer = setInterval(timer, 1000);

function sweat() {
    Swal.fire(
        'Bravo!',
        'You successfully completed the maze in: ' + localStorage.getItem("time"),
        'success'
    ).then(function () {
        location.reload();
    });
}


function game() {
    glavni.style.display = 'flex';
    play.style.display = 'none';
    napis.style.display = 'none';
    gumbi.style.height = 'auto';
    back.style.display = 'block';
}

//ozadje
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}

balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000,
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});
