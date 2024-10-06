let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset");
let msgContaner = document.querySelector(".msg-contaner");
let newGame = document.querySelector("#new-game");


let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 7]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContaner.classList.add("hidden");
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulation ! ${winner}  is Winner 🙌`;
    msgContaner.classList.remove("hidden");
    disableBoxes();
}
const checkwinner = () => {
    for (let Pattern of winPattern) {
        pos1vol = boxes[Pattern[0]].innerText;
        pos2vol = boxes[Pattern[1]].innerText;
        pos3vol = boxes[Pattern[2]].innerText;
        if (pos1vol != "" && pos2vol != "" && pos3vol != "") {
            if (pos1vol === pos2vol && pos2vol === pos3vol) {

                showWinner(pos1vol);
            }
        }
    }
}
newGame.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);