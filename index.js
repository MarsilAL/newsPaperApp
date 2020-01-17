$(document).ready(function () {

    // display the main screen, hide others
    $(".errorMessage").hide();
    $(".newsSection").hide();
    // register click handlers
    $("#loginButton").click(handleLogin);
    // $("#searchBtn").click(askApi);
    $("#goApi").click(goToApi);

    /*Avatar ef*/
    $("#uname").keydown(inputkeydown);
    $("#uname").keyup(inputkeyup);
    $("#uname").keypress(inputkeypress);
    $("#psw").keydown(pswkeydown);
    $("#psw").keyup(pswkeyup);
    $("#psw").keypress(pswkeypress);

});




function handleLogin(event) {
    event.preventDefault();

    const username = $("#uname").val();
    const password = $("#psw").val();

    const apiUrl = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?q=Putin&limit=5';
    $.ajax({
        url: apiUrl,
        success: function(json) {
            $("#errorMessage").hide();
            $("#loginSection").hide();
            $(".imgideaslogo").hide();
            $(".newsSection").show();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           alert(textStatus, errorThrown);
        },
    
        //headers: {'Authorization': 'Basic bWFkaHNvbWUxMjM='},
        beforeSend: function (xhr) {
          xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
        },
        type: 'GET',
        contentType: 'json',
    });


}


/*Avatar ef*/
function inputkeydown() {
    $("#Avatar").css("border", "2px solid #70a2d");
}
function inputkeyup() {
    $("#Avatar").css("border", "2px solid #EFC21E");
}
function inputkeypress() {
    $("#Avatar").css("border", "2px solid #BC26D7");
}
function pswkeypress() {
    $("#Avatar").css("border", "2px solid #70a2d");
}
function pswkeyup() {
    $("#Avatar").css("border", "2px solid #EFC21E");
}
function pswkeydown() {
    $("#Avatar").css("border", "2px solid #BC26D7");
}


/**Search */
/*
function askApi() {
    const testUrl = "https://www.w3.org/TR/PNG/iso_8859-1.txt";
    const searchInput = $("#inputSearch").val();

    $.get(testUrl, function(data, status){
        $("li").append(data);
        console.log(status);
        alert(status);
      });

  //  const searchResult = 
 // $("#resultsar").load("https://www.w3.org/TR/PNG/iso_8859-1.txt");

   // console.log(searchResult);

    $("#resultsar").css("border", "2px solid #BC26D7");
    $("#resultsar").append(" <b>you are seraching for ..</b>.", searchInput);
    console.log("<p class='infotxt'>You are search for : </p>", searchInput);
}
*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
function goToApi(event) {
    const myuser = $("#uname").val();
    const mypwd = $("#psw").val();
    const apiUrl = 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?q=Putin&limit=5';
    $.ajax({
        url: apiUrl,
        success: function(json) {
            alert("Success", json);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
           alert(textStatus, errorThrown);
        },
    
        //headers: {'Authorization': 'Basic bWFkaHNvbWUxMjM='},
        beforeSend: function (xhr) {
          xhr.setRequestHeader ("Authorization", "Basic " + btoa(myuser + ":" + mypwd));
        },
        type: 'GET',
        contentType: 'json',
    });
}

