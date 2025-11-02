const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const mess = document.getElementById("message");

function sendEmail() {

    const form = document.querySelector("form");
    const fullName = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const gender = document.getElementById("gender");
    const mess = document.getElementById("message");





    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "olaoyepm@gmail.com",
    Password : "43BCDC7B3A03F20F5D4B448C5B02EED4A529",
    To : 'olaoyepm@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact From Enquiry",
    Body : "name" + document.getElementById("name").value
           + "email" + document.getElementById("email").value
           + "phone" + document.getElementById("phone").value
           + "gender" + document.getElementById("gender").value
           + "message" + document.getElementById("message").value,

    }).then(
        message => {
            if (message == "OK"){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success" 
                });
            }

                alert("messade sent successfuly")
        }
    );
}
   

function checkInputs(){
    var item = document.querySelectorAll("item")
    

    for (var item of item){
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if(item.value != "") {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    

    //Email.send(); 
});
