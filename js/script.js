
console.log("loaded Script");


document.getElementById("contactForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length < 3){
        alert("Name must contain at least 3 characters.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return;
    }

    if(message.length < 10){
        alert("Message must contain at least 10 characters.");
        return;
    }

    alert("Message sent successfully!");
});

document.getElementById("enquiryForm")?.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name.length < 3){
        alert("Name must contain at least 3 characters.");
        return;
    }

    if(!emailPattern.test(email)){
        alert("Please enter a valid email.");
        return;
    }

    if(message.length < 10){
        alert("Message must be at least 10 characters.");
        return;
    }

    let response = "";

    if(product.toLowerCase().includes("tekken")){
        response = "Tekken 8 is available. Price: R1299";
    }
    else if(product.toLowerCase().includes("street fighter")){
        response = "Street Fighter 6 is available. Price: R1099";
    }
    else if(product.toLowerCase().includes("mortal kombat")){
        response = "Mortal Kombat 1 is available. Price: R999";
    }
    else{
        response = "Thank you for your enquiry. We will contact you soon.";
    }

    alert(response);
});

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", function(){

        const search = this.value.toLowerCase();

        const cards =
        document.querySelectorAll(".product-card");

        cards.forEach(card => {

            const text =
            card.textContent.toLowerCase();

            card.style.display =
            text.includes(search)
            ? ""
            : "none";

        });

    });

}

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(item => {

    item.addEventListener("click", function(){

        const panel =
        this.nextElementSibling;

        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

    });

});
        
const modal =
document.getElementById("productModal");

const closeModal =
document.getElementById("closeModal");

document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", () => {

        const title =
        card.querySelector("h3").innerText;

        document.getElementById("modalTitle")
        .innerText = title;

        document.getElementById("modalInfo")
        .innerText =
        "Detailed information about " +
        title +
        ". Contact CTB Games for pricing and availability.";

        modal.style.display = "block";

    });

});

closeModal?.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

});

