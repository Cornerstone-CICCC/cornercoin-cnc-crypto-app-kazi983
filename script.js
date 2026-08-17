"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    userName;
    history = [500.0];
    constructor(userName) {
        this.userName = userName;
    }
    get balance() {
        return this.history.reduce((sum, value) => sum + value, 0);
    }
}
class Transaction {
    account;
    amount;
    constructor(account, amount) {
        this.account = account;
        this.amount = amount;
    }
    get value() {
        return this.amount;
    }
    isAllowed() {
        return this.account.balance + this.value >= 0;
    }
    commit() {
        if (!this.isAllowed()) {
            console.log(`You don't have enough balance (your current balance: ${this.account.balance})`);
            return false;
        }
        this.account.history.push(this.value);
        return true;
    }
}
class Withdrawal extends Transaction {
    get value() {
        return -this.amount;
    }
}
class Deposit extends Transaction {
}
/*************************************
 *
 *  Driver
 *
 *************************************/
const myAccount = new Account('snow-patrol');
const t1 = new Withdrawal(myAccount, 50.25);
t1.commit();
// console.log('Transaction 1:', t1);
console.log('Balance:', myAccount.balance, `(correct output: ${500 - 50.25})`);
const t2 = new Withdrawal(myAccount, 9.99);
t2.commit();
// console.log('Transaction 2:', t2);
console.log('Balance:', myAccount.balance, `(correct output: ${500 - 50.25 - 9.99})`);
const t3 = new Deposit(myAccount, 120.0);
t3.commit();
// console.log('Transaction 3:', t3);
console.log('Balance:', myAccount.balance, `(correct output: ${500 - 50.25 - 9.99 + 120})`);
const t4 = new Withdrawal(myAccount, 600);
t4.commit();
console.log('myAccount :>> ', myAccount);
console.log('Balance   :>> ', myAccount.balance);
