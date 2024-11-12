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

    // Check if all required fields are filled
    if (!imageURL || !heading || !titleDescription || !location || !locationDescription || !wikiURL) {
        alert("Please fill in all required fields.");
        return;
    }

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

    document.getElementById('hidden').style.display = 'none';
});

// Changing the hidden content property
const plusBtn = document.getElementById('add-new');
const closeBtn = document.querySelector('.close');

plusBtn.addEventListener('click', removeShow);
closeBtn.addEventListener('click', removeShow);

function removeShow(){

    const addNewCard = document.getElementById('hidden');

    if(addNewCard.style.display === 'none'){
        addNewCard.style.display = 'block';
    }else{
        addNewCard.style.display = 'none';
    }

}