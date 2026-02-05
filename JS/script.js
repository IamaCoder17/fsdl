// Create main card
const card = document.createElement("div");
card.className = "card";

const heading = document.createElement("h2");
heading.innerText = "Find Your Match ❤️";
card.appendChild(heading);

// Helper function to create input fields
function createField(labelText, id) {
    const label = document.createElement("label");
    label.innerText = labelText;

    const input = document.createElement("input");
    input.id = id;

    const error = document.createElement("div");
    error.className = "error";
    error.id = id + "Error";

    card.appendChild(label);
    card.appendChild(input);
    card.appendChild(error);
}

createField("Name", "name");
createField("Email", "email");
createField("Phone Number", "phone");

// Rating
const ratingLabel = document.createElement("label");
ratingLabel.innerText = "Rate Our Platform";
card.appendChild(ratingLabel);

const ratingDiv = document.createElement("div");
ratingDiv.className = "rating";

let selectedRating = 0;

for (let i = 1; i <= 5; i++) {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.onclick = function () {
        selectedRating = i;
        document.querySelectorAll(".rating span").forEach((h, index) => {
            h.classList.toggle("selected", index < i);
        });
    };
    ratingDiv.appendChild(heart);
}

card.appendChild(ratingDiv);

const ratingError = document.createElement("div");
ratingError.className = "error";
ratingError.id = "ratingError";
card.appendChild(ratingError);

// Submit button
const button = document.createElement("button");
button.innerText = "Join Now";

button.onclick = function () {
    let valid = true;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name.length < 3) {
        nameError.innerText = "Minimum 3 characters required";
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerText = "Invalid email";
        valid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.innerText = "Invalid phone number";
        valid = false;
    }

    if (selectedRating === 0) {
        ratingError.innerText = "Please select a rating";
        valid = false;
    }

    if (valid) {
        alert("Profile submitted successfully 💖");
    }
};

card.appendChild(button);
document.body.appendChild(card);
