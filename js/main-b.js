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
*/
// Filename.jpg and Title values are fetched from the JSON object.
// Add the above HTML to the 'output' variable.
// After the loop print the HTML (output) into <ul> element.
// Function ends.

// Open XMLHttpRequest connection to load images.json, use get method.
// When ready state changes, call showImages function.
// Send XMLHttpRequest.