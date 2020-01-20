$.ajax({
    url: apiUrl,
    success: function(json) {
        alert("Success", json);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       alert(textStatus, errorThrown);
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("Authorization", "Basic " + btoa(myuser + ":" + mypwd));
    },
    type: 'GET',
    contentType: 'json',
});


$.get({
    url: apiUrl + encodeURI(input)"&limit" + articlesLimit,
    beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", "Basic " + btoa(myuser + ":" + mypwd)),
    },
    success function(data)
    });
    url: apiUrl + encodeURI(input) +"&limit" + articlesLimit,
    const articlesLimit = $("#articlesLimit").val();


    _______________
    $(post)
    .append("<p class='article__title'>" + data.documents[i].title + "<p>")
    .append("<br></br>")
    .append("category: " + data.documents[i].category).addClass("article__category")
    .append("<br></br>")
    .append("Content: " + data.documents[i].content)
    .append("<a href=" + data.documents[i].url + ">" + "Go To the article." + "</a>")
    .append("<br></br>")
    .append("<br></br>")


    +++++++++++++


    <!DOCTYPE html>

<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="main.css">
    <title>newsPaperApp</title>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="index.js"></script>
  
</head>


<body>

    <!-- Login Section-->
    <section id="loginSection" class="loginSection">

        <div class="imgLogoAvatar">
            <img src="/images/logo.png" alt="Avatar" class="Avatar" id="Avatar">
        </div>

        <div class="loginContainer">

            <p class='errorMessage' id='errorMessage'>Eingabe falsch</p>

            <label id="unameL" for="uname"><b>UserName</b></label>
            <input type="text" placeholder="Enter your username ..." name="uname" id="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter your user password ..." name="psw" id="psw" required>
            <button class="loginButton loginButton-primary loginButton-block loginButton-large" id="loginButton"><b>Login</b></button>
        </div>


        </article>

    </section>



    <!-- News Section-->

    <section id="newsSection" class="newsSection">
        <div class="header">
            <img src="/images/logo.png" alt="hlogo" class="hlogo">
            <p class="welcomet">WELCOME</p>

                <div id="searchdiv" class="searchdiv">
            <!-- Search form -->
            <input class="inputTxt" id="inputTxt" type="text" name="s" placeholder="Search..." required>
            <select name="articlesLimit" id="articlesLimit" class="articlesLimit">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option selected="seected">5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>
            <button class="goApi goApi-primary goApi-block goApi-large" id="goApi"><b>search</b></button>
        </div>

        </div>



        <!-- the result of the search will be rendered inside this div -->
        <div id="result" class="result"></div>


        <article class="resultsar" id="resultsar">
        </article>

</body>
<footer>
</footer>

</html>