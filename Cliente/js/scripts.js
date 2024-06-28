let carrito = [];

function changeQuantity(button, delta) {
    const quantityElement = button.parentElement.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(0, quantity + delta); // No permitir cantidades negativas
    quantityElement.textContent = quantity;
}

function verCarrito() {
    carrito = [];
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        const name = item.querySelector('h3').textContent;
        const priceText = item.querySelector('p').textContent.trim();
        const price = parseInt(priceText.replace('$', '').replace(' CLP', '').replace('.', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        if (quantity > 0) {
            carrito.push({ nombre: name, precio: price, cantidad: quantity });
        }
    });

    if (carrito.length === 0) {
        alert('El carrito está vacío');
    } else {
        let resumen = 'Resumen del Carrito:\n';
        let total = 0;
        carrito.forEach(item => {
            resumen += `${item.nombre} x ${item.cantidad} - $${item.precio * item.cantidad} CLP\n`;
            total += item.precio * item.cantidad;
        });
        resumen += `Total: $${total} CLP`;
        alert(resumen);
        
        // Guardar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        // Redirigir a la página de resumen de compra
        window.location.href = 'carrito.html';
    }
}

