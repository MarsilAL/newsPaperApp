$(document).ready(function () {

    // display the main screen, hide others
    $(".errorMessage").hide();
    $(".newsSection").hide();

    // register click handlers
    $(".btn").click(handleEnter);
    $("#loginButton").click(handleLogin);
    
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
        $(".newsSection").show();
    } else {
        $(".errorMessage").show();
    }
}

function credentialsValid(username, password) {
    const valid = (123 == username && 123 == password);
    console.log("credentials valid:", valid)
    return valid;
}