class Bank {
    constructor(account_type, amount){
        this.account_type = account_type ;
        this.amount = amount;                
    }

    

    Deposit(deposit_amount){
      this.amount += deposit_amount
    }

    Withdraw(withdraw_amount){
       this.amount = this.amount -= withdraw_amount;
         
        if(this.amount <= 0){
          console.log("no more money in savings")
        }
        
    }

    
   
}


class BankOfAmerica extends Bank{
    constructor(account_type, amount){
        super(account_type, amount);
    
    }
}








const Hosea_account = new BankOfAmerica("checking", 200);
const Ben_account = new BankOfAmerica("Savings", 300);
Hosea_account.Deposit(20);
Ben_account.Withdraw(400);

console.log(Hosea_account);
console.log(Ben_account)

