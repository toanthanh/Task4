// Create XMLHttpRequest object. Name it xhr.
var xhr = new XMLHttpRequest();

// Create function 'showImages' which
var showImages = function() {
    // checks that loaded content is ready (readyState and status) and
    if (this.readyState == 4 && this.status == 200) {
        // then converts the JSON loaded from the server to JavaScript object.
        var arr = JSON.parse(this.responseText);
        // Inside the fuction create an empty string 'output' and
        var output = '';
        // create a loop which builds HTML from every image
        // Filename.jpg and Title values are fetched from the JSON object.
        for (var i = 0; i < arr.length; i++) {
            // Add the  HTML to the 'output' variable.
            output += '<li>' +
                '<figure>' +
                '<a href="img/original/' + arr[i].mediaUrl + '">' +
                '<img src="img/thumbs/' + arr[i].mediaThumb + '"></a>' +
                '<figcaption>' +
                '<h3>' + arr[i].mediaTitle + '</h3>' +
                '</figcaption>' +
                '</figure>' +
                '</li>';
        }
        // After the loop print the HTML (output) into <ul> element.
        document.querySelector('ul').innerHTML = output;
    }
    // Function ends.
}

// Open XMLHttpRequest connection to load images.html, use get method.
xhr.open("GET", "images.json", true);
// When ready state changes, call showImages function.
xhr.onreadystatechange = showImages;
// Send XMLHttpRequest.
xhr.send();