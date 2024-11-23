// Fruit details data
const fruits = {
    apple: {
        name: "Apple",
        description: "Apples are sweet, crunchy, and delicious fruits that are grown on apple trees. They're high in fiber and vitamin C.",
        image: "images/apple.jpg"
    },
    banana: {
        name: "Banana",
        description: "Bananas are soft, sweet fruits that are high in potassium and provide a quick energy boost. They are popular in smoothies.",
        image: "images/banana.jpg"
    },
    orange: {
        name: "Orange",
        description: "Oranges are citrus fruits known for their tangy taste and high vitamin C content. They help boost immunity and skin health.",
        image: "images/orange.jpg"
    },
    mango: {
        name: "Mango",
        description: "Mangoes are tropical fruits with a sweet and tangy flavor. They are rich in vitamins A, C, and E.",
        image: "images/mango.jpg"
    }
};

// Function to display fruit details
function showDetails(fruit) {
    const fruitDetails = fruits[fruit];
    const detailsContainer = document.getElementById("details-content");

    if (fruitDetails) {
        detailsContainer.innerHTML = `
            <img src="${fruitDetails.image}" alt="${fruitDetails.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 10px;">
            <h3>${fruitDetails.name}</h3>
            <p>${fruitDetails.description}</p>
        `;
    } else {
        detailsContainer.innerHTML = "<p>Fruit details not found.</p>";
    }
}
