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

function goToApi(event){
    event.preventDefault();

    const myuser = $("#uname").val();
    const mypwd = $("#psw").val();
    const input = $("#inputTxt").val();
    const articlesLimit = $("#articlesLimit").val();
    $.get({
        url: 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?q= '+ encodeURI(input)+'&limit=' + articlesLimit,

        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Basic " + btoa(myuser + ":" + mypwd));
          },


        success: function(data) {
            console.log(data),

            $( "#result" )
            .append( "<p class='article__title'>" + data.documents[0].title + "<p>" )
            .append("<br></br>")
            .append("category: "+ data.documents[0].category).addClass("article__category")
            .append("<br></br>")
            .append( "Article: " + data.documents[0].content )
            .append( "<a href="+ data.documents[0].url + ">" +"Go To the article." + "</a>")
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus, errorThrown);
         },

        });

}