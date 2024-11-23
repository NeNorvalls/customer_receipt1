// Step 1: Define the customers (an array of customer names).
const customers = ["John S.", "Emma M.", "Frank T."]; // These are the customers who made purchases.

// Step 2: Define the receipts (an array of items each customer bought).
const receipts = [
  ["eggs", "white bread", "milk"], // Items purchased by John S.
  ["milk", "cheese", "butter", "pancake mix", "flour"], // Items purchased by Emma M.
  ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"], // Items purchased by Frank T.
];

// Step 3: Define the prices of each item.
const prices = {
  eggs: 3.5, // Price of eggs.
  "white bread": 4.5, // Price of white bread.
  milk: 5.99, // Price of milk.
  cheese: 6.5, // Price of cheese.
  butter: 3.45, // Price of butter.
  "pancake mix": 4.5, // Price of pancake mix.
  flour: 5.75, // Price of flour.
  cereal: 4.5, // Price of cereal.
  "whole wheat bread": 6.5, // Price of whole wheat bread.
  vanilla: 8.75, // Price of vanilla.
};

// Step 4: Create a function to set text content in HTML elements based on ID.
function setElementText(id, text) {
  // This function updates the text of an HTML element with the given ID to the provided text.
  document.getElementById(id).innerText = text;
}

// Step 5: Create a function to populate the table with customer data.
function populateTable() {
  // Loop through all customers. The loop runs based on the number of customers.
  for (let i = 0; i < customers.length; i++) {
    // Get the current customer's name using the index `i` from the `customers` array.
    const customer = customers[i];

    // Get the current customer's receipt (items bought) from the `receipts` array.
    const receipt = receipts[i];

    // Initialize an empty string to store the list of items bought by the customer.
    let receipt_list = "";

    // Initialize a variable to keep track of the total price of the receipt.
    let sum = 0;

    // Step 6: Loop through each item in the customer's receipt to calculate the total and list the items.
    for (let j = 0; j < receipt.length; j++) {
      // Get the current item from the receipt.
      const item = receipt[j];

      // Get the price of the current item from the `prices` object.
      const price = prices[item];

      // Add the item to the receipt list, separating each item with a newline (`\n`).
      receipt_list += item + "\n";

      // Add the price of the item to the total sum.
      sum += price;
    }

    // Step 7: Set the customer name in the HTML table. Each customer has a unique ID.
    setElementText("customer" + i.toString(), customer);

    // Step 8: Set the list of items bought by the customer in the HTML table.
    setElementText("receipt" + i.toString(), receipt_list);

    // Step 9: Set the total sum of the receipt in the HTML table.
    setElementText("total" + i.toString(), sum);
  }
}
