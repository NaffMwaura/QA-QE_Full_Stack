const user = {
    id: "USER-123456",
    name: {
        first: "Alice",
        last: "Liddell"
    },
    email: "alice@example.com",
    address: {
        shipping: {
            street: "123 Rabbit Hole",
            city: "Wonderland",
            state: "Fantasy",
            postalCode: "12345",
            country: "WL"
        },
        billing: {
            street: "456 Mad Hatter Lane",
            city: "Tea Party",
            state: "Fantasy",
            postalCode: "67890",
            country: "WL"
        }
    },
    payment: {
        total: "100.00",
        currency: "USD",
        details: {
            subtotal: "75.00",
            tax: "15.00",
            shipping: "10.00"
        },
        transactions: [
            {
                id: "TXN-123", amount: "50.00", description: "Magic Potion"
            },
            {
                id: "TXN-456", amount: "50.00", description: "Enchanted Sword"
            }
        ]
    }
};


//Destructure
const {
    id,
    name: { first, last },
    email,
    address: {

        shipping: { street: shippingStreet, city: shippingCity, state: shippingState, postalCode: shippingPostalCode, country: shippingCountry },
        billing: { street: billingStreet, city: billingCity, state: billingState, postalCode: billingPostalCode, country: billingCountry }
    },
    payment: {

        total,
        currency,
        details: { subtotal, tax, shipping },
        transactions
    }

} = user


window.onload = function () {


    document.getElementById("personal-info").innerHTML = `
    
    <h2>My name is: ${first} ${last}</h2>
    <p> Email: ${email} </p>

    `
        ;

    document.getElementById("shipping-address").innerHTML = `
    
    <h2> Shipping Address </h2>
    <p> ${shippingStreet} ${shippingCity} ${shippingState} ${shippingPostalCode} ${shippingCountry} </p>
    `
        ;
    document.getElementById("billing-address").innerHTML = `

    <h2> Billing Address </h2>
    <p> ${billingStreet} ${billingCity} ${billingState} ${billingPostalCode} ${billingCountry}</p>

    
    `
        ;



    document.getElementById("transactions").innerHTML = ` 
        <h2>Transactions</h2>
        <ul> 
            ${transactions.map(txn => `<li>${txn.description}: $${txn.amount}</li>`).join('')}
        </ul>
        <p><strong>Total Payment:</strong> $${total} ${currency}</p>
    `;


}