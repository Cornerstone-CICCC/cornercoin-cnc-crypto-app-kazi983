class Account {
  private userName: string;
  protected _balance: number = 500.0;

  constructor(userName: string) {
    this.userName = userName;
  }

  get balance() {
    return this._balance;
  }

  withdrawal(amount: number) {
    this._balance -= amount;
  }

  deposit(amount: number) {
    this._balance += amount;
  }
}

class Withdrawal {
  private account: Account;
  private amount: number;

  constructor(account: Account, amount: number) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.withdrawal(this.amount);
  }
}

class Deposit {
  private account: Account;
  private amount: number;

  constructor(account: Account, amount: number) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.deposit(this.amount);
  }
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
