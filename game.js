const startWord = () => { 
    /* 화살표 함수 */
    let myWord = document.getElementById("myWord").value
    let word = document.getElementById("word").innerText

    let lastWord = word[word.length - 1]
    let firstWord = myWord[0]

    if(lastWord === firstWord) {
        // 정답일 때
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myWord
        document.getElementById("myWord").value = ""
    } else {
        // 오답일 때
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myWord").value = ""
    }
}