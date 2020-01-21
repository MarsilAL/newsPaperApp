$(document).ready(function () {

    // display the main screen, hide others
    $(".errorMessage").hide();
    $(".newsSection").hide();
    // register click handlers
    $("#loginButton").click(handleLogin);
    // $("#searchBtn").click(askApi);
    $("#goApi").click(goToApi);
    $(".xBtn").click(xAction);
    $(".favBtn").click(favAction);

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
        success: function (json) {
            $("#errorMessage").hide();
            $("#loginSection").hide();
            $(".imgideaslogo").hide();
            $(".newsSection").show();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus, errorThrown);
        },

        //headers: {'Authorization': 'Basic bWFkaHNvbWUxMjM='},
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
        },
        type: 'GET',
        contentType: 'json',
    });


}

function xAction() {
    $(".articles").fadeOut();
}


/*Avatar ef*/
function inputkeydown() {
    $(".loginContainer").css("border", "2px solid #0ff");
}
function inputkeyup() {
    $(".loginContainer").css("border", "2px solid #00f");
}
function inputkeypress() {
    $(".loginContainer").css("border", "2px solid #FF69B4");
}
function pswkeypress() {
    $(".loginContainer").css("border", "2px solid #0ff");
}
function pswkeyup() {
    $(".loginContainer").css("border", "2px solid #00f");
}
function pswkeydown() {
    $(".loginContainer").css("border", "2px solid #FF69B4");
}


/**Search */

function goToApi(event) {
    event.preventDefault();

    const myuser = $("#uname").val();
    const mypwd = $("#psw").val();
    const input = $("#inputTxt").val();
    const articlesLimit = $("#articlesLimit").val();
    $.get({
        url: 'https://sandbox-api.ipool.asideas.de/sandbox/api/search?q= ' + encodeURI(input) + '&limit=' + articlesLimit,

        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa(myuser + ":" + mypwd));
        },


        success: function (data) {            

                for (i = 0; i < articlesLimit; i++) {

                    $("#result")
                    .append("<div class='articles'></div>")
                    $(".articles")
                    .append("<button id='xBtn' class='xBtn'>X</button>")
                    .append("<button id='favBtn' class='favBtn'>♡</button>")
                    .append("<p color='#ffffff' class='article__title' id='article__title' >" + data.documents[i].title + "<p>")
                    .append("<br></br>")
                    .append("<p class='category' id='category'>" + "category: " + data.documents[i].category + " </p>")
                    .append("<br></br>")
                    .append("<div class='content' id='content'>" +  data.documents[i].content + " </div>")
                    .append("<a class ='aUrl' class='aUrl' href=" + data.documents[i].url + ">" + "Go To the article." + "</a>")
                    .append("<br></br>")
                    .append("<br></br>")
                    .append("<hr>")

                }
                console.log(data)
                
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus, errorThrown);
        },

    });

}
