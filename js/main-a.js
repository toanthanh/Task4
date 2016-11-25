// Create XMLHttpRequest object. Name it xhr.
var xhr = new XMLHttpRequest();

// Create function 'showImages' which
var showImages = function() {
    // checks that loaded content is ready (readyState and status) and
    if (this.readyState == 4 && this.status == 200) {
        // then adds the loaded HTML content to <ul> element.
        document.querySelector('ul').innerHTML = this.responseText;
    }

}

// Open XMLHttpRequest connection to load images.html, use get method.
xhr.open("GET", "images.html", true);
// When ready state changes, call showImages function.
xhr.onreadystatechange = showImages;
// Send XMLHttpRequest.
xhr.send();