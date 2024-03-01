const form  = document.getElementById("form");

form.addEventListener("submit", function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    let Object = {};
    formData.forEach((value,key)=> {
        Object[key] = value;
    })
})

let json = JSON.stringify(Object);

fetch("https://api.web3forms.com/submit", {
    method: 'POST',
    headers:{
        "Content-Type":
        "application/json",
    Accept:"application/json"
    },
    body:json
})
.then(async (Response) => {
    let json = await Response.json();
    if (Response.status == 200){
        console.log("success")
    } else{
        console.log(Response)
    }
})
