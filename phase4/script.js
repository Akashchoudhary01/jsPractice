//module pattern
//IIFE : - is used to create private variable

let bank = (function(){
    let accountBalance = 1200000;

    function checkBalance(){
        console.log(accountBalance);
    }

    function depositBalance(val){
        accountBalance += val;
        console.log(" deposite successfull Available balance "+ accountBalance);
    }
    function withdraw(val){
        if(val<= accountBalance){

            accountBalance -=val;
            console.log(" Withdraw successfull Available balance "+ accountBalance);
        }else{
            console.log("Your Account have not that much balance");
            
        }
        
    }

    return {
        checkBalance,
        depositBalance,
        withdraw
    }
})();

bank.checkBalance();


