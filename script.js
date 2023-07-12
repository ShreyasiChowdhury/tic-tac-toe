let ting = new Audio("music/ting.mp3");
let gameover = new Audio("music/gameover.mp3");
let turn = "X";
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {

            for (i = 0; i < 9; i++) {
                if (i == e[0] || i == e[1] || i == e[2]) {
                    boxtext[e[0]].style.color = "green";
                    boxtext[e[1]].style.color = "green";
                    boxtext[e[2]].style.color = "green";
                }
            }

            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            gameover.play();
            isgameover = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.height = "150px";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

reset.addEventListener('click', () => {
    location.reload();
})