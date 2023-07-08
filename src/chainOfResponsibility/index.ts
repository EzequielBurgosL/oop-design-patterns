export class TransactionRequest {
  amount: number;
  description: string;

  constructor(amount: number, description: string) {
    this.amount = amount;
    this.description = description;
  }
}

interface AccountHolder {
  setNextAccountHolder(next: AccountHolder): void;
  processTransaction(transaction: TransactionRequest): boolean;
}

abstract class BaseAccountHolder implements AccountHolder {
  name: string;
  private nextAccountHolder: AccountHolder = null;

  constructor(name: string) {
    this.name = name;
  }

  protected abstract approveTransaction(
    transaction: TransactionRequest,
  ): boolean;

  setNextAccountHolder(next: AccountHolder) {
    this.nextAccountHolder = next;
  }

  processTransaction(transaction: TransactionRequest): boolean {
    const isTransactionApproved = this.approveTransaction(transaction);

    if (isTransactionApproved && this.nextAccountHolder) {
      return this.nextAccountHolder.processTransaction(transaction);
    }

    return isTransactionApproved;
  }
}

export class Manager extends BaseAccountHolder {
  approveTransaction(transaction: TransactionRequest): boolean {
    return transaction.amount < 1000;
  }
}

export class Supervisor extends BaseAccountHolder {
  approveTransaction(transaction: TransactionRequest): boolean {
    return transaction.amount < 5000;
  }
}

export class BankAccountApplication {
  private accountHolder: AccountHolder;

  constructor(accountHolder: AccountHolder) {
    this.accountHolder = accountHolder;
  }

  processTransaction(transaction: TransactionRequest) {
    return this.accountHolder.processTransaction(transaction);
  }
}

// /* Test example */
// const accountHolder1 = new Manager('John');
// const accountHolder2 = new Supervisor('Alice');
// const accountHolder3 = new Manager('Emma');

// accountHolder1.setNextAccountHolder(accountHolder2);
// accountHolder2.setNextAccountHolder(accountHolder3);

// const transaction = new TransactionRequest(1500, 'Payment');

// const app = new Application(accountHolder1);
// console.log('app.main(transaction)', app.processTransaction(transaction));
