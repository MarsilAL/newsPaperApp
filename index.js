$(document).ready(function () {

    // display the main screen, hide others
    $(".errorMessage").hide();
    $(".newsSection").hide();

    // register click handlers
    $(".btn").click(handleEnter);
    $("#loginButton").click(handleLogin);

    /*Avatar ef*/
    $("#uname").keydown(inputkeydown);
    $("#uname").keyup(inputkeyup);
    $("#uname").keypress(inputkeypress);
    $("#psw").keydown(pswkeydown);
    $("#psw").keyup(pswkeyup);
    $("#psw").keypress(pswkeypress);
    
});


// function Handlers
function handleEnter(){
    $(".loginSection").slideDown();
    $(".btn").hide();
    $(".centered").hide();
} 

function handleLogin(event) {
    event.preventDefault();

    const username = $("#uname").val();
    const password = $("#psw").val();

    if (credentialsValid(username, password)) {
        $("#errorMessage").hide();
        $("#loginSection").hide();
        $(".imgideaslogo").hide();
        $(".newsSection").show();
    } else {
        $("#errorMessage").show();
    }
}

function credentialsValid(username, password) {
    const valid = (123 == username && 123 == password);
    console.log("credentials valid:", valid)
    return valid;
}
/*Avatar ef*/
function inputkeydown(){
    $("#Avatar").css("border","2px solid #70a2d");
} 
function inputkeyup(){
    $("#Avatar").css("border","2px solid #EFC21E");
} 
function inputkeypress(){
    $("#Avatar").css("border","2px solid #BC26D7");
} 
function pswkeypress(){
    $("#Avatar").css("border","2px solid #70a2d");
} 
function pswkeyup(){
    $("#Avatar").css("border","2px solid #EFC21E");
} 
function pswkeydown(){
    $("#Avatar").css("border","2px solid #BC26D7");
} 
