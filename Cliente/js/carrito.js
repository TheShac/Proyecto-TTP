document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const resumenItems = document.getElementById('resumen-items');
    const subtotalAmount = document.getElementById('subtotal-amount');
    const taxAmount = document.getElementById('tax-amount');
    const tipAmount = document.getElementById('tip-amount');
    const totalAmount = document.getElementById('total-amount');
    let subtotal = 0;

    if (carrito.length === 0) {
        resumenItems.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        carrito.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('resumen-item');
            itemElement.innerHTML = `
                <img src="imagenes/${item.nombre.toLowerCase().replace(' ', '_')}.jpg" alt="${item.nombre}">
                <h3>${item.nombre}</h3>
                <p>${item.cantidad} x $${item.precio.toLocaleString('es-CL')} CLP = $${(item.precio * item.cantidad).toLocaleString('es-CL')} CLP</p>
            `;
            resumenItems.appendChild(itemElement);
            subtotal += item.precio * item.cantidad;
        });
        const tax = subtotal * 0.19; // Assuming 19% VAT
        const tip = subtotal * 0.10; // Assuming 10% tip
        const total = subtotal + tax + tip;

        subtotalAmount.textContent = subtotal.toLocaleString('es-CL');
        taxAmount.textContent = tax.toLocaleString('es-CL');
        tipAmount.textContent = tip.toLocaleString('es-CL');
        totalAmount.textContent = total.toLocaleString('es-CL');
    }
});

function ordenar() {
    alert('Orden realizada con éxito');
    // Aquí podrías agregar una redirección o alguna otra acción
}
