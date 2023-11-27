let orderList = [];
let orderDetails = {
    'Egg Sandwich': {price: 35000, quantity: 0},
    'Ham Burger': {price: 28800, quantity: 0},
    'Green Apple Lemonade': {price: 17800, quantity: 0},
    'Ice Lemon Masala': {price: 15000, quantity: 0},
    'Mushroom Cheese': {price: 35888, quantity: 0},
    'Chicken Fajita': {price: 25664, quantity: 0},
    'Orange Soda': {price: 14500, quantity: 0},
    'Grapes Soda': {price: 14500, quantity: 0},
};

let buttonsHTML = '';
for (let item in orderDetails) {
    buttonsHTML += `<button onclick="addToOrder('${item}')">Add ${item}</button>`;
}
document.getElementById('buttons').innerHTML = buttonsHTML;

function addToOrder(item) {
    orderDetails[item].quantity++;
    orderList.push(item);
    updateOrderList();
}

function updateOrderList() {
    let orderHTML = '';
    let total = 0;
    for (let i = 0; i < orderList.length; i++) {
        let item = orderList[i];
        orderHTML += `<p>${item}</p>`;
        total += orderDetails[item].price;
    }
    document.getElementById('order').innerHTML = orderHTML;
    document.getElementById('total').textContent = '₹' + total.toFixed(2);
}