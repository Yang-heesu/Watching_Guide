function Sale(URL){
    answer = confirm("구매하시겠습니까?");
        
    if(answer == true){
        alert("구매 성공");
        location.href = URL;
    }
    else alert("구매 실패");
}