function fetchUser() {

    fetch("https://randomuser.me/api/?results=3")
        .then((res) => res.json())
        .then((data) => {

            const container = document.querySelector(".users");
            container.innerHTML = ""; // clear ONCE

            data.results.forEach(function (user) {

                const card = document.createElement("div");
                card.className = "bg-white rounded-2xl shadow-lg p-6 w-80 text-center";

                // Image
                const img = document.createElement("img");
                img.src = user.picture.medium;
                img.alt = "User Image";
                img.className =
                    "w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200";

                // Name
                const name = document.createElement("h2");
                name.className = "text-xl font-semibold text-gray-800";
                name.textContent = user.name.first + " " + user.name.last;

                // Email
                const email = document.createElement("p");
                email.className = "text-gray-500 text-sm";
                email.textContent = user.email;

                // Append
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(email);

                container.appendChild(card);
            });
        })
        .catch((err) => {
            console.log("Error:", err);
        });
}

// Initial call
fetchUser();

// Button click
document.querySelector("#btn").addEventListener("click", fetchUser);