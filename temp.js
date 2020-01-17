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