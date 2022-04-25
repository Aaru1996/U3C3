// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let wallet=localStorage.getItem("amount");

let walletValue=document.createElement("h1");
walletValue.innerText=wallet;

document.querySelector("#navbar").append(walletValue);

// input data part
function book(){
    var name=document.querySelector("#user_name").value;
    var qty=document.querySelector("#number_of_seats").value;

    var price=Number(qty)*100;
    if(price>wallet)
    {
        alert('Insufficient Balance!');
    }
    else{

        wallet=wallet-price;
        localStorage.setItem("amount",wallet)
        alert("“Booking successful!")
        window.location.reload();
    }
}   


// movie append

// const movie=JSON.parse(localStorage.getItem("movie"));
// var {Poster,Title}=movie;

// var div=document.createElement("div");

// var image=document.createElement("img");
// image.src=Poster;

// var name1=document.createElement("h5");
// name1.innerText="Name "+Title;

//          div.append(image,name1);

//         document.querySelector("#movie").append(div);