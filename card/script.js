document.addEventListener("DOMContentLoaded", function () {
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbwI1NSdEscXQCVmAVV3RxQxVVIwXxbUYJHo7e52p0US8t7ueFYXoJZOvMSFsrFPAbzI3A/exec'; // Replace with your web app URL.

    let originalCards; // Store a copy of the original cards.

    fetch(webAppUrl + '?action=getCards')
        .then(response => response.json())
        .then(data => {
            originalCards = data.cards.slice(); // Store a copy of the original cards.

            const cardContainer = document.getElementById("cardContainer");
            const searchInput = document.getElementById("searchInput");

            searchInput.addEventListener("input", () => {
                const searchValue = searchInput.value.toLowerCase();
                cardContainer.innerHTML = ""; // Clear the container.

                // Filter the cards based on the search input.
                const filteredCards = originalCards.filter(card => card.Text.toLowerCase().includes(searchValue));

                if (filteredCards.length === 0) {
                    // If no results are found, display a message.
                    cardContainer.innerHTML = "No results found.";
                } else {
                    // Display the filtered cards.
                    filteredCards.forEach(card => {
                        cardContainer.appendChild(createCardElement(card));
                    });
                }
            });

            originalCards.forEach(card => {
                cardContainer.appendChild(createCardElement(card));
            });
        });
});

function createCardElement(card) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    
    const cardImage = document.createElement("img");
    cardImage.src = card['Image URL']; // Use the correct key from your JSON data.
    cardDiv.appendChild(cardImage);

    const cardText = document.createElement("p");
    cardText.textContent = card.Text; // Use the correct key from your JSON data.
    cardDiv.appendChild(cardText);

    const cardLink = document.createElement("a");
    cardLink.href = card.URL; // Use the correct key from your JSON data.
    cardLink.textContent = "Read More";
    cardDiv.appendChild(cardLink);

    return cardDiv;
}
