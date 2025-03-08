const token = '7834811132:AAEKgHVku8Sm6-pTJW0ZcIsAWpIXh8e58Ic';  // Token de tu bot
const chatId = '1571429527';  // Tu Chat ID

function sendTelegramMessage(message, file) {
    const formData = new FormData();
    formData.append('chat_id', chatId);
    formData.append('photo', file);  // Archivo del comprobante
    formData.append('caption', message);  // Mensaje con la información del pago
    formData.append('parse_mode', 'Markdown'); // Permitir formato en el mensaje

    // Enviar el mensaje con la imagen del comprobante a Telegram
    fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Mensaje e imagen enviados correctamente a Telegram');
        } else {
            console.error('Error al enviar el mensaje:', data);
        }
    })
    .catch(error => {
        console.error('Error al enviar el mensaje a Telegram:', error);
    });
}

document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedProductId = document.getElementById('product-select').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const receipt = document.getElementById('receipt').files[0];  // El archivo del comprobante

    if (!name || !email || !phone || !receipt || !selectedProductId) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Encontrar el producto seleccionado
    const selectedProduct = products.find(product => product.id == selectedProductId);
    
    const message = `🧾 *Nuevo Pago Registrado* 🧾\n
👤 *Cliente:* ${name}\n
📧 *Correo:* ${email}\n
📞 *Teléfono:* ${phone}\n
🛒 *Producto:* ${selectedProduct.name}\n
💰 *Precio:* $${selectedProduct.prices[1]}\n
📦 *Cantidad:* 1\n
✅ *Estado:* Pago confirmado`;

    // Enviar el mensaje con el comprobante a Telegram
    sendTelegramMessage(message, receipt);
});
