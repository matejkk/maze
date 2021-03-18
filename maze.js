var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.scale(2, 2);
var t=0;
if(t==0){
    var stevilka=Math.floor(Math.random()*2+1);
}
var y = 2;
var x = 234;
var nar = 1;
var dx = 1;
var dy = 1;
var refreshIntervalId;
ctx.moveTo(x, y);
labirint();



function ustavi() {
    clearInterval(refreshIntervalId);
}

function start() {
    refreshIntervalId = setInterval(drawIt, 10);
}

function reset() {
    ctx.clearRect(0, 0, 1000, 1000);
    y = 2;
    x = 234;
    nar = 1;
    clearInterval(refreshIntervalId);
    labirint();
}

function labirint() {
    if(stevilka==1){
        t=1;
        ctx.beginPath();

    ctx.moveTo(2, 2); ctx.lineTo(226, 2);
    ctx.moveTo(242, 2); ctx.lineTo(482, 2);
    ctx.moveTo(34, 18); ctx.lineTo(50, 18);
    ctx.moveTo(66, 18); ctx.lineTo(82, 18);
    ctx.moveTo(130, 18); ctx.lineTo(178, 18);
    ctx.moveTo(226, 18); ctx.lineTo(258, 18);
    ctx.moveTo(274, 18); ctx.lineTo(290, 18);
    ctx.moveTo(306, 18); ctx.lineTo(322, 18);
    ctx.moveTo(338, 18); ctx.lineTo(370, 18);
    ctx.moveTo(450, 18); ctx.lineTo(482, 18);
    ctx.moveTo(2, 34); ctx.lineTo(34, 34);
    ctx.moveTo(66, 34); ctx.lineTo(98, 34);
    ctx.moveTo(130, 34); ctx.lineTo(162, 34);
    ctx.moveTo(194, 34); ctx.lineTo(210, 34);
    ctx.moveTo(226, 34); ctx.lineTo(274, 34);
    ctx.moveTo(322, 34); ctx.lineTo(402, 34);
    ctx.moveTo(418, 34); ctx.lineTo(434, 34);
    ctx.moveTo(466, 34); ctx.lineTo(482, 34);
    ctx.moveTo(98, 50); ctx.lineTo(130, 50);
    ctx.moveTo(146, 50); ctx.lineTo(210, 50);
    ctx.moveTo(306, 50); ctx.lineTo(354, 50);
    ctx.moveTo(418, 50); ctx.lineTo(450, 50);
    ctx.moveTo(18, 66); ctx.lineTo(50, 66);
    ctx.moveTo(98, 66); ctx.lineTo(146, 66);
    ctx.moveTo(226, 66); ctx.lineTo(242, 66);
    ctx.moveTo(274, 66); ctx.lineTo(306, 66);
    ctx.moveTo(354, 66); ctx.lineTo(370, 66);
    ctx.moveTo(402, 66); ctx.lineTo(434, 66);
    ctx.moveTo(450, 66); ctx.lineTo(482, 66);
    ctx.moveTo(18, 82); ctx.lineTo(34, 82);
    ctx.moveTo(66, 82); ctx.lineTo(98, 82);
    ctx.moveTo(130, 82); ctx.lineTo(162, 82);
    ctx.moveTo(178, 82); ctx.lineTo(194, 82);
    ctx.moveTo(226, 82); ctx.lineTo(258, 82);
    ctx.moveTo(274, 82); ctx.lineTo(290, 82);
    ctx.moveTo(306, 82); ctx.lineTo(370, 82);
    ctx.moveTo(402, 82); ctx.lineTo(434, 82);
    ctx.moveTo(450, 82); ctx.lineTo(466, 82);
    ctx.moveTo(34, 98); ctx.lineTo(50, 98);
    ctx.moveTo(98, 98); ctx.lineTo(114, 98);
    ctx.moveTo(146, 98); ctx.lineTo(162, 98);
    ctx.moveTo(178, 98); ctx.lineTo(242, 98);
    ctx.moveTo(258, 98); ctx.lineTo(274, 98);
    ctx.moveTo(322, 98); ctx.lineTo(354, 98);
    ctx.moveTo(418, 98); ctx.lineTo(450, 98);
    ctx.moveTo(2, 114); ctx.lineTo(18, 114);
    ctx.moveTo(50, 114); ctx.lineTo(98, 114);
    ctx.moveTo(194, 114); ctx.lineTo(226, 114);
    ctx.moveTo(242, 114); ctx.lineTo(274, 114);
    ctx.moveTo(290, 114); ctx.lineTo(338, 114);
    ctx.moveTo(354, 114); ctx.lineTo(418, 114);
    ctx.moveTo(466, 114); ctx.lineTo(482, 114);
    ctx.moveTo(18, 130); ctx.lineTo(50, 130);
    ctx.moveTo(82, 130); ctx.lineTo(98, 130);
    ctx.moveTo(114, 130); ctx.lineTo(146, 130);
    ctx.moveTo(162, 130); ctx.lineTo(194, 130);
    ctx.moveTo(210, 130); ctx.lineTo(226, 130);
    ctx.moveTo(258, 130); ctx.lineTo(274, 130);
    ctx.moveTo(290, 130); ctx.lineTo(322, 130);
    ctx.moveTo(354, 130); ctx.lineTo(370, 130);
    ctx.moveTo(386, 130); ctx.lineTo(402, 130);
    ctx.moveTo(418, 130); ctx.lineTo(434, 130);
    ctx.moveTo(450, 130); ctx.lineTo(466, 130);
    ctx.moveTo(18, 146); ctx.lineTo(50, 146);
    ctx.moveTo(66, 146); ctx.lineTo(130, 146);
    ctx.moveTo(146, 146); ctx.lineTo(178, 146);
    ctx.moveTo(242, 146); ctx.lineTo(274, 146);
    ctx.moveTo(290, 146); ctx.lineTo(306, 146);
    ctx.moveTo(354, 146); ctx.lineTo(370, 146);
    ctx.moveTo(386, 146); ctx.lineTo(402, 146);
    ctx.moveTo(98, 162); ctx.lineTo(114, 162);
    ctx.moveTo(146, 162); ctx.lineTo(162, 162);
    ctx.moveTo(178, 162); ctx.lineTo(210, 162);
    ctx.moveTo(258, 162); ctx.lineTo(290, 162);
    ctx.moveTo(306, 162); ctx.lineTo(322, 162);
    ctx.moveTo(338, 162); ctx.lineTo(354, 162);
    ctx.moveTo(370, 162); ctx.lineTo(386, 162);
    ctx.moveTo(402, 162); ctx.lineTo(434, 162);
    ctx.moveTo(450, 162); ctx.lineTo(466, 162);
    ctx.moveTo(18, 178); ctx.lineTo(34, 178);
    ctx.moveTo(66, 178); ctx.lineTo(114, 178);
    ctx.moveTo(130, 178); ctx.lineTo(242, 178);
    ctx.moveTo(290, 178); ctx.lineTo(322, 178);
    ctx.moveTo(354, 178); ctx.lineTo(370, 178);
    ctx.moveTo(402, 178); ctx.lineTo(418, 178);
    ctx.moveTo(66, 194); ctx.lineTo(162, 194);
    ctx.moveTo(194, 194); ctx.lineTo(210, 194);
    ctx.moveTo(258, 194); ctx.lineTo(274, 194);
    ctx.moveTo(322, 194); ctx.lineTo(338, 194);
    ctx.moveTo(370, 194); ctx.lineTo(434, 194);
    ctx.moveTo(450, 194); ctx.lineTo(466, 194);
    ctx.moveTo(34, 210); ctx.lineTo(98, 210);
    ctx.moveTo(146, 210); ctx.lineTo(178, 210);
    ctx.moveTo(210, 210); ctx.lineTo(258, 210);
    ctx.moveTo(274, 210); ctx.lineTo(306, 210);
    ctx.moveTo(322, 210); ctx.lineTo(386, 210);
    ctx.moveTo(402, 210); ctx.lineTo(434, 210);
    ctx.moveTo(450, 210); ctx.lineTo(482, 210);
    ctx.moveTo(2, 226); ctx.lineTo(50, 226);
    ctx.moveTo(82, 226); ctx.lineTo(98, 226);
    ctx.moveTo(114, 226); ctx.lineTo(146, 226);
    ctx.moveTo(162, 226); ctx.lineTo(178, 226);
    ctx.moveTo(194, 226); ctx.lineTo(226, 226);
    ctx.moveTo(242, 226); ctx.lineTo(290, 226);
    ctx.moveTo(306, 226); ctx.lineTo(322, 226);
    ctx.moveTo(338, 226); ctx.lineTo(354, 226);
    ctx.moveTo(402, 226); ctx.lineTo(418, 226);
    ctx.moveTo(434, 226); ctx.lineTo(450, 226);
    ctx.moveTo(34, 242); ctx.lineTo(50, 242);
    ctx.moveTo(82, 242); ctx.lineTo(98, 242);
    ctx.moveTo(146, 242); ctx.lineTo(162, 242);
    ctx.moveTo(178, 242); ctx.lineTo(210, 242);
    ctx.moveTo(226, 242); ctx.lineTo(242, 242);
    ctx.moveTo(274, 242); ctx.lineTo(290, 242);
    ctx.moveTo(306, 242); ctx.lineTo(322, 242);
    ctx.moveTo(354, 242); ctx.lineTo(370, 242);
    ctx.moveTo(386, 242); ctx.lineTo(402, 242);
    ctx.moveTo(418, 242); ctx.lineTo(434, 242);
    ctx.moveTo(18, 258); ctx.lineTo(82, 258);
    ctx.moveTo(114, 258); ctx.lineTo(146, 258);
    ctx.moveTo(162, 258); ctx.lineTo(194, 258);
    ctx.moveTo(210, 258); ctx.lineTo(242, 258);
    ctx.moveTo(258, 258); ctx.lineTo(274, 258);
    ctx.moveTo(290, 258); ctx.lineTo(338, 258);
    ctx.moveTo(434, 258); ctx.lineTo(466, 258);
    ctx.moveTo(18, 274); ctx.lineTo(50, 274);
    ctx.moveTo(82, 274); ctx.lineTo(98, 274);
    ctx.moveTo(114, 274); ctx.lineTo(130, 274);
    ctx.moveTo(162, 274); ctx.lineTo(194, 274);
    ctx.moveTo(210, 274); ctx.lineTo(242, 274);
    ctx.moveTo(258, 274); ctx.lineTo(274, 274);
    ctx.moveTo(306, 274); ctx.lineTo(338, 274);
    ctx.moveTo(386, 274); ctx.lineTo(402, 274);
    ctx.moveTo(418, 274); ctx.lineTo(450, 274);
    ctx.moveTo(466, 274); ctx.lineTo(482, 274);
    ctx.moveTo(194, 290); ctx.lineTo(226, 290);
    ctx.moveTo(242, 290); ctx.lineTo(274, 290);
    ctx.moveTo(290, 290); ctx.lineTo(306, 290);
    ctx.moveTo(370, 290); ctx.lineTo(386, 290);
    ctx.moveTo(434, 290); ctx.lineTo(450, 290);
    ctx.moveTo(466, 290); ctx.lineTo(482, 290);
    ctx.moveTo(2, 306); ctx.lineTo(18, 306);
    ctx.moveTo(34, 306); ctx.lineTo(66, 306);
    ctx.moveTo(82, 306); ctx.lineTo(130, 306);
    ctx.moveTo(146, 306); ctx.lineTo(194, 306);
    ctx.moveTo(226, 306); ctx.lineTo(242, 306);
    ctx.moveTo(274, 306); ctx.lineTo(290, 306);
    ctx.moveTo(306, 306); ctx.lineTo(322, 306);
    ctx.moveTo(338, 306); ctx.lineTo(370, 306);
    ctx.moveTo(418, 306); ctx.lineTo(434, 306);
    ctx.moveTo(450, 306); ctx.lineTo(466, 306);
    ctx.moveTo(18, 322); ctx.lineTo(82, 322);
    ctx.moveTo(114, 322); ctx.lineTo(130, 322);
    ctx.moveTo(162, 322); ctx.lineTo(178, 322);
    ctx.moveTo(194, 322); ctx.lineTo(226, 322);
    ctx.moveTo(258, 322); ctx.lineTo(274, 322);
    ctx.moveTo(290, 322); ctx.lineTo(306, 322);
    ctx.moveTo(322, 322); ctx.lineTo(354, 322);
    ctx.moveTo(370, 322); ctx.lineTo(386, 322);
    ctx.moveTo(434, 322); ctx.lineTo(450, 322);
    ctx.moveTo(18, 338); ctx.lineTo(66, 338);
    ctx.moveTo(98, 338); ctx.lineTo(114, 338);
    ctx.moveTo(130, 338); ctx.lineTo(146, 338);
    ctx.moveTo(162, 338); ctx.lineTo(178, 338);
    ctx.moveTo(210, 338); ctx.lineTo(242, 338);
    ctx.moveTo(258, 338); ctx.lineTo(306, 338);
    ctx.moveTo(322, 338); ctx.lineTo(338, 338);
    ctx.moveTo(354, 338); ctx.lineTo(370, 338);
    ctx.moveTo(34, 354); ctx.lineTo(50, 354);
    ctx.moveTo(66, 354); ctx.lineTo(82, 354);
    ctx.moveTo(130, 354); ctx.lineTo(162, 354);
    ctx.moveTo(178, 354); ctx.lineTo(194, 354);
    ctx.moveTo(226, 354); ctx.lineTo(242, 354);
    ctx.moveTo(290, 354); ctx.lineTo(322, 354);
    ctx.moveTo(386, 354); ctx.lineTo(402, 354);
    ctx.moveTo(434, 354); ctx.lineTo(450, 354);
    ctx.moveTo(50, 370); ctx.lineTo(66, 370);
    ctx.moveTo(114, 370); ctx.lineTo(130, 370);
    ctx.moveTo(194, 370); ctx.lineTo(290, 370);
    ctx.moveTo(306, 370); ctx.lineTo(322, 370);
    ctx.moveTo(338, 370); ctx.lineTo(370, 370);
    ctx.moveTo(418, 370); ctx.lineTo(466, 370);
    ctx.moveTo(18, 386); ctx.lineTo(66, 386);
    ctx.moveTo(98, 386); ctx.lineTo(130, 386);
    ctx.moveTo(242, 386); ctx.lineTo(258, 386);
    ctx.moveTo(274, 386); ctx.lineTo(290, 386);
    ctx.moveTo(306, 386); ctx.lineTo(322, 386);
    ctx.moveTo(370, 386); ctx.lineTo(402, 386);
    ctx.moveTo(450, 386); ctx.lineTo(466, 386);
    ctx.moveTo(50, 402); ctx.lineTo(130, 402);
    ctx.moveTo(146, 402); ctx.lineTo(162, 402);
    ctx.moveTo(210, 402); ctx.lineTo(226, 402);
    ctx.moveTo(258, 402); ctx.lineTo(274, 402);
    ctx.moveTo(290, 402); ctx.lineTo(306, 402);
    ctx.moveTo(322, 402); ctx.lineTo(354, 402);
    ctx.moveTo(370, 402); ctx.lineTo(418, 402);
    ctx.moveTo(466, 402); ctx.lineTo(482, 402);
    ctx.moveTo(18, 418); ctx.lineTo(50, 418);
    ctx.moveTo(130, 418); ctx.lineTo(146, 418);
    ctx.moveTo(178, 418); ctx.lineTo(210, 418);
    ctx.moveTo(274, 418); ctx.lineTo(290, 418);
    ctx.moveTo(306, 418); ctx.lineTo(354, 418);
    ctx.moveTo(370, 418); ctx.lineTo(386, 418);
    ctx.moveTo(418, 418); ctx.lineTo(466, 418);
    ctx.moveTo(18, 434); ctx.lineTo(50, 434);
    ctx.moveTo(66, 434); ctx.lineTo(82, 434);
    ctx.moveTo(98, 434); ctx.lineTo(114, 434);
    ctx.moveTo(130, 434); ctx.lineTo(178, 434);
    ctx.moveTo(194, 434); ctx.lineTo(210, 434);
    ctx.moveTo(290, 434); ctx.lineTo(306, 434);
    ctx.moveTo(338, 434); ctx.lineTo(386, 434);
    ctx.moveTo(402, 434); ctx.lineTo(418, 434);
    ctx.moveTo(450, 434); ctx.lineTo(466, 434);
    ctx.moveTo(50, 450); ctx.lineTo(98, 450);
    ctx.moveTo(114, 450); ctx.lineTo(146, 450);
    ctx.moveTo(178, 450); ctx.lineTo(194, 450);
    ctx.moveTo(226, 450); ctx.lineTo(274, 450);
    ctx.moveTo(306, 450); ctx.lineTo(370, 450);
    ctx.moveTo(418, 450); ctx.lineTo(434, 450);
    ctx.moveTo(466, 450); ctx.lineTo(482, 450);
    ctx.moveTo(34, 466); ctx.lineTo(50, 466);
    ctx.moveTo(98, 466); ctx.lineTo(114, 466);
    ctx.moveTo(162, 466); ctx.lineTo(194, 466);
    ctx.moveTo(226, 466); ctx.lineTo(274, 466);
    ctx.moveTo(306, 466); ctx.lineTo(370, 466);
    ctx.moveTo(386, 466); ctx.lineTo(402, 466);
    ctx.moveTo(450, 466); ctx.lineTo(466, 466);
    ctx.moveTo(2, 482); ctx.lineTo(242, 482);
    ctx.moveTo(258, 482); ctx.lineTo(482, 482);
    ctx.moveTo(2, 2); ctx.lineTo(2, 482);
    ctx.moveTo(18, 2); ctx.lineTo(18, 18);
    ctx.moveTo(18, 34); ctx.lineTo(18, 66);
    ctx.moveTo(18, 82); ctx.lineTo(18, 98);
    ctx.moveTo(18, 130); ctx.lineTo(18, 146);
    ctx.moveTo(18, 162); ctx.lineTo(18, 226);
    ctx.moveTo(18, 242); ctx.lineTo(18, 274);
    ctx.moveTo(18, 290); ctx.lineTo(18, 322);
    ctx.moveTo(18, 338); ctx.lineTo(18, 386);
    ctx.moveTo(18, 402); ctx.lineTo(18, 434);
    ctx.moveTo(18, 450); ctx.lineTo(18, 482);
    ctx.moveTo(34, 50); ctx.lineTo(34, 98);
    ctx.moveTo(34, 114); ctx.lineTo(34, 130);
    ctx.moveTo(34, 146); ctx.lineTo(34, 178);
    ctx.moveTo(34, 194); ctx.lineTo(34, 210);
    ctx.moveTo(34, 242); ctx.lineTo(34, 258);
    ctx.moveTo(34, 274); ctx.lineTo(34, 322);
    ctx.moveTo(34, 370); ctx.lineTo(34, 418);
    ctx.moveTo(34, 434); ctx.lineTo(34, 466);
    ctx.moveTo(50, 2); ctx.lineTo(50, 34);
    ctx.moveTo(50, 50); ctx.lineTo(50, 66);
    ctx.moveTo(50, 82); ctx.lineTo(50, 98);
    ctx.moveTo(50, 162); ctx.lineTo(50, 210);
    ctx.moveTo(50, 290); ctx.lineTo(50, 306);
    ctx.moveTo(50, 354); ctx.lineTo(50, 370);
    ctx.moveTo(50, 450); ctx.lineTo(50, 482);
    ctx.moveTo(66, 50); ctx.lineTo(66, 82);
    ctx.moveTo(66, 98); ctx.lineTo(66, 146);
    ctx.moveTo(66, 162); ctx.lineTo(66, 178);
    ctx.moveTo(66, 194); ctx.lineTo(66, 258);
    ctx.moveTo(66, 274); ctx.lineTo(66, 306);
    ctx.moveTo(66, 354); ctx.lineTo(66, 386);
    ctx.moveTo(66, 418); ctx.lineTo(66, 434);
    ctx.moveTo(66, 450); ctx.lineTo(66, 466);
    ctx.moveTo(82, 2); ctx.lineTo(82, 18);
    ctx.moveTo(82, 34); ctx.lineTo(82, 50);
    ctx.moveTo(82, 66); ctx.lineTo(82, 114);
    ctx.moveTo(82, 146); ctx.lineTo(82, 194);
    ctx.moveTo(82, 226); ctx.lineTo(82, 242);
    ctx.moveTo(82, 274); ctx.lineTo(82, 290);
    ctx.moveTo(82, 322); ctx.lineTo(82, 338);
    ctx.moveTo(82, 354); ctx.lineTo(82, 386);
    ctx.moveTo(82, 418); ctx.lineTo(82, 466);
    ctx.moveTo(98, 2); ctx.lineTo(98, 50);
    ctx.moveTo(98, 66); ctx.lineTo(98, 98);
    ctx.moveTo(98, 114); ctx.lineTo(98, 130);
    ctx.moveTo(98, 242); ctx.lineTo(98, 322);
    ctx.moveTo(98, 354); ctx.lineTo(98, 386);
    ctx.moveTo(98, 418); ctx.lineTo(98, 434);
    ctx.moveTo(114, 2); ctx.lineTo(114, 34);
    ctx.moveTo(114, 82); ctx.lineTo(114, 130);
    ctx.moveTo(114, 162); ctx.lineTo(114, 178);
    ctx.moveTo(114, 210); ctx.lineTo(114, 226);
    ctx.moveTo(114, 242); ctx.lineTo(114, 258);
    ctx.moveTo(114, 290); ctx.lineTo(114, 306);
    ctx.moveTo(114, 338); ctx.lineTo(114, 370);
    ctx.moveTo(114, 402); ctx.lineTo(114, 466);
    ctx.moveTo(130, 2); ctx.lineTo(130, 18);
    ctx.moveTo(130, 82); ctx.lineTo(130, 98);
    ctx.moveTo(130, 114); ctx.lineTo(130, 130);
    ctx.moveTo(130, 146); ctx.lineTo(130, 162);
    ctx.moveTo(130, 194); ctx.lineTo(130, 210);
    ctx.moveTo(130, 226); ctx.lineTo(130, 258);
    ctx.moveTo(130, 274); ctx.lineTo(130, 354);
    ctx.moveTo(130, 370); ctx.lineTo(130, 418);
    ctx.moveTo(130, 450); ctx.lineTo(130, 482);
    ctx.moveTo(146, 82); ctx.lineTo(146, 162);
    ctx.moveTo(146, 210); ctx.lineTo(146, 226);
    ctx.moveTo(146, 242); ctx.lineTo(146, 322);
    ctx.moveTo(146, 370); ctx.lineTo(146, 418);
    ctx.moveTo(146, 450); ctx.lineTo(146, 466);
    ctx.moveTo(162, 34); ctx.lineTo(162, 66);
    ctx.moveTo(162, 98); ctx.lineTo(162, 114);
    ctx.moveTo(162, 178); ctx.lineTo(162, 194);
    ctx.moveTo(162, 274); ctx.lineTo(162, 290);
    ctx.moveTo(162, 322); ctx.lineTo(162, 418);
    ctx.moveTo(162, 450); ctx.lineTo(162, 466);
    ctx.moveTo(178, 18); ctx.lineTo(178, 34);
    ctx.moveTo(178, 50); ctx.lineTo(178, 66);
    ctx.moveTo(178, 82); ctx.lineTo(178, 146);
    ctx.moveTo(178, 178); ctx.lineTo(178, 194);
    ctx.moveTo(178, 226); ctx.lineTo(178, 322);
    ctx.moveTo(178, 354); ctx.lineTo(178, 386);
    ctx.moveTo(178, 402); ctx.lineTo(178, 450);
    ctx.moveTo(194, 2); ctx.lineTo(194, 66);
    ctx.moveTo(194, 114); ctx.lineTo(194, 146);
    ctx.moveTo(194, 162); ctx.lineTo(194, 178);
    ctx.moveTo(194, 210); ctx.lineTo(194, 226);
    ctx.moveTo(194, 274); ctx.lineTo(194, 290);
    ctx.moveTo(194, 338); ctx.lineTo(194, 370);
    ctx.moveTo(194, 386); ctx.lineTo(194, 418);
    ctx.moveTo(194, 466); ctx.lineTo(194, 482);
    ctx.moveTo(210, 2); ctx.lineTo(210, 18);
    ctx.moveTo(210, 66); ctx.lineTo(210, 98);
    ctx.moveTo(210, 130); ctx.lineTo(210, 162);
    ctx.moveTo(210, 194); ctx.lineTo(210, 258);
    ctx.moveTo(210, 306); ctx.lineTo(210, 354);
    ctx.moveTo(210, 386); ctx.lineTo(210, 418);
    ctx.moveTo(210, 434); ctx.lineTo(210, 482);
    ctx.moveTo(226, 2); ctx.lineTo(226, 18);
    ctx.moveTo(226, 34); ctx.lineTo(226, 50);
    ctx.moveTo(226, 130); ctx.lineTo(226, 162);
    ctx.moveTo(226, 178); ctx.lineTo(226, 194);
    ctx.moveTo(226, 258); ctx.lineTo(226, 274);
    ctx.moveTo(226, 306); ctx.lineTo(226, 322);
    ctx.moveTo(226, 338); ctx.lineTo(226, 354);
    ctx.moveTo(226, 386); ctx.lineTo(226, 466);
    ctx.moveTo(242, 34); ctx.lineTo(242, 82);
    ctx.moveTo(242, 130); ctx.lineTo(242, 162);
    ctx.moveTo(242, 178); ctx.lineTo(242, 194);
    ctx.moveTo(242, 210); ctx.lineTo(242, 242);
    ctx.moveTo(242, 274); ctx.lineTo(242, 306);
    ctx.moveTo(242, 322); ctx.lineTo(242, 338);
    ctx.moveTo(242, 354); ctx.lineTo(242, 434);
    ctx.moveTo(258, 34); ctx.lineTo(258, 66);
    ctx.moveTo(258, 82); ctx.lineTo(258, 98);
    ctx.moveTo(258, 114); ctx.lineTo(258, 146);
    ctx.moveTo(258, 162); ctx.lineTo(258, 194);
    ctx.moveTo(258, 242); ctx.lineTo(258, 274);
    ctx.moveTo(258, 290); ctx.lineTo(258, 354);
    ctx.moveTo(258, 418); ctx.lineTo(258, 450);
    ctx.moveTo(258, 466); ctx.lineTo(258, 482);
    ctx.moveTo(274, 18); ctx.lineTo(274, 50);
    ctx.moveTo(274, 66); ctx.lineTo(274, 82);
    ctx.moveTo(274, 98); ctx.lineTo(274, 114);
    ctx.moveTo(274, 146); ctx.lineTo(274, 178);
    ctx.moveTo(274, 274); ctx.lineTo(274, 290);
    ctx.moveTo(274, 338); ctx.lineTo(274, 354);
    ctx.moveTo(274, 386); ctx.lineTo(274, 418);
    ctx.moveTo(274, 434); ctx.lineTo(274, 450);
    ctx.moveTo(290, 2); ctx.lineTo(290, 50);
    ctx.moveTo(290, 98); ctx.lineTo(290, 114);
    ctx.moveTo(290, 178); ctx.lineTo(290, 210);
    ctx.moveTo(290, 242); ctx.lineTo(290, 258);
    ctx.moveTo(290, 274); ctx.lineTo(290, 306);
    ctx.moveTo(290, 418); ctx.lineTo(290, 450);
    ctx.moveTo(290, 466); ctx.lineTo(290, 482);
    ctx.moveTo(306, 2); ctx.lineTo(306, 114);
    ctx.moveTo(306, 130); ctx.lineTo(306, 194);
    ctx.moveTo(306, 210); ctx.lineTo(306, 226);
    ctx.moveTo(306, 274); ctx.lineTo(306, 306);
    ctx.moveTo(306, 322); ctx.lineTo(306, 354);
    ctx.moveTo(306, 386); ctx.lineTo(306, 402);
    ctx.moveTo(306, 434); ctx.lineTo(306, 466);
    ctx.moveTo(322, 50); ctx.lineTo(322, 66);
    ctx.moveTo(322, 114); ctx.lineTo(322, 146);
    ctx.moveTo(322, 194); ctx.lineTo(322, 210);
    ctx.moveTo(322, 242); ctx.lineTo(322, 258);
    ctx.moveTo(322, 290); ctx.lineTo(322, 322);
    ctx.moveTo(322, 338); ctx.lineTo(322, 370);
    ctx.moveTo(322, 386); ctx.lineTo(322, 402);
    ctx.moveTo(322, 434); ctx.lineTo(322, 450);
    ctx.moveTo(322, 466); ctx.lineTo(322, 482);
    ctx.moveTo(338, 18); ctx.lineTo(338, 34);
    ctx.moveTo(338, 66); ctx.lineTo(338, 82);
    ctx.moveTo(338, 114); ctx.lineTo(338, 194);
    ctx.moveTo(338, 226); ctx.lineTo(338, 274);
    ctx.moveTo(338, 290); ctx.lineTo(338, 338);
    ctx.moveTo(338, 354); ctx.lineTo(338, 386);
    ctx.moveTo(338, 434); ctx.lineTo(338, 450);
    ctx.moveTo(354, 50); ctx.lineTo(354, 66);
    ctx.moveTo(354, 98); ctx.lineTo(354, 114);
    ctx.moveTo(354, 194); ctx.lineTo(354, 210);
    ctx.moveTo(354, 258); ctx.lineTo(354, 306);
    ctx.moveTo(354, 338); ctx.lineTo(354, 370);
    ctx.moveTo(354, 386); ctx.lineTo(354, 434);
    ctx.moveTo(370, 34); ctx.lineTo(370, 50);
    ctx.moveTo(370, 82); ctx.lineTo(370, 98);
    ctx.moveTo(370, 114); ctx.lineTo(370, 130);
    ctx.moveTo(370, 146); ctx.lineTo(370, 178);
    ctx.moveTo(370, 210); ctx.lineTo(370, 242);
    ctx.moveTo(370, 258); ctx.lineTo(370, 290);
    ctx.moveTo(370, 306); ctx.lineTo(370, 354);
    ctx.moveTo(386, 2); ctx.lineTo(386, 114);
    ctx.moveTo(386, 162); ctx.lineTo(386, 194);
    ctx.moveTo(386, 210); ctx.lineTo(386, 226);
    ctx.moveTo(386, 242); ctx.lineTo(386, 274);
    ctx.moveTo(386, 290); ctx.lineTo(386, 338);
    ctx.moveTo(386, 354); ctx.lineTo(386, 386);
    ctx.moveTo(386, 402); ctx.lineTo(386, 418);
    ctx.moveTo(386, 434); ctx.lineTo(386, 466);
    ctx.moveTo(402, 18); ctx.lineTo(402, 50);
    ctx.moveTo(402, 82); ctx.lineTo(402, 98);
    ctx.moveTo(402, 114); ctx.lineTo(402, 146);
    ctx.moveTo(402, 226); ctx.lineTo(402, 242);
    ctx.moveTo(402, 258); ctx.lineTo(402, 370);
    ctx.moveTo(402, 386); ctx.lineTo(402, 466);
    ctx.moveTo(418, 18); ctx.lineTo(418, 34);
    ctx.moveTo(418, 66); ctx.lineTo(418, 82);
    ctx.moveTo(418, 98); ctx.lineTo(418, 114);
    ctx.moveTo(418, 130); ctx.lineTo(418, 178);
    ctx.moveTo(418, 210); ctx.lineTo(418, 226);
    ctx.moveTo(418, 258); ctx.lineTo(418, 274);
    ctx.moveTo(418, 290); ctx.lineTo(418, 306);
    ctx.moveTo(418, 322); ctx.lineTo(418, 386);
    ctx.moveTo(418, 450); ctx.lineTo(418, 482);
    ctx.moveTo(434, 2); ctx.lineTo(434, 34);
    ctx.moveTo(434, 50); ctx.lineTo(434, 66);
    ctx.moveTo(434, 98); ctx.lineTo(434, 146);
    ctx.moveTo(434, 162); ctx.lineTo(434, 194);
    ctx.moveTo(434, 210); ctx.lineTo(434, 226);
    ctx.moveTo(434, 242); ctx.lineTo(434, 274);
    ctx.moveTo(434, 306); ctx.lineTo(434, 338);
    ctx.moveTo(434, 370); ctx.lineTo(434, 418);
    ctx.moveTo(434, 434); ctx.lineTo(434, 466);
    ctx.moveTo(450, 18); ctx.lineTo(450, 50);
    ctx.moveTo(450, 66); ctx.lineTo(450, 82);
    ctx.moveTo(450, 98); ctx.lineTo(450, 162);
    ctx.moveTo(450, 178); ctx.lineTo(450, 194);
    ctx.moveTo(450, 242); ctx.lineTo(450, 258);
    ctx.moveTo(450, 290); ctx.lineTo(450, 370);
    ctx.moveTo(450, 386); ctx.lineTo(450, 402);
    ctx.moveTo(450, 434); ctx.lineTo(450, 466);
    ctx.moveTo(466, 50); ctx.lineTo(466, 66);
    ctx.moveTo(466, 82); ctx.lineTo(466, 98);
    ctx.moveTo(466, 130); ctx.lineTo(466, 146);
    ctx.moveTo(466, 162); ctx.lineTo(466, 194);
    ctx.moveTo(466, 226); ctx.lineTo(466, 274);
    ctx.moveTo(466, 322); ctx.lineTo(466, 370);
    ctx.moveTo(466, 386); ctx.lineTo(466, 402);
    ctx.moveTo(466, 418); ctx.lineTo(466, 434);
    ctx.moveTo(466, 466); ctx.lineTo(466, 482);
    ctx.moveTo(482, 2); ctx.lineTo(482, 482);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();

    }
    else if(stevilka==2){
        t=1;
    
        ctx.beginPath();

    
ctx.moveTo(2,2);
ctx.lineTo(226,2);

ctx.moveTo(242,2);
ctx.lineTo(482,2);

ctx.moveTo(82,18);
ctx.lineTo(114,18);

ctx.moveTo(146,18);
ctx.lineTo(194,18);

ctx.moveTo(226,18);
ctx.lineTo(274,18);

ctx.moveTo(290,18);
ctx.lineTo(322,18);

ctx.moveTo(34,34);
ctx.lineTo(50,34);

ctx.moveTo(66,34);
ctx.lineTo(98,34);

ctx.moveTo(114,34);
ctx.lineTo(130,34);

ctx.moveTo(162,34);
ctx.lineTo(194,34);

ctx.moveTo(210,34);
ctx.lineTo(258,34);

ctx.moveTo(274,34);
ctx.lineTo(290,34);

ctx.moveTo(306,34);
ctx.lineTo(338,34);

ctx.moveTo(354,34);
ctx.lineTo(386,34);

ctx.moveTo(418,34);
ctx.lineTo(466,34);

ctx.moveTo(18,50);
ctx.lineTo(82,50);

ctx.moveTo(98,50);
ctx.lineTo(114,50);

ctx.moveTo(130,50);
ctx.lineTo(162,50);

ctx.moveTo(194,50);
ctx.lineTo(210,50);

ctx.moveTo(258,50);
ctx.lineTo(274,50);

ctx.moveTo(290,50);
ctx.lineTo(354,50);

ctx.moveTo(370,50);
ctx.lineTo(386,50);

ctx.moveTo(402,50);
ctx.lineTo(450,50);

ctx.moveTo(2,66);
ctx.lineTo(50,66);

ctx.moveTo(98,66);
ctx.lineTo(130,66);

ctx.moveTo(146,66);
ctx.lineTo(194,66);

ctx.moveTo(210,66);
ctx.lineTo(242,66);

ctx.moveTo(274,66);
ctx.lineTo(306,66);

ctx.moveTo(354,66);
ctx.lineTo(370,66);

ctx.moveTo(418,66);
ctx.lineTo(434,66);

ctx.moveTo(450,66);
ctx.lineTo(466,66);

ctx.moveTo(18,82);
ctx.lineTo(50,82);

ctx.moveTo(66,82);
ctx.lineTo(82,82);

ctx.moveTo(98,82);
ctx.lineTo(114,82);

ctx.moveTo(130,82);
ctx.lineTo(162,82);

ctx.moveTo(194,82);
ctx.lineTo(210,82);

ctx.moveTo(258,82);
ctx.lineTo(274,82);

ctx.moveTo(306,82);
ctx.lineTo(354,82);

ctx.moveTo(370,82);
ctx.lineTo(386,82);

ctx.moveTo(402,82);
ctx.lineTo(450,82);

ctx.moveTo(2,98);
ctx.lineTo(66,98);

ctx.moveTo(82,98);
ctx.lineTo(98,98);

ctx.moveTo(130,98);
ctx.lineTo(178,98);

ctx.moveTo(194,98);
ctx.lineTo(226,98);

ctx.moveTo(274,98);
ctx.lineTo(322,98);

ctx.moveTo(338,98);
ctx.lineTo(354,98);

ctx.moveTo(370,98);
ctx.lineTo(402,98);

ctx.moveTo(434,98);
ctx.lineTo(466,98);

ctx.moveTo(18,114);
ctx.lineTo(50,114);

ctx.moveTo(98,114);
ctx.lineTo(146,114);

ctx.moveTo(178,114);
ctx.lineTo(194,114);

ctx.moveTo(210,114);
ctx.lineTo(338,114);

ctx.moveTo(354,114);
ctx.lineTo(418,114);

ctx.moveTo(466,114);
ctx.lineTo(482,114);

ctx.moveTo(50,130);
ctx.lineTo(82,130);

ctx.moveTo(162,130);
ctx.lineTo(210,130);

ctx.moveTo(226,130);
ctx.lineTo(242,130);

ctx.moveTo(258,130);
ctx.lineTo(274,130);

ctx.moveTo(290,130);
ctx.lineTo(354,130);

ctx.moveTo(370,130);
ctx.lineTo(386,130);

ctx.moveTo(402,130);
ctx.lineTo(466,130);

ctx.moveTo(50,146);
ctx.lineTo(66,146);

ctx.moveTo(98,146);
ctx.lineTo(178,146);

ctx.moveTo(194,146);
ctx.lineTo(226,146);

ctx.moveTo(242,146);
ctx.lineTo(258,146);

ctx.moveTo(322,146);
ctx.lineTo(418,146);

ctx.moveTo(450,146);
ctx.lineTo(466,146);

ctx.moveTo(34,162);
ctx.lineTo(66,162);

ctx.moveTo(114,162);
ctx.lineTo(146,162);

ctx.moveTo(178,162);
ctx.lineTo(210,162);

ctx.moveTo(226,162);
ctx.lineTo(242,162);

ctx.moveTo(274,162);
ctx.lineTo(338,162);

ctx.moveTo(354,162);
ctx.lineTo(370,162);

ctx.moveTo(386,162);
ctx.lineTo(434,162);

ctx.moveTo(450,162);
ctx.lineTo(482,162);

ctx.moveTo(34,178);
ctx.lineTo(50,178);

ctx.moveTo(66,178);
ctx.lineTo(130,178);

ctx.moveTo(146,178);
ctx.lineTo(162,178);

ctx.moveTo(178,178);
ctx.lineTo(194,178);

ctx.moveTo(210,178);
ctx.lineTo(226,178);

ctx.moveTo(258,178);
ctx.lineTo(274,178);

ctx.moveTo(370,178);
ctx.lineTo(386,178);

ctx.moveTo(434,178);
ctx.lineTo(450,178);

ctx.moveTo(66,194);
ctx.lineTo(82,194);

ctx.moveTo(130,194);
ctx.lineTo(146,194);

ctx.moveTo(162,194);
ctx.lineTo(178,194);

ctx.moveTo(258,194);
ctx.lineTo(306,194);

ctx.moveTo(338,194);
ctx.lineTo(370,194);

ctx.moveTo(402,194);
ctx.lineTo(418,194);

ctx.moveTo(434,194);
ctx.lineTo(466,194);

ctx.moveTo(50,210);
ctx.lineTo(82,210);

ctx.moveTo(98,210);
ctx.lineTo(114,210);

ctx.moveTo(146,210);
ctx.lineTo(162,210);

ctx.moveTo(178,210);
ctx.lineTo(194,210);

ctx.moveTo(210,210);
ctx.lineTo(226,210);

ctx.moveTo(274,210);
ctx.lineTo(290,210);

ctx.moveTo(322,210);
ctx.lineTo(338,210);

ctx.moveTo(370,210);
ctx.lineTo(402,210);

ctx.moveTo(418,210);
ctx.lineTo(450,210);

ctx.moveTo(18,226);
ctx.lineTo(50,226);

ctx.moveTo(66,226);
ctx.lineTo(146,226);

ctx.moveTo(162,226);
ctx.lineTo(178,226);

ctx.moveTo(258,226);
ctx.lineTo(274,226);

ctx.moveTo(290,226);
ctx.lineTo(322,226);

ctx.moveTo(338,226);
ctx.lineTo(370,226);

ctx.moveTo(402,226);
ctx.lineTo(418,226);

ctx.moveTo(450,226);
ctx.lineTo(466,226);

ctx.moveTo(2,242);
ctx.lineTo(34,242);

ctx.moveTo(114,242);
ctx.lineTo(130,242);

ctx.moveTo(146,242);
ctx.lineTo(162,242);

ctx.moveTo(178,242);
ctx.lineTo(258,242);

ctx.moveTo(274,242);
ctx.lineTo(290,242);

ctx.moveTo(306,242);
ctx.lineTo(338,242);

ctx.moveTo(386,242);
ctx.lineTo(402,242);

ctx.moveTo(434,242);
ctx.lineTo(466,242);

ctx.moveTo(34,258);
ctx.lineTo(50,258);

ctx.moveTo(82,258);
ctx.lineTo(98,258);

ctx.moveTo(114,258);
ctx.lineTo(146,258);

ctx.moveTo(162,258);
ctx.lineTo(178,258);

ctx.moveTo(194,258);
ctx.lineTo(226,258);

ctx.moveTo(290,258);
ctx.lineTo(306,258);

ctx.moveTo(338,258);
ctx.lineTo(354,258);

ctx.moveTo(370,258);
ctx.lineTo(434,258);

ctx.moveTo(466,258);
ctx.lineTo(482,258);

ctx.moveTo(2,274);
ctx.lineTo(34,274);

ctx.moveTo(50,274);
ctx.lineTo(82,274);

ctx.moveTo(98,274);
ctx.lineTo(178,274);

ctx.moveTo(210,274);
ctx.lineTo(274,274);

ctx.moveTo(290,274);
ctx.lineTo(306,274);

ctx.moveTo(322,274);
ctx.lineTo(354,274);

ctx.moveTo(386,274);
ctx.lineTo(466,274);

ctx.moveTo(34,290);
ctx.lineTo(50,290);

ctx.moveTo(82,290);
ctx.lineTo(98,290);

ctx.moveTo(114,290);
ctx.lineTo(146,290);

ctx.moveTo(226,290);
ctx.lineTo(258,290);

ctx.moveTo(274,290);
ctx.lineTo(290,290);

ctx.moveTo(370,290);
ctx.lineTo(386,290);

ctx.moveTo(402,290);
ctx.lineTo(418,290);

ctx.moveTo(434,290);
ctx.lineTo(450,290);

ctx.moveTo(18,306);
ctx.lineTo(50,306);

ctx.moveTo(66,306);
ctx.lineTo(130,306);

ctx.moveTo(162,306);
ctx.lineTo(210,306);

ctx.moveTo(258,306);
ctx.lineTo(274,306);

ctx.moveTo(290,306);
ctx.lineTo(338,306);

ctx.moveTo(354,306);
ctx.lineTo(370,306);

ctx.moveTo(386,306);
ctx.lineTo(402,306);

ctx.moveTo(450,306);
ctx.lineTo(466,306);

ctx.moveTo(34,322);
ctx.lineTo(82,322);

ctx.moveTo(98,322);
ctx.lineTo(194,322);

ctx.moveTo(210,322);
ctx.lineTo(290,322);

ctx.moveTo(306,322);
ctx.lineTo(322,322);

ctx.moveTo(338,322);
ctx.lineTo(354,322);

ctx.moveTo(370,322);
ctx.lineTo(402,322);

ctx.moveTo(450,322);
ctx.lineTo(482,322);

ctx.moveTo(18,338);
ctx.lineTo(34,338);

ctx.moveTo(82,338);
ctx.lineTo(146,338);

ctx.moveTo(178,338);
ctx.lineTo(210,338);

ctx.moveTo(258,338);
ctx.lineTo(306,338);

ctx.moveTo(322,338);
ctx.lineTo(338,338);

ctx.moveTo(354,338);
ctx.lineTo(386,338);

ctx.moveTo(402,338);
ctx.lineTo(418,338);

ctx.moveTo(434,338);
ctx.lineTo(450,338);

ctx.moveTo(2,354);
ctx.lineTo(18,354);

ctx.moveTo(50,354);
ctx.lineTo(66,354);

ctx.moveTo(82,354);
ctx.lineTo(162,354);

ctx.moveTo(306,354);
ctx.lineTo(322,354);

ctx.moveTo(338,354);
ctx.lineTo(354,354);

ctx.moveTo(418,354);
ctx.lineTo(434,354);

ctx.moveTo(450,354);
ctx.lineTo(466,354);

ctx.moveTo(34,370);
ctx.lineTo(50,370);

ctx.moveTo(66,370);
ctx.lineTo(146,370);

ctx.moveTo(162,370);
ctx.lineTo(258,370);

ctx.moveTo(290,370);
ctx.lineTo(306,370);

ctx.moveTo(370,370);
ctx.lineTo(386,370);

ctx.moveTo(402,370);
ctx.lineTo(450,370);

ctx.moveTo(466,370);
ctx.lineTo(482,370);

ctx.moveTo(50,386);
ctx.lineTo(66,386);

ctx.moveTo(130,386);
ctx.lineTo(162,386);

ctx.moveTo(178,386);
ctx.lineTo(194,386);

ctx.moveTo(210,386);
ctx.lineTo(242,386);

ctx.moveTo(258,386);
ctx.lineTo(290,386);

ctx.moveTo(338,386);
ctx.lineTo(370,386);

ctx.moveTo(386,386);
ctx.lineTo(402,386);

ctx.moveTo(418,386);
ctx.lineTo(450,386);

ctx.moveTo(34,402);
ctx.lineTo(50,402);

ctx.moveTo(66,402);
ctx.lineTo(98,402);

ctx.moveTo(146,402);
ctx.lineTo(162,402);

ctx.moveTo(194,402);
ctx.lineTo(210,402);

ctx.moveTo(226,402);
ctx.lineTo(242,402);

ctx.moveTo(370,402);
ctx.lineTo(418,402);

ctx.moveTo(434,402);
ctx.lineTo(466,402);

ctx.moveTo(34,418);
ctx.lineTo(82,418);

ctx.moveTo(98,418);
ctx.lineTo(162,418);

ctx.moveTo(178,418);
ctx.lineTo(194,418);

ctx.moveTo(210,418);
ctx.lineTo(274,418);

ctx.moveTo(306,418);
ctx.lineTo(354,418);

ctx.moveTo(370,418);
ctx.lineTo(466,418);

ctx.moveTo(18,434);
ctx.lineTo(82,434);

ctx.moveTo(114,434);
ctx.lineTo(130,434);

ctx.moveTo(162,434);
ctx.lineTo(178,434);

ctx.moveTo(194,434);
ctx.lineTo(226,434);

ctx.moveTo(258,434);
ctx.lineTo(290,434);

ctx.moveTo(306,434);
ctx.lineTo(338,434);

ctx.moveTo(402,434);
ctx.lineTo(418,434);

ctx.moveTo(434,434);
ctx.lineTo(482,434);

ctx.moveTo(18,450);
ctx.lineTo(34,450);

ctx.moveTo(66,450);
ctx.lineTo(114,450);

ctx.moveTo(130,450);
ctx.lineTo(194,450);

ctx.moveTo(210,450);
ctx.lineTo(242,450);

ctx.moveTo(258,450);
ctx.lineTo(274,450);

ctx.moveTo(290,450);
ctx.lineTo(306,450);

ctx.moveTo(354,450);
ctx.lineTo(370,450);

ctx.moveTo(386,450);
ctx.lineTo(466,450);

ctx.moveTo(18,466);
ctx.lineTo(146,466);

ctx.moveTo(178,466);
ctx.lineTo(258,466);

ctx.moveTo(274,466);
ctx.lineTo(290,466);

ctx.moveTo(370,466);
ctx.lineTo(402,466);

ctx.moveTo(450,466);
ctx.lineTo(482,466);

ctx.moveTo(2,482);
ctx.lineTo(242,482);

ctx.moveTo(258,482);
ctx.lineTo(482,482);

ctx.moveTo(2,2);
ctx.lineTo(2,482);

ctx.moveTo(18,18);
ctx.lineTo(18,50);

ctx.moveTo(18,130);
ctx.lineTo(18,226);

ctx.moveTo(18,242);
ctx.lineTo(18,258);

ctx.moveTo(18,290);
ctx.lineTo(18,338);

ctx.moveTo(18,370);
ctx.lineTo(18,450);

ctx.moveTo(34,2);
ctx.lineTo(34,18);

ctx.moveTo(34,114);
ctx.lineTo(34,162);

ctx.moveTo(34,178);
ctx.lineTo(34,210);

ctx.moveTo(34,258);
ctx.lineTo(34,274);

ctx.moveTo(34,338);
ctx.lineTo(34,418);

ctx.moveTo(50,18);
ctx.lineTo(50,50);

ctx.moveTo(50,66);
ctx.lineTo(50,82);

ctx.moveTo(50,130);
ctx.lineTo(50,146);

ctx.moveTo(50,178);
ctx.lineTo(50,258);

ctx.moveTo(50,274);
ctx.lineTo(50,290);

ctx.moveTo(50,322);
ctx.lineTo(50,354);

ctx.moveTo(50,434);
ctx.lineTo(50,466);

ctx.moveTo(66,2);
ctx.lineTo(66,34);

ctx.moveTo(66,50);
ctx.lineTo(66,66);

ctx.moveTo(66,82);
ctx.lineTo(66,114);

ctx.moveTo(66,162);
ctx.lineTo(66,194);

ctx.moveTo(66,226);
ctx.lineTo(66,274);

ctx.moveTo(66,290);
ctx.lineTo(66,322);

ctx.moveTo(66,338);
ctx.lineTo(66,402);

ctx.moveTo(82,50);
ctx.lineTo(82,82);

ctx.moveTo(82,98);
ctx.lineTo(82,162);

ctx.moveTo(82,210);
ctx.lineTo(82,226);

ctx.moveTo(82,242);
ctx.lineTo(82,258);

ctx.moveTo(82,274);
ctx.lineTo(82,290);

ctx.moveTo(82,322);
ctx.lineTo(82,354);

ctx.moveTo(82,370);
ctx.lineTo(82,386);

ctx.moveTo(82,418);
ctx.lineTo(82,434);

ctx.moveTo(98,50);
ctx.lineTo(98,66);

ctx.moveTo(98,82);
ctx.lineTo(98,98);

ctx.moveTo(98,114);
ctx.lineTo(98,130);

ctx.moveTo(98,146);
ctx.lineTo(98,210);

ctx.moveTo(98,226);
ctx.lineTo(98,242);

ctx.moveTo(98,258);
ctx.lineTo(98,274);

ctx.moveTo(98,386);
ctx.lineTo(98,402);

ctx.moveTo(98,434);
ctx.lineTo(98,450);

ctx.moveTo(114,18);
ctx.lineTo(114,34);

ctx.moveTo(114,82);
ctx.lineTo(114,114);

ctx.moveTo(114,130);
ctx.lineTo(114,146);

ctx.moveTo(114,194);
ctx.lineTo(114,210);

ctx.moveTo(114,242);
ctx.lineTo(114,258);

ctx.moveTo(114,290);
ctx.lineTo(114,306);

ctx.moveTo(114,370);
ctx.lineTo(114,402);

ctx.moveTo(114,418);
ctx.lineTo(114,450);

ctx.moveTo(130,2);
ctx.lineTo(130,18);

ctx.moveTo(130,34);
ctx.lineTo(130,98);

ctx.moveTo(130,114);
ctx.lineTo(130,130);

ctx.moveTo(130,178);
ctx.lineTo(130,194);

ctx.moveTo(130,210);
ctx.lineTo(130,226);

ctx.moveTo(130,386);
ctx.lineTo(130,418);

ctx.moveTo(130,450);
ctx.lineTo(130,466);

ctx.moveTo(146,18);
ctx.lineTo(146,50);

ctx.moveTo(146,114);
ctx.lineTo(146,146);

ctx.moveTo(146,162);
ctx.lineTo(146,178);

ctx.moveTo(146,194);
ctx.lineTo(146,210);

ctx.moveTo(146,226);
ctx.lineTo(146,258);

ctx.moveTo(146,306);
ctx.lineTo(146,322);

ctx.moveTo(146,434);
ctx.lineTo(146,450);

ctx.moveTo(162,98);
ctx.lineTo(162,130);

ctx.moveTo(162,162);
ctx.lineTo(162,194);

ctx.moveTo(162,210);
ctx.lineTo(162,226);

ctx.moveTo(162,274);
ctx.lineTo(162,306);

ctx.moveTo(162,322);
ctx.lineTo(162,386);

ctx.moveTo(162,402);
ctx.lineTo(162,434);

ctx.moveTo(162,450);
ctx.lineTo(162,482);

ctx.moveTo(178,34);
ctx.lineTo(178,98);

ctx.moveTo(178,146);
ctx.lineTo(178,162);

ctx.moveTo(178,194);
ctx.lineTo(178,210);

ctx.moveTo(178,226);
ctx.lineTo(178,258);

ctx.moveTo(178,274);
ctx.lineTo(178,290);

ctx.moveTo(178,338);
ctx.lineTo(178,354);

ctx.moveTo(178,386);
ctx.lineTo(178,418);

ctx.moveTo(194,82);
ctx.lineTo(194,114);

ctx.moveTo(194,162);
ctx.lineTo(194,194);

ctx.moveTo(194,210);
ctx.lineTo(194,242);

ctx.moveTo(194,258);
ctx.lineTo(194,306);

ctx.moveTo(194,354);
ctx.lineTo(194,386);

ctx.moveTo(194,418);
ctx.lineTo(194,450);

ctx.moveTo(210,2);
ctx.lineTo(210,50);

ctx.moveTo(210,66);
ctx.lineTo(210,82);

ctx.moveTo(210,114);
ctx.lineTo(210,130);

ctx.moveTo(210,178);
ctx.lineTo(210,194);

ctx.moveTo(210,210);
ctx.lineTo(210,226);

ctx.moveTo(210,274);
ctx.lineTo(210,290);

ctx.moveTo(210,306);
ctx.lineTo(210,354);

ctx.moveTo(210,386);
ctx.lineTo(210,418);

ctx.moveTo(210,450);
ctx.lineTo(210,466);

ctx.moveTo(226,50);
ctx.lineTo(226,66);

ctx.moveTo(226,82);
ctx.lineTo(226,98);

ctx.moveTo(226,130);
ctx.lineTo(226,210);

ctx.moveTo(226,226);
ctx.lineTo(226,258);

ctx.moveTo(226,290);
ctx.lineTo(226,306);

ctx.moveTo(226,338);
ctx.lineTo(226,370);

ctx.moveTo(242,34);
ctx.lineTo(242,50);

ctx.moveTo(242,66);
ctx.lineTo(242,130);

ctx.moveTo(242,162);
ctx.lineTo(242,242);

ctx.moveTo(242,258);
ctx.lineTo(242,274);

ctx.moveTo(242,290);
ctx.lineTo(242,354);

ctx.moveTo(242,386);
ctx.lineTo(242,402);

ctx.moveTo(242,418);
ctx.lineTo(242,450);

ctx.moveTo(258,18);
ctx.lineTo(258,34);

ctx.moveTo(258,50);
ctx.lineTo(258,66);

ctx.moveTo(258,82);
ctx.lineTo(258,114);

ctx.moveTo(258,146);
ctx.lineTo(258,178);

ctx.moveTo(258,194);
ctx.lineTo(258,226);

ctx.moveTo(258,242);
ctx.lineTo(258,274);

ctx.moveTo(258,354);
ctx.lineTo(258,402);

ctx.moveTo(258,434);
ctx.lineTo(258,450);

ctx.moveTo(258,466);
ctx.lineTo(258,482);

ctx.moveTo(274,34);
ctx.lineTo(274,50);

ctx.moveTo(274,66);
ctx.lineTo(274,82);

ctx.moveTo(274,130);
ctx.lineTo(274,162);

ctx.moveTo(274,178);
ctx.lineTo(274,194);

ctx.moveTo(274,226);
ctx.lineTo(274,258);

ctx.moveTo(274,274);
ctx.lineTo(274,306);

ctx.moveTo(274,338);
ctx.lineTo(274,370);

ctx.moveTo(274,402);
ctx.lineTo(274,418);

ctx.moveTo(274,450);
ctx.lineTo(274,466);

ctx.moveTo(290,18);
ctx.lineTo(290,66);

ctx.moveTo(290,82);
ctx.lineTo(290,98);

ctx.moveTo(290,130);
ctx.lineTo(290,146);

ctx.moveTo(290,162);
ctx.lineTo(290,178);

ctx.moveTo(290,210);
ctx.lineTo(290,226);

ctx.moveTo(290,242);
ctx.lineTo(290,258);

ctx.moveTo(290,306);
ctx.lineTo(290,322);

ctx.moveTo(290,354);
ctx.lineTo(290,450);

ctx.moveTo(306,66);
ctx.lineTo(306,82);

ctx.moveTo(306,146);
ctx.lineTo(306,162);

ctx.moveTo(306,178);
ctx.lineTo(306,210);

ctx.moveTo(306,226);
ctx.lineTo(306,242);

ctx.moveTo(306,258);
ctx.lineTo(306,306);

ctx.moveTo(306,322);
ctx.lineTo(306,354);

ctx.moveTo(306,370);
ctx.lineTo(306,402);

ctx.moveTo(306,434);
ctx.lineTo(306,466);

ctx.moveTo(322,66);
ctx.lineTo(322,82);

ctx.moveTo(322,98);
ctx.lineTo(322,114);

ctx.moveTo(322,162);
ctx.lineTo(322,226);

ctx.moveTo(322,242);
ctx.lineTo(322,290);

ctx.moveTo(322,306);
ctx.lineTo(322,322);

ctx.moveTo(322,354);
ctx.lineTo(322,418);

ctx.moveTo(322,450);
ctx.lineTo(322,482);

ctx.moveTo(338,2);
ctx.lineTo(338,34);

ctx.moveTo(338,50);
ctx.lineTo(338,66);

ctx.moveTo(338,82);
ctx.lineTo(338,98);

ctx.moveTo(338,178);
ctx.lineTo(338,194);

ctx.moveTo(338,226);
ctx.lineTo(338,242);

ctx.moveTo(338,290);
ctx.lineTo(338,306);

ctx.moveTo(338,322);
ctx.lineTo(338,402);

ctx.moveTo(338,418);
ctx.lineTo(338,466);

ctx.moveTo(354,2);
ctx.lineTo(354,18);

ctx.moveTo(354,34);
ctx.lineTo(354,50);

ctx.moveTo(354,66);
ctx.lineTo(354,82);

ctx.moveTo(354,98);
ctx.lineTo(354,130);

ctx.moveTo(354,162);
ctx.lineTo(354,258);

ctx.moveTo(354,274);
ctx.lineTo(354,338);

ctx.moveTo(354,370);
ctx.lineTo(354,386);

ctx.moveTo(354,402);
ctx.lineTo(354,418);

ctx.moveTo(354,434);
ctx.lineTo(354,450);

ctx.moveTo(354,466);
ctx.lineTo(354,482);

ctx.moveTo(370,18);
ctx.lineTo(370,34);

ctx.moveTo(370,130);
ctx.lineTo(370,162);

ctx.moveTo(370,242);
ctx.lineTo(370,290);

ctx.moveTo(370,354);
ctx.lineTo(370,370);

ctx.moveTo(370,386);
ctx.lineTo(370,402);

ctx.moveTo(370,418);
ctx.lineTo(370,466);

ctx.moveTo(386,2);
ctx.lineTo(386,18);

ctx.moveTo(386,34);
ctx.lineTo(386,98);

ctx.moveTo(386,162);
ctx.lineTo(386,242);

ctx.moveTo(386,290);
ctx.lineTo(386,322);

ctx.moveTo(386,338);
ctx.lineTo(386,386);

ctx.moveTo(386,434);
ctx.lineTo(386,450);

ctx.moveTo(402,2);
ctx.lineTo(402,50);

ctx.moveTo(402,66);
ctx.lineTo(402,82);

ctx.moveTo(402,178);
ctx.lineTo(402,194);

ctx.moveTo(402,322);
ctx.lineTo(402,370);

ctx.moveTo(402,418);
ctx.lineTo(402,434);

ctx.moveTo(418,18);
ctx.lineTo(418,34);

ctx.moveTo(418,82);
ctx.lineTo(418,114);

ctx.moveTo(418,162);
ctx.lineTo(418,226);

ctx.moveTo(418,242);
ctx.lineTo(418,258);

ctx.moveTo(418,274);
ctx.lineTo(418,338);

ctx.moveTo(418,386);
ctx.lineTo(418,402);

ctx.moveTo(418,450);
ctx.lineTo(418,466);

ctx.moveTo(434,2);
ctx.lineTo(434,18);

ctx.moveTo(434,50);
ctx.lineTo(434,66);

ctx.moveTo(434,98);
ctx.lineTo(434,162);

ctx.moveTo(434,210);
ctx.lineTo(434,242);

ctx.moveTo(434,290);
ctx.lineTo(434,354);

ctx.moveTo(434,402);
ctx.lineTo(434,418);

ctx.moveTo(434,434);
ctx.lineTo(434,450);

ctx.moveTo(434,466);
ctx.lineTo(434,482);

ctx.moveTo(450,18);
ctx.lineTo(450,34);

ctx.moveTo(450,98);
ctx.lineTo(450,114);

ctx.moveTo(450,146);
ctx.lineTo(450,178);

ctx.moveTo(450,194);
ctx.lineTo(450,210);

ctx.moveTo(450,242);
ctx.lineTo(450,274);

ctx.moveTo(450,290);
ctx.lineTo(450,306);

ctx.moveTo(450,322);
ctx.lineTo(450,338);

ctx.moveTo(450,354);
ctx.lineTo(450,386);

ctx.moveTo(466,2);
ctx.lineTo(466,18);

ctx.moveTo(466,34);
ctx.lineTo(466,98);

ctx.moveTo(466,114);
ctx.lineTo(466,130);

ctx.moveTo(466,178);
ctx.lineTo(466,194);

ctx.moveTo(466,210);
ctx.lineTo(466,242);

ctx.moveTo(466,274);
ctx.lineTo(466,290);

ctx.moveTo(466,338);
ctx.lineTo(466,354);

ctx.moveTo(466,370);
ctx.lineTo(466,402);

ctx.moveTo(482,2);
ctx.lineTo(482,482);


    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
    }
}

