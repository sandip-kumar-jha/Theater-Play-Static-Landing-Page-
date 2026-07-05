// =============================
// ELEMENTS
// =============================

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const phoneInput = document.getElementById("phone");

const messageInput = document.getElementById("message");

const loading = document.getElementById("loading");

const bookBtn = document.getElementById("bookBtn");



// =============================
// XSS SANITIZE
// =============================

function sanitize(text){

    return text
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .trim();

}



// =============================
// VALIDATION
// =============================

function validate(){

    let valid = true;

    const inputs = [
        nameInput,
        emailInput,
        phoneInput,
        messageInput
    ];

    inputs.forEach(input=>{

        input.classList.remove("error");

        if(input.value.trim()===""){

            input.classList.add("error");

            valid=false;

        }

    });

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(
        !emailPattern.test(emailInput.value.trim())
    ){

        emailInput.classList.add("error");

        valid=false;

    }

    return valid;

}



// =============================
// CONTACT FORM
// =============================

form.addEventListener("submit",function(e){

    e.preventDefault();

    if(!validate()){

        alert("Please fill all required fields correctly.");

        return;

    }

    loading.textContent="Loading...";

    const data={

        name:sanitize(nameInput.value),

        email:sanitize(emailInput.value),

        phone:sanitize(phoneInput.value),

        message:sanitize(messageInput.value)

    };

    setTimeout(()=>{

        loading.textContent="";

        console.log(
            "[Analytics] User interacted with Static Landing Page"
        );

        console.log(data);

        alert("Form submitted successfully!");

        form.reset();

    },2000);

});



// =============================
// BOOK BUTTON
// =============================

bookBtn.addEventListener("click",()=>{

    console.log(
        "[Analytics] User interacted with Static Landing Page"
    );

    alert("Thank you for your interest! Booking service will be available soon.");

});