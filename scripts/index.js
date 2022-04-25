// Store the wallet amount to your local storage with key "amount"
var wallet=document.createElement("h1");
wallet.innerText= localStorage.getItem("amount") || 0;
document.querySelector("#navbar").append(wallet)
const addToWallet=()=>{
    
    
    var amount=document.querySelector("#amount").value ;
     
      
    
       wallet.innerText=Number(wallet.innerText)+Number(amount);
   
    localStorage.setItem("amount",wallet.innerText)
    
}