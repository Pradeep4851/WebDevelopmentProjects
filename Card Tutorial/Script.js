// Get references to DOM elements
const addCardButton = document.getElementById('add-card-btn');
const cardGroup = document.getElementById('card-group');

addCardButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Get the values from the form inputs
    const imageInput = document.getElementById('newImage');
    const altName = document.getElementById('alt-name').value;
    const heading = document.getElementById('headding').value;
    const titleDescription = document.getElementById('title-description').value;
    const location = document.getElementById('location').value;
    const locationDescription = document.getElementById('location-description').value;
    const wikiURL = document.getElementById('wiki-url').value;
    const imageURL = URL.createObjectURL(imageInput.files[0]);

    const newCard = document.createElement('div');

    newCard.classList.add('card');
    
    newCard.innerHTML = `
        <img src="${imageURL}" alt="${altName}">
        <div class="layer"></div>
        <div class="info">
            <h1>${heading}</h1>
            <p>${titleDescription}</p>
            <h2>Location</h2>
            <p>${location}</p>
            <p>${locationDescription}</p>
            <button>
                <a href="${wikiURL}" target="_blank">Explore</a>
            </button>
        </div>
    `;

    // Insert the new card before the last card in the card group
    if (cardGroup.children.length > 0) {
        cardGroup.insertBefore(newCard, cardGroup.lastElementChild);
    } else {
        cardGroup.appendChild(newCard);
    }

    // Clear the form fields after submission
    document.getElementById('newImage').value = '';
    document.getElementById('alt-name').value = '';
    document.getElementById('headding').value = '';
    document.getElementById('title-description').value = '';
    document.getElementById('location').value = '';
    document.getElementById('location-description').value = '';
    document.getElementById('wiki-url').value = '';

    document.getElementById('add-new-card').style.display = 'none';
    document.getElementById('add-new-card').classList.remove('show');
});

const plusBtn = document.getElementById('add-new');
const closeBtn = document.querySelector('.close');

plusBtn.addEventListener('click', removeShow);
closeBtn.addEventListener('click', removeShow);

function removeShow(){

    const addNewCard = document.getElementById('add-new-card');

    if(addNewCard.classList.contains('show')){
        addNewCard.style.display = 'none';
        addNewCard.classList.remove('show');
    }else{
        addNewCard.classList.add('show');
        addNewCard.style.display = 'block';
    }

}

const exploreBtn = document.querySelector('.explore');

exploreBtn.addEventListener('click', function(){
    alert('i am clicked');
});