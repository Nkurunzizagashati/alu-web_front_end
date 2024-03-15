const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  console.log(`Payment is being processed for item ${itemName}`);
  stock[itemName.toLowerCase()] -= 1;
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log(`Verifying the stock of ${itemName}`);
  const lowerCaseItemName = itemName.toLowerCase();
  if (stock[lowerCaseItemName] && stock[lowerCaseItemName] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

const itemName = prompt(
  "Please enter the item you would like to purchase (Macbook, iPhone):"
);
processOrder(itemName, processPayment, processError);
