// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// wallet part

const wallet=localStorage.getItem("amount");

let walletValue=document.createElement("h1");
walletValue.innerText=wallet;

document.querySelector("#navbar").append(walletValue);

// movies part
// http://www.omdbapi.com/?t=avengers
// api key=aaf7fa02

var id;

const searchMovie=async()=>{
     const query=document.querySelector("#search").value ;
    const url=`https://www.omdbapi.com/?s=${query}&apikey=aaf7fa02`;

    var res=await fetch(url);
    var data= await res.json();
    var movies=data.Search;
    return movies;
    // display(movies);
    // console.log(data.Search);

}

const display=(data)=>{
    if(data==undefined)
    return false;

    document.querySelector("#movies").innerHTML=null;
    data.map(({Poster,Title})=>{
       
        var div=document.createElement("div");

        var image=document.createElement("img");
        image.src=Poster;

        var name=document.createElement("h5");
        name.innerText="Name "+Title;

        var btn=document.createElement("button");
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now")
        btn.style.display="block"

        var obj={
            Poster,
            Title,
        }
        btn.addEventListener("click",function(){
            bookNow(obj);
        })

        div.append(image,name,btn);

        document.querySelector("#movies").append(div);


    })
}


const bookNow=(x)=>{
    localStorage.setItem("movie",JSON.stringify(x));
    window.location.href="checkout.html"
}

async function main(){
   const data=await searchMovie();
   display(data);
}

// debounce part

function debounce(func,delay){
   if(id){  
    clearInterval(id);
   }

   id= setTimeout(function(){
        func();
    },delay)
}