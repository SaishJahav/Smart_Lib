function showpass(){

    let password=document.getElementById("loginPassword");

    if(password.type === "password"){

        password.type="text"
    }
    else{
        password.type="password"
    }


}

function scrollb(direction){

    let books=document.getElementById("book-container");

    books.scrollLeft = books.scrollLeft + (direction * 300);

    

}