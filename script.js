document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('product-container');
    
    try {
        const response = await fetch("https://dummyjson.com/products?");
        const data = await response.json();
        data.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('card');
            
            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description.substring(0, 50)}...</p>
                <p class="price">$${product.price}</p>
                <p class="rating">Rating: ${product.rating} / 5</p>
            `;

            container.appendChild(productCard);
    });
    }
    catch (error) {
        console.error(error);
    }
});