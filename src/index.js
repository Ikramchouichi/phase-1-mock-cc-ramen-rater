

function getAllRamen(){
  fetch("http://localhost:3000/ramens")
      .then((resp) => resp.json())
      .then(ramen => {
          displayFirstRamenDetails(ramen);
          ramen.forEach(renderRamens);
      });
}




function renderRamens(ramen) {


const ramenMenu = document.querySelector('#ramen-menu')



    const img = document.createElement('img')
    img.src = ramen.image

    ramenMenu.appendChild(img)

    img.addEventListener('click', (e) => handleClick(e))

    function handleClick(e) {
      

        const nameLocation = document.querySelector('.name')
        const imgLocation = document.querySelector('.detail-image')
        const restLocation = document.querySelector('.restaurant')
        const ratingLocation = document.querySelector('#rating-display')
        const commentLocation = document.querySelector('#comment-display')

        nameLocation.innerText = ramen.name
        imgLocation.src = ramen.image
        restLocation.textContent = ramen.restaurant
        ratingLocation.innerText = ramen.rating
        commentLocation.textContent = ramen.comment
    }

  

}

function liatenForSubmit(){
  const form = document.querySelector('#new-ramen')

  form.addEventListener('submit', (e) => handleAddNewRamen(e))
  
}


function EditForm(){


const editForm = document.querySelector('#edit-ramen');
editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newRating = document.querySelector('#new-rating').value;
  const newComment = document.querySelector('#new-comment').value;

  const ratingLocation = document.querySelector('#rating-display');
  const commentLocation = document.querySelector('#comment-display');

  ratingLocation.innerText = newRating;
  commentLocation.textContent = newComment;

  
  
});
  
}




function handleAddNewRamen(e) {
    e.preventDefault()

    const newRamenObj = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value
    }
    console.log(newRamenObj)
    e.target.reset()
    renderRamens(newRamenObj)
  }
  function displayFirstRamenDetails(ramen) {
    if (ramen.length > 0) {
        const firstRamen = ramen[0];
        const nameLocation = document.querySelector('.name');
        const imgLocation = document.querySelector('.detail-image');
        const restLocation = document.querySelector('.restaurant');
        const ratingLocation = document.querySelector('#rating-display');
        const commentLocation = document.querySelector('#comment-display');

        nameLocation.innerText = firstRamen.name;
        imgLocation.src = firstRamen.image;
        restLocation.textContent = firstRamen.restaurant;
        ratingLocation.innerText = firstRamen.rating;
        commentLocation.textContent = firstRamen.comment;
    }
}
  
  function init(){
    getAllRamen()
    liatenForSubmit()
  
  }


  init()




  