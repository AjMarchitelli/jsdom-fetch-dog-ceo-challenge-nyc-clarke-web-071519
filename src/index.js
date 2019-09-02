document.addEventListener('DOMContentLoaded', function() {

  console.log('%c HI', 'color: firebrick')

  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  fetch(imgUrl)
    .then(response => response.json())
    .then(imageHash => imageHash.message.forEach(imageUrl => {
      
      let newImage = document.createElement("img");
      newImage.setAttribute('src', imageUrl);
      
      let dogDiv = document.querySelector('#dog-image-container')
      dogDiv.appendChild(newImage)
  }))

  fetch(breedUrl)
    .then(response => response.json())
    .then(response => Object.keys(response.message).forEach(breed => {

      let newBreed = document.createElement('li');

      newBreed.innerText = breed;

      let breedList = document.querySelector('#dog-breeds');
      breedList.appendChild(newBreed);

    }))

    let breedUl = document.querySelector('#dog-breeds');
    breedUl.addEventListener('click', function(event) {
      if(event.target.tagName === 'LI') {
        event.target.style.color = "#"+((1<<24)*Math.random()|0).toString(16)
      }
    })

    let dropDown = document.querySelector('#breed-dropdown');
      dropDown.addEventListener('change', function(event) {
        if(event.target.value === 'a') {
          debugger
          console.log(breedUl.innerText)
        }
      })
      

})