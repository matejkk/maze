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
var nextlevel = document.getElementById('nextlevel');
var napis = document.getElementById('typewriter');
var kvadrat=20;
var konec = true;

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
        var stevilka = Math.floor(Math.random() *10+ 1);
        if (stevilka == 1) {
            x = 420;
            y = 648;
        }
        else if (stevilka == 2) {
            x = 295;
            y = 35;
        }
        else if (stevilka == 3) {
            x = 196;
            y = 35;
        }
        else if (stevilka == 4) {
            x = 100;
            y = 35;
        }
        else if (stevilka == 5) {
            x = 581;
            y = 35;
        }
        else if (stevilka == 6) {
            x = 612;
            y = 35;
        }
        else if (stevilka == 7) {
            x = 196;
            y = 35;
        }
        else if (stevilka == 8) {
            x = 645;
            y = 262;
        }
        else if (stevilka == 9) {
            x = 69;
            y = 650;
        }
        else if (stevilka == 10) {
            x = 325;
            y = 35;
        }
    }
    img.src = "mazes/maze" + stevilka + ".gif";
    return setInterval(draw, 1);
}


function checkcollision() {
    var imgd = ctx.getImageData(x, y, kvadrat, kvadrat);
    var pix = imgd.data;
    for (var i = 0; n = pix.length, i < n; i += 4) {
        if (y > 660) {
            konec = false;
            localStorage.setItem("time", izpisTimer);
            x = 420;
            y = 660;
            sweat();
            time = false;
            glavni.style.display = 'none';
            nextlevel.style.display = 'block';
            back.style.display = 'block';
            izpisTimer="00:00";
        }
        if (pix[i] == 0) {
            collision = 1;
        }
    }
}

function draw() {
    clear();
    ctx.fillStyle = "purple";
    rect(x, y, kvadrat, kvadrat);
}

function doKeyDown(evt) {
    if (konec) {
        switch (evt.keyCode) {
            case 38:
                time = true;  /* Up arrow was pressed */
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
                time = true;  /* Down arrow was pressed */
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
                time = true;  /* Left arrow was pressed */
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
                time = true;  /* Right arrow was pressed */
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
    Swal.fire({
        title: 'Bravo!',
        text: 'You successfully completed the maze in: ' + localStorage.getItem("time"),
        imageUrl: 'img/end.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    }).then(function () {
        newlevel();
    });
}

function newlevel() {
    Swal.fire('If you thought that was easy, I dare you to click next level.')
    konec=true;
}

function game() {
    glavni.style.display = 'flex';
    play.style.display = 'none';
    napis.style.display = 'none';
}

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
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});

function tipkeDisable() {
    window.addEventListener('keydown', function (event) {

        // if the keyCode is 16 ( shift key was pressed )
        if (event.keyCode === 40) {

            // prevent default behaviour
            event.preventDefault();

            return false;
        }

    });
}

function hardmaze(){
    glavni.style.display = 'flex';
    img.src="mazes/maze11.gif";
    localStorage.setItem("time", izpisTimer);
    kvadrat=15;
    x = 465;
    y = 25;
}