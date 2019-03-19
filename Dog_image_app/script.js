'use strict';

var loadimage = function() {
    var request = new XMLHttpRequest();
    request.open("get","https://dog.ceo/api/breeds/image/random");
    request.send();

    request.onreadystatechange = function()  {
        if(request.readyState == 4 && request.status == 200) {
            var data = JSON.parse(request.responseText);
            var url = data.message;
            if(!url) {
                alert("No dog has found");
                return;
            }
            var img = document.createElement("img");
            img.src = url;

            var section = document.getElementById("imagesection");
            section.innerText ="";
            section.append(img);
        }
    };
};


var loadbutton = document.getElementById("loadbutton");
loadbutton.addEventListener("click" , loadimage);