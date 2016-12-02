// Implement the same functionalities as in tasks B and C. Instead of using XMLHttpRequest, use fetch-class.
var showImages = function(arr) {
        // Create a loop which builds the following HTML from every image:
        for (var i = 0; i < arr.length; i++) {
            /*
            <li>
                <figure>
                    <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
                    <figcaption>
                        <h3>Title</h3>
                    </figcaption>
                </figure>
            </li>
            */
            // Make the HTML elements by using createElement-method and
            // add the attributes by using setAttribute method or element.attribute syntax.
            // Nest the elements with appendChild-method.
            var title = document.createTextNode(arr[i].mediaTitle);
            var h3 = document.createElement('h3');
            h3.appendChild(title);

            var figcaption = document.createElement('figcaption');
            figcaption.appendChild(h3);

            var img = document.createElement('img');
            img.setAttribute('src', 'img/thumbs/' + arr[i].mediaThumb)
            var a = document.createElement('a');
            a.setAttribute('href', 'img/original/' + arr[i].mediaUrl);
            a.appendChild(img);

            var figure = document.createElement('figure');
            figure.appendChild(a);
            figure.appendChild(figcaption);

            var li = document.createElement('li');
            li.appendChild(figure);

            // Finally place the elements into <ul> element to print them to the HTML page
            var ul = document.querySelector('ul');
            ul.appendChild(li);
        } // end for
    } // end if
    // Function ends.
}

fetch('images.json').then(function(response) {
    // Convert to JSON
    return response.json();
}).then(function(j) {
    // Yay, `j` is a JavaScript object
    showImages(j);
});