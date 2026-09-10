/* PASSWORD */

function showpass() {

    let password = document.getElementById("loginPassword");

    if (password.type == "password") {

        password.type = "text";

    }
    else {

        password.type = "password";

    }

}


/* BOOK SCROLL */

function scrollb(direction) {

    let books = document.getElementById("book-container1");

    books.scrollLeft =
        books.scrollLeft + (direction * 300);

}
function scrollb1(direction) {
    let books1 = document.getElementById("book-container2");

    books1.scrollLeft =
        books1.scrollLeft + (direction * 240);
}
/* JQUERY */

$(document).ready(function() {


    /* Reserve Button */

    $(".reserveBtn").click(function() {

        let book = $(this).data("book");

        $("#bookName").text(book);

        $("#userName").val("");

        $("#reservationCode").text("");

        $("#popup").css("display", "flex");

    });


    /* Close Popup */

    $("#close").click(function() {

        $("#popup").css("display", "none");

    });


    /* Confirm Reservation */

    $("#confirmReservation").click(function() {

        let name = $("#userName").val();

        if (name == "") {

            alert("Please enter your name");

            return;

        }


        let code =
            "SL" + (Math.floor(Math.random() * 9000) + 1000);


        $("#reservationCode").text(code);

    });

});

function msgbox(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let msg = document.getElementById("msg").value;
    
    if (name == "" || email == "" || subject == "" || msg == "") {

      alert("Please fill all the fields.");
    }

    else {

        document.getElementById("contactForm").reset();
        alert("Message Submitted Succesfully!");
        
        }
    
};

function rateBook(rating, clickedStar){

    //alert("Rating: "+rating)

    let stars = clickedStar.parentElement.querySelectorAll("button");

    for(let i=0;i<stars.length;i++){

        if(i<rating){
            stars[i].style.setProperty("color","gold","important");
        }
        else{
            stars[i].style.setProperty("color","gray","important");
        }
    }
}

function buy(){

    alert("You Can Reserve The Book Now Payment Should Be Done At Store. Details Of Store Are Given In Contact Section.");
    
}