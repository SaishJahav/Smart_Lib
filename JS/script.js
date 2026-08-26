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