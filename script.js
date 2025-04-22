<script>
    // Quick view functionality
    document.querySelectorAll('.quick-view').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`Quick view of: ${productName}\n(Full product details would show here)`);
        });
    });
    
    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.current-price').textContent;
            
            // Visual feedback
            button.textContent = 'Added!';
            button.style.backgroundColor = '#2ed573';
            
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.style.backgroundColor = '#008CBA';
            }, 2000);
            
            console.log(`Added ${productName} (${productPrice}) to cart`);
        });
    });
    
    // Product card click effect
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            // This would normally navigate to product detail page
            console.log('Navigating to product detail page');
        });
    });
</script>