// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const showImages = () => {
  fetch('images.json', {
    method: 'get'
  }).then(res => {
    return res.json()
  }).then(json => {
    json.forEach((value) => {
      let li = document.createElement('li')
      let figure = document.createElement('figure')

      let a = document.createElement('a')
      a.href = `img/original/${value.mediaUrl}`

      let img = document.createElement('img')
      img.src = `img/thumbs/${value.mediaThumb}`

      a.appendChild(img)

      figure.appendChild(a)

      let figcaption = document.createElement('figcaption')

      let h3 = document.createElement('h3')
      let t = document.createTextNode(value.mediaTitle)
      h3.appendChild(t)

      figcaption.appendChild(h3)

      figure.appendChild(figcaption)

      li.appendChild(figure)
      document.querySelector('ul').appendChild(li)
    })
  }).catch(err => {
    console.log(err)
  })
}
