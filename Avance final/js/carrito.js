document.addEventListener('DOMContentLoaded', () => {
    const resumenItems = document.getElementById('resumen-items');
    const totalAmount = document.getElementById('total-amount');
    let total = 0;

    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('resumen-item');
        itemElement.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>${item.cantidad} x $${item.precio} CLP = $${item.precio * item.cantidad} CLP</p>
        `;
        resumenItems.appendChild(itemElement);
        total += item.precio * item.cantidad;
    });

    totalAmount.textContent = total;

    if (carrito.length === 0) {
        resumenItems.innerHTML = '<p>El carrito está vacío</p>';
    }
});

function ordenar() {
    alert('Orden realizada con éxito');
    // Aquí podrías agregar una redirección o alguna otra acción
}
