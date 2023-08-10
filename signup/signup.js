/* 휴대폰 번호 첫번째 칸에서 3자리 입력시 둘째칸으로 포커스 옮김 */
function changePhone1(){
    const phone1 = document.getElementById("phone1").value;
    if(phone1.length === 3) {
        document.getElementById("phone2").focus();
    }
}

/* 휴대폰 번호 두번째 칸에서 4자리 입력시 셋째칸으로 포커스 옮김 */
function changePhone2(){
    const phone2 = document.getElementById("phone2").value;
    if(phone2.length === 4) {
        document.getElementById("phone3").focus();
    }
}

/* 휴대폰 번호 세번째 칸에서 4자리 입력시 인증번호전송 버튼 활성화 */
function changePhone3(){
    const phone1 = document.getElementById("phone1").value;
    const phone2 = document.getElementById("phone2").value;
    const phone3 = document.getElementById("phone3").value;
    if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4){
        document.getElementById("token__button").style = "background-color: #FFFFFF; color: #0068FF; cursor: pointer;";
        document.getElementById("token__button").removeAttribute("disabled");
    }
}

/* 인증번호전송 버튼 누를시 토큰정보 생성 */
/* 타이머 화면에 생성; 3:00분에서 1초씩 줄어들게 만들기 (초는 두자리수 유지; 0:00분 아래로 내려가지 X) */
/* 인증확인 버튼 활성화 */
function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("token").innerText = token;
    /* 인증번호 전송을 눌렀으니까 전송버튼은 비활성화; 인증확인 버튼은 활성화 */
    document.getElementById("token__button").style = "background-color: #FFFFFF; cursor: default;";
    document.getElementById("token__button").setAttribute("disabled", "true");
    document.getElementById("token__timer__confirm__button").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;";
    document.getElementById("token__timer__confirm__button").removeAttribute("disabled");
    getTokenTimer();
}

/* 3분 이내 인증확인 버튼 누르면 인증 완료 메세지 출력; 그렇지 않을 시 인증확인 버튼 회색으로 되돌리고 비활성화 + 토큰정보랑 시간 초기화 */
/* 메세지 확인 시 인증확인 버튼 내용 인증완료로 변경 + 가입하기 버튼 활성화 */
let interval;
function getTokenTimer(){
    let timer = 10;
    interval = setInterval(() => {
        if(timer >= 0){
            const minutes = Math.floor(timer / 60);
            const seconds = timer % 60;

            document.getElementById("token__timer").innerText = minutes + ":" + String(seconds).padStart(2, "0");
            timer -= 1;
        } else {
            document.getElementById("token").innerText = "000000";
            document.getElementById("token__button").style = "";
            document.getElementById("token__button").setAttribute("disabled", "true");

            document.getElementById("token__timer").innerText = "3:00";
            document.getElementById("token__timer__confirm__button").style = "";
            document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true");

            clearInterval(interval);
        }
    }, 1000)
}

function getTokenTimerConfirm(){
    clearInterval(interval)
    document.getElementById("token__timer__confirm__button").style = "background-color: #FFFFFF; cursor: default;";
    document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true");
    document.getElementById("token__timer__confirm__button").innerText = "Validated";
    alert("Successfully validated.");

    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;";
    document.getElementById("signup__button").removeAttribute("disabled");
}


function signup(){
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const location = document.getElementById("location").value;
    const genderWoman = document.getElementById("gender__woman").checked;
    const genderMan = document.getElementById("gender__man").checked;
    
    /* let 은 변수에 재할당이 가능; const는 변수 재선언, 변수 재할당 모두 불가능 */
    let isValid = true;
    
    /* 이메일에 @가 포함되지 않으면 에러메세지 출력 */
    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "Your email is incorrect.";
        isValid = false;
    } else { /* 이메일 입력창이 비어있는지 확인, 비어있으면 에러메세지 출력 */ 
        document.getElementById("error__email").innerText = "";
    }
    /* 이름 입력창이 비어있는지 확인, 비어있으면 에러메세지 출력 */
    if(name === "") {
        document.getElementById("error__name").innerText = "Your name is incorrect.";
        isValid = false;
    } else {
        document.getElementById("error__name").innerText = "";
    }
    /* 비밀번호1 입력창이 비어있는지 확인, 비어있으면 에러메세지 출력 */
    if(password1 === ""){
        document.getElementById("error__password1").innerText = "Type your password.";
        isValid = false;
    } else {
        document.getElementById("error__password1").innerText = "";
    }
    /* 비밀번호2 입력창이 비어있는지 확인, 비어있으면 에러메세지 출력 */
    if(password2 === ""){
        document.getElementById("error__password2").innerText = "Type your password.";
        isValid = false;
    } else {
        document.getElementById("error__password2").innerText = "";
    }
    /* 비밀번호가 동일하지 않으면 에러메세지 출력 */
    if(password1 !== password2) {
        document.getElementById("error__password1").innerText = "Password doesn't match.";
        document.getElementById("error__password2").innerText = "Password doesn't match.";
        isValid = false;
    }
    /* 지역이 선택되지 않았으면 에러메세지 출력 */
    if(location !== "South Korea" && location !== "United States" && location !== "Japan"){
        document.getElementById("error__location").innerText = "Select your location.";
        isValid = false;
    } else {
        document.getElementById("error__location").innerText = "";
    }
    /* 성별이 선택되지 않았으면 에러메세지 출력 */
    if(genderWoman === false && genderMan === false){
        document.getElementById("error__gender").innerText = "Select your gender.";
        isValid = false;
    } else {
        document.getElementById("error__gender").innerText = "";
    }

    if(isValid === true){
        alert("Welcome!");
    }
}