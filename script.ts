class Account {
  private userName: string;
  public _balance: number = 500.0;

  constructor(userName: string) {
    this.userName = userName;
  }

  get balance() {
    return this._balance;
  }
}

class Transaction {
  protected account: Account;
  protected amount: number;

  constructor(account: Account, amount: number) {
    this.account = account;
    this.amount = amount;
  }

  get value() {
    return this.amount;
  }

  commit() {
    this.account._balance += this.value;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {}

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

console.log(
  'Balance:',
  myAccount.balance,
  `(correct output: ${500 - 50.25 - 9.99})`,
);

const t3 = new Deposit(myAccount, 120.0);
t3.commit();
// console.log('Transaction 3:', t3);

console.log(
  'Balance:',
  myAccount.balance,
  `(correct output: ${500 - 50.25 - 9.99 + 120})`,
);
