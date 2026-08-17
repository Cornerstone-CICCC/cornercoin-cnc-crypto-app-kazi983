"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let balance = 500.0;
class Account {
    userName;
    balance;
    constructor(userName) {
        this.userName = userName;
    }
}
class Withdrawal {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    commit() {
        balance -= this.amount;
    }
}
class Deposit {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    commit() {
        balance += this.amount;
    }
}
/**
 * Test code for Step 0
 */
const t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);
const t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);
console.log('Balance:', balance);
/**
 * Test code for Step 1
 */
const t3 = new Deposit(120.0);
t3.commit();
console.log('Transaction 3:', t3);
console.log('Balance:', balance);
/**
 * Test code for Step 2
 */
const myAccount = new Account('snow-patrol');
console.log('myAccount:', myAccount);
