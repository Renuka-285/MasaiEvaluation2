function createWallet() {
    let balance = 0;   

    return {
        addMoney: function(amount) {
            balance += amount;
            console.log(amount + " added.");
        },

        checkBalance: function() {
            console.log("Current Balance: " + balance);
        }
    };
}

let myWallet = createWallet();

myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  
