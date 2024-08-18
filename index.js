function calculateTotalPrice(quantity = 2, price = 15000000) {
    const totalPrice = quantity * price;
    document.getElementById('totalPriceDisplay').innerText = `Стоимость покупки: ${totalPrice} рублей`;
}