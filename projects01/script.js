//sare users show krna
//filter krna har baar input krna pe
//filtered user show krna
const users = [
  {
    username: "tech_guru",
    imageurl: "https://i.pravatar.cc/150?img=1",
    bio: "Passionate about coding and building cool web apps."
  },
  {
    username: "design_queen",
    imageurl: "https://i.pravatar.cc/150?img=2",
    bio: "UI/UX designer who loves clean and minimal designs."
  },
  {
    username: "fitness_freak",
    imageurl: "https://i.pravatar.cc/150?img=3",
    bio: "Gym lover 💪 | Healthy lifestyle advocate."
  },
  {
    username: "travel_with_me",
    imageurl: "https://i.pravatar.cc/150?img=4",
    bio: "Exploring the world one country at a time 🌍"
  },
  {
    username: "foodie_life",
    imageurl: "https://i.pravatar.cc/150?img=5",
    bio: "Food blogger | Street food is love ❤️"
  },
  {
    username: "code_master",
    imageurl: "https://i.pravatar.cc/150?img=6",
    bio: "JavaScript enthusiast | MERN stack developer."
  },
  {
    username: "book_worm",
    imageurl: "https://i.pravatar.cc/150?img=7",
    bio: "Lost in books 📚 | Fiction lover."
  },
  {
    username: "music_vibes",
    imageurl: "https://i.pravatar.cc/150?img=8",
    bio: "Music heals everything 🎧"
  },
  {
    username: "nature_clicks",
    imageurl: "https://i.pravatar.cc/150?img=9",
    bio: "Capturing nature through my lens 🌿"
  },
  {
    username: "startup_mind",
    imageurl: "https://i.pravatar.cc/150?img=10",
    bio: "Entrepreneur | Building something big 🚀"
  }
];

// preprocess (optimization 🔥)
const usersData = users.map(user => ({
    ...user,
    usernameLower: user.username.toLowerCase()
}));

const container = document.querySelector(".container");
const inp = document.querySelector("input");
const h2 = document.querySelector('h2');

// render function (FAST 🚀)
function showuser(arr){
    container.innerHTML = arr.map(user => `
        <div class="card">
            <img src="${user.imageurl}" />
            <div class="content">
                <h1>${user.username}</h1>
                <p>${user.bio}</p>
            </div>
        </div>
    `).join("");
}

// initial render
showuser(usersData);

// filter (optimized)
inp.addEventListener("input", () => {
    const value = inp.value.toLowerCase();

   
    const filtered = usersData.filter(user =>
        user.usernameLower.includes(value)
    );

   // show message if no user found
    if(filtered.length === 0){
        h2.textContent = "No user found";
        // console.log("no user found");
        
    } else {
        h2.textContent = "";
    }

    showuser(filtered);
});