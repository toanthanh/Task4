// Tee XMLHttpRequest-objekti. Anna sen nimeksi xhr

// Create XMLHttpRequest object. Name it xhr.

// Create function 'showImages' which
// checks that loaded content is ready (readyState and status) and
// then converts the JSON loaded from the server to JavaScript object.
// Inside the fuction create an empty string 'output' and
// create a loop which builds the following HTML from every image: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
// Make the HTML elements by using createElement-method and
// add the attributes by using setAttribute method or element.attribute syntax.
// Nest the elements with appendChild-method.
// Finally place the elements into <ul> element to print them to the HTML page
// Function ends.

// Open XMLHttpRequest connection to load images.json, use get method.
// When ready state changes, call showImages function.
// Send XMLHttpRequest.