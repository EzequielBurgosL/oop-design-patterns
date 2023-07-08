import {
  BankAccountApplication,
  Manager,
  Supervisor,
  TransactionRequest,
} from '.';

describe('Account holder transaction application', () => {
  let accountHolder1;
  let accountHolder2;
  let accountHolder3;

  beforeEach(() => {
    accountHolder1 = new Manager('John');
    accountHolder2 = new Supervisor('Alice');
    accountHolder3 = new Manager('Emma');

    accountHolder1.setNextAccountHolder(accountHolder2);
    accountHolder2.setNextAccountHolder(accountHolder3);
  });

  describe('processTransaction', () => {
    test('should approve the transaction', () => {
      const transaction = new TransactionRequest(900, 'Payment');

      const app = new BankAccountApplication(accountHolder1);
      const isApproved = app.processTransaction(transaction);

      expect(isApproved).toBe(true);
    });

    test('should reject the transaction', () => {
      const transaction = new TransactionRequest(1500, 'Payment');

      const app = new BankAccountApplication(accountHolder1);
      const isApproved = app.processTransaction(transaction);

      expect(isApproved).toBe(false);
    });
  });
});
