const toggleBG = document.querySelector('#buttonBG');
const toggleFG = document.querySelector('#buttonID')

//darkmode
function darkModeTrans(){
    const darkModeBG = document.body;
    darkModeBG.classList.toggle("dark-mode");
    toggleBtnColor();
}

const LEFT_KEY = 'TO_LEFT';
const RIGHT_KEY = 'TO_RIGHT';

function toggleBtnColor() {
    const left = toggleFG.style.left;
    if(left == '0px') {
        toggleBG.style.background = '#CCCCCC';
        toggleActionStart(toggleFG, LEFT_KEY);
    }else if(left == '40px'){
        toggleBG.style.background = '#f29494';
        toggleActionStart(toggleFG, RIGHT_KEY);
    }
}
 
    // 버튼 이동
function moveBtn(toggleBtn, LR) {
    let left = 0;
    parseInt(toggleBtn.style.left, left);
    left += (LR == RIGHT_KEY) ? 5 : -5;
    if(left >= 0 && left <= 40) {
        left += 'px';
        toggleBtn.style.left = LEFT_KEY;
    }
}


// 토글 버튼 이동 모션 함수
function toggleActionStart(toggleBtn, LR) {
    // 0.01초 단위로 실행
    const intervalID = setInterval(moveBtn(toggleBtn, LR), 10);
    setTimeout(function(){
        clearInterval(intervalID);
    }, 201);
}

