let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.renderUi();
    }
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
  },
  addUser: function () {
    this.users.push({
      userName: userName.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });

    //  save to localStorage
    localStorage.setItem("users", JSON.stringify(this.users));
    console.log(this.users);
    form.reset();
    this.renderUi();
  },
  renderUi: function () {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      //main div

      const card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition mb-8";

      //image
      const image = document.createElement("img");
      image.className =
        "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
      image.src = user.photo;
      image.alt = "User Photo";
      card.appendChild(image);

      //userName
      const name = document.createElement("h2");
      name.className = "text-2xl font-bold mb-1 text-center text-blue-700";
      name.textContent = user.userName;
      card.appendChild(name);

      // Role
      const role = document.createElement("p");
      role.className = "text-purple-500 mb-2 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      // Description
      const desc = document.createElement("p");
      desc.className = "text-gray-700 text-center";
      desc.textContent = user.bio;
      card.appendChild(desc);

      //Appending all to main
      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function () {},
};

userManager.init();