function reload(){
    location.reload();
}

function drawIt() {

    if(stevilka==1){
        t=1;
        ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        if (nar == 1) {
            ctx.fillRect(x, y, 3.5, 3.5);
            labirint();
    
        } else if (nar == 2) {
            ctx.clearRect(x, y, 4, 4);
            labirint();
        }else if(nar == 3){
            clearInterval(refreshIntervalId);
        }
        if (x == 234 && y < 10) {
            y = y + dy;
        }
        else if (x < 266 && y == 10) {
            x = x + dx;
        }
        else if (x == 266 && y < 26) {
            y = y + dy;
        }
        else if (x > 218 && y == 26) {
            x = x - dx;
        }
        else if (x == 218 && y < 90) {
            y = y + dy;
        }
        else if (x < 250 && y == 90) {
            x = x + dx;
        }
        else if (x == 250 && y < 106) {
            y = y + dy;
        }
        else if (x > 234 && y == 106) {
            x = x - dx;
        }
        else if (x == 234 && y < 170) {
            y = y + dy;
        }
        else if (x < 250 && y == 170) {
            x = x + dx;
        }
        else if (x == 250 && y < 202) {
            y = y + dy;
        }
        else if (x < 266 && y == 202) {
            x = x + dx;
        }
        else if (x == 266 && y < 218) {
            y = y + dy;
        }
        else if (x < 298 && y == 218) {
            x = x + dx;
        }
        else if (x == 298 && y < 234) {
            y = y + dy;
        }
        else if (x < 330 && y == 234) {
            x = x + dx;
        }
        else if (x == 330 && y > 218 && y <= 234) {
            y = y - dy;
        }
        else if (x < 362 && y == 218) {
            x = x + dx;
        }
        else if (x == 362 && y < 234) {
            y = y + dy;
        }
        else if (x > 346 && y == 234) {
            x = x - dx;
        }
        else if (x == 346 && y < 250) {
            y = y + dy;
        }
        else if (x < 378 && y == 250) {
            x = x + dx;
        }
        else if (x == 378 && y < 282) {
            y = y + dy;
        }
        else if (x < 394 && y == 282) {
            x = x + dx;
        }
        else if (x == 394 && y < 346) {
            y = y + dy;
        }
        else if (x > 378 && y == 346) {
            x = x - dx;
        }
        else if (x == 378 && y < 378) {
            y = y + dy;
        }
        else if (x > 346 && y == 378) {
            x = x - dx;
        }
        else if (x == 346 && y < 394) {
            y = y + dy;
        }
        else if (x > 330 && y == 394) {
            x = x - dx;
        }
        else if (x == 330 && y > 378 && y <= 394) {
            y = y - dy;
        }
        else if (x > 266 && y == 378) {
            x = x - dx;
        }
        else if (x == 266 && y < 394) {
            y = y + dy;
        }
        else if (x > 250 && y == 394) {
            x = x - dx;
        }
        else if (x == 250 && y < 442) {
            y = y + dy;
        }
        else if (x > 234 && x <= 250 && y == 442) {
            x = x - dx;
        }
        else if (x == 234 && y > 378 && y <= 442) {
            y = y - dy;
        }
        else if (x > 186 && x <= 234 && y < 380) {
            x = x - dx;
        }
        else if (x == 186 && y < 394) {
            y = y + dy;
        }
        else if (x > 170 && y == 394) {
            x = x - dx;
        }
        else if (x == 170 && y < 426) {
            y = y + dy;
        }
        else if (x > 122 && x <= 170 && y == 426) {
            x = x - dx;
        }
        else if (x == 122 && y < 442) {
            y = y + dy;
        }
        else if (x < 170 && y == 442) {
            x = x + dx;
        }
        else if (x == 170 && y < 458) {
            y = y + dy;
        }
        else if (x < 202 && y == 458) {
            x = x + dx;
        }
        else if (x == 202 && y > 442) {
            y = y - dy;
        }
        else if (x > 186 && x <= 202 && y == 442) {
            x = x - dx;
        }
        else if (x == 186 && y > 426) {
            y = y - dy;
        }
        else if (x < 218 && x >= 186 && y == 426) {
            x = x + dx;
        }
        else if (x == 218 && y < 474 && y >= 426) {
            y = y + dy;
        }
        else if (x < 250 && x >= 218 && y == 474) {
            x = x + dx;
        }
        else if (x == 250 && y < 482) {
            y = y + dy;
        }
        else if (x == 250 && y == 482) {
            y = 2;
            x = 234;
            nar++;
        }
    }
    else if(stevilka==2){
        t=1;
        ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        if (nar == 1) {
            ctx.fillRect(x, y, 3.5, 3.5);
            labirint();
    
        } else if (nar == 2) {
            ctx.clearRect(x, y, 4, 4);
            labirint();
        }else if(nar == 3){
            clearInterval(refreshIntervalId);
        }
        if (x == 234 && y < 10) {
            y = y + dy;
        }
        else if (x < 330 && y == 10) {
            x = x + dx;
        }
        else if (x == 330 && y < 26) {
            y = y + dy;
        }
        else if (x > 298 && y == 26 && x<=330) {
            x = x - dx;
        }
        else if (x == 298 && y < 42) {
            y = y + dy;
        }
        else if (x < 346 && y == 42) {
            x = x + dx;
        }
        else if (x == 346 && y > 26 && y<=42) { //7
            y = y - dy;
        }
        else if (x < 362 && y == 26) {
            x = x + dx;
        }
        else if (x == 362 && y > 10 && y<=26) {
            y = y - dy;
        }
        else if (x < 378 && y == 10) {
            x = x + dx;
        }
        else if (x == 378 && y < 26) {
            y = y + dy;
        }
        else if (x < 394 && y == 26) {
            x = x + dx;
        }
        else if (x == 394 && y < 58) {
            y = y + dy;
        }
        else if (x < 410 && y == 58) {
            x = x + dx;
        }
        else if (x == 410 && y < 74) {
            y = y + dy;
        }
        else if (x < 458 && y == 74) {
            x = x + dx;
        }
        else if (x == 458 && y < 90) {
            y = y + dy;
        }
        else if (x > 426 && y == 90) {
            x = x - dx;
        }
        else if (x == 426 && y < 122) {
            y = y + dy;
        }
        else if (x > 362 && y == 122) { //20
            x = x - dx;
        }
        else if (x == 362 && y < 138) {
            y = y + dy;
        }
        else if (x > 298 && y == 138) {
            x = x - dx;
        }
        else if (x == 298 && y < 154) {
            y = y + dy;
        }
        else if (x > 282 && y == 154) {
            x = x - dx;
        }
        else if (x == 282 && y > 122 && y<=154) {
            y = y - dy;
        }
        else if (x > 250 && y == 122) {
            x = x - dx;
        }
        else if (x == 250 && y < 138) { //27
            y = y + dy;
        }
        else if (x < 266 && y == 138) {
            x = x + dx;
        }
        else if (x == 266 && y < 170) {
            y = y + dy;
        }
        else if (x < 282 && y == 170) {
            x = x + dx;
        }
        else if (x == 282 && y < 186) { //31
            y = y + dy;
        }
        else if (x < 298 && y == 186) {
            x = x + dx;
        }
        else if (x == 298 && y > 170 && y<=186) {
            y = y - dy;
        }
        else if (x < 314 && y == 170) {
            x = x + dx;
        }
        else if (x == 314 && y < 218) {
            y = y + dy;
        }
        else if (x > 298 && y== 218) {
            x = x - dx;
        }
        else if (x == 298 && y > 202 && y<=218) {
            y = y - dy;
        }
        else if (x > 266 && y == 202 ) { //38
            x = x - dx;
        }
        else if (x == 266 && y < 218) {
            y = y + dy;
        }
        else if (x < 282 && y == 218) {
            x = x + dx;
        }
        else if (x == 282 && y < 234) {
            y = y + dy;
        }
        else if (x < 298 && y== 234) {
            x = x + dx;
        }
        else if (x == 298 && y < 250) {
            y = y + dy;
        }
        else if (x < 314 && y == 250) {
            x = x + dx;
        }
        else if (x == 314 && y < 298) {
            y = y + dy;
        }
        else if (x < 330 && y == 298) {
            x = x + dx;
        }
        else if (x == 330 && y > 282 && y<=298) {
            y = y - dy;
        }
        else if (x < 346 && y == 282) { //48
            x = x + dx;
        }
        else if (x == 346 && y < 314) {
            y = y + dy;
        }
        else if (x > 330 && y == 314) {
            x = x - dx;
        }
        else if (x == 330 && y< 330) {
            y = y + dy;
        }
        else if (x > 314 && y == 330) {
            x = x - dx;
        }
        else if (x == 314 && y < 346) {
            y = y + dy;
        }
        else if (x < 330 && y == 346) {
            x = x + dx;
        }
        else if (x == 330 && y < 410) {
            y = y + dy;
        }
        else if (x < 346 && y == 410 && x>=330) { //56
            x = x + dx;
        }
        else if (x == 346 && y > 394 && y<=410) {
            y = y - dy;
        }
        else if (x < 362 && y == 394 && x>=346) {
            x = x + dx;
        }
        else if (x == 362 && y< 426) {
            y = y + dy;
        }
        else if (x > 346 && y == 426) {
            x = x - dx;
        }
        else if (x == 346 && y < 474) { //61
            y = y + dy;
        }
        else if (x > 330 && y == 474) {
            x = x - dx;
        }
        else if (x == 330 && y> 442) {
            y = y - dy;
        }
        else if (x > 314 && y == 442) {
            x = x - dx;
        }
        else if (x == 314 && y < 474) {
            y = y + dy;
        }
        else if (x > 266 && y == 474) {
            x = x - dx;
        }
        else if (x == 266 && y> 458) {
            y = y - dy;
        }
        else if (x > 250 && y == 458) {
            x = x - dx;
        }
        else if (x == 250 && y> 426 && y<=458) {
            y = y - dy;
        }
        else if (x < 282 && y == 426 && x>=250) {
            x = x + dx;
        }
        else if (x == 282 && y> 394) {
            y = y - dy;
        }
        else if (x > 266 && y == 394) {
            x = x - dx;
        }
        else if (x == 266 && y< 410) {
            y = y + dy;
        }
        else if (x > 250 && y == 410) {
            x = x - dx;
        }
        else if (x == 250 && y> 378 && y<=410) { //76
            y = y - dy;
        }
        else if (x > 202 && y == 378) {
            x = x - dx;
        }
        else if (x == 202 && y< 394) {
            y = y + dy;
        }
        else if (x > 186 && y == 394) {
            x = x - dx;
        }
        else if (x == 186 && y< 410) {
            y = y + dy;
        }
        else if (x < 202 && y == 410) {
            x = x + dx;
        }
        else if (x == 202 && y< 426) {
            y = y + dy;
        }
        else if (x < 234 && y == 426) {
            x = x + dx;
        }
        else if (x == 234 && y< 442) {
            y = y + dy;
        }
        else if (x > 202 && y == 442) {
            x = x - dx;
        }
        else if (x == 202 && y< 458) {
            y = y + dy;
        }
        else if (x > 170 && y == 458) {
            x = x - dx;
        }
        else if (x == 170 && y< 474) {
            y = y + dy;
        }
        else if (x < 250 && y == 474) {
            x = x + dx;
        }
        else if (x == 250 && y<482) {
            y = y + dy;
        }
        else if (x == 250 && y == 482) {
            y = 2;
            x = 234;
            nar++;
        }
    }
    
}
