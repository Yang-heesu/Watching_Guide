function Password(){
    answer = prompt("영화 '암살'의 감독 이름은?","");
        
    if(answer == "최동훈"){
        alert("정답");
        location.href = "html/Secret_index.html";
    }
    else alert("오답");
}