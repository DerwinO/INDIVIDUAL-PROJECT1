const students = [
{
  id: 1,
  name: "Harry Potter",
  talent: "Flying",
  class: "Gryffindor",
  imageUrl: "https://cdn.pixabay.com/photo/2019/03/24/12/19/harry-potter-4077473_1280.png"
},
{
  id: 2,
  name: "Hermione Granger",
  talent: "WitchCraft",
  class: "Gryffindor",
  imageUrl: "https://cdn.pixabay.com/photo/2019/07/18/12/24/hermione-granger-4346324_1280.jpg"
},
{
  id: 3,
  name: "Draco Malfoy",
  talent: "Occlumency",
  class: "Slytherin",
  imageUrl: "https://cdn.pixabay.com/photo/2021/12/16/18/34/draco-malfoy-6875025_1280.png"
},
{
  id: 4,
  name: "Ron Weasley",
  talent: "Comedian",
  class: "Gryffindor", 
  imageUrl: "https://img.freepik.com/premium-vector/ron-weasley-vector-illustration-cartoon_969863-945.jpg?w=900"
},
{
  id: 5,
  name: "Luna Lovegood",
  talent: "Wit",
  class: "Ravenclaw",
  imageUrl: "https://cdn.pixabay.com/photo/2021/02/06/00/05/moon-5986386_1280.png"
},
{
  id: 6,
  name: "Ginny Weasley",
  talent: "Quidditch",
  class: "Ravenclaw",
  imageUrl: "https://64.media.tumblr.com/5b843de0b36c9385c3b06d9fde0b06f0/d38051ad49befa96-84/s1280x1920/60a2bffe0e7acc11d093d7dff7da16531fc9115e.jpg"
},
{
  id: 7,
  name: "Dean Thomas",
  talent: "Wizard",
  class: "Ravenclaw",
  imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/7crsyiIlJ6O24AUMGoWko/c2cded6b842959b7e5ed6e0c270de746/DeanThomas_WB_F5_DeanThomasLeaningOnChair_Promo_080615_Port.jpg?w=768&q=70&fm=webp"
},
{
  id: 8,
  name: "Newton Scamander",
  talent: "Magizoologist",
  class: "Slytherin",
  imageUrl: "https://cdna.artstation.com/p/marketplace/printed_product_covers/000/190/676/art_print_big/file.jpg?1688476346"
},
{
  id: 9,
  name: "Cedric Diggory",
  talent: "Wizard",
  class: "Hufflepuff",
  imageUrl: "https://media.harrypotterfanzone.com/cedric-diggory-goblet-of-fire-portrait-600x0-c-default.jpg"
},
{
  id: 10,
  name: "Pansy Parkinson",
  talent: "Witchcraft",
  class: "Hufflepuff",
  imageUrl: "https://images.nightcafe.studio/jobs/ikKZrWKS76IbvYRMR6XJ/ikKZrWKS76IbvYRMR6XJ--1--oc2hi.jpg?tr=w-1080,c-at_max"
},
];

const voldyStudents = [];

const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

const talents = ["Witchcraft", "Wizard", "Occlumency", "Quidditch"];



//ForEach loop to sort through array
//students.forEach(student => console.log(student.name));



//render to dom utility function

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};




//get the student cards on the DOM

const cardsOnDom = (students) => {
  let domString = "";
  students.forEach((student) => {
    domString += `<div class="card style="width: 18rem;">
    <class="card-img-top" alt="...">
   <div class="card-body">
   <img src=${student.imageUrl} class="card-img-top">
   <h5 class="card-title">${student.name}</h5>
   <p class ="card-text">${student.talent}</p>
   <p class = "card-text">${student.class}</p>
     <a href="#" class="btn btn-primary" id="expel-btn--${student.id}">Expel</a>
   </div>
 </div>`;
  })
  renderToDom("#studentCards", domString); 
  }
  


//target House Buttons on the DOM

const filterButtons = () => {
  let domString =`<button type="button" class="btn" id="ravenclaw-btn">Ravenclaw</button>
<button type="button" class="btn" id="hufflepuff-btn">Hufflepuff</button>
<button type="button" class="btn" id="slytherin-btn">Slytherin</button>
<button type="button" class="btn" id="gryffindor-btn">Gryffindor</button>
<button type="button" class="btn" id="all-btn">All</button>`
renderToDom("#houseButtons", domString)
}



//submit form
 
const formOnDom = () => {
const domString = 

`<div class="mb-3" id="submitForm">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter First Year's name</label>
    <input type="text" id="name" aria-label="name" required>
  </div>
  <button type="submit" class="btn btn-primary">Sort</button>`
  renderToDom("#submitForm", domString)
}
  

  //Event Listener for Get Started Button
const sortButton = document.querySelector("#sortButton");

sortButton.addEventListener("click", formOnDom);






//create new object
const createNewStudent = () => {
  //create randomizer 
  const sortType = {
    id: students.length + 1,
    name: document.querySelector("#name").value,
    talent: talents[Math.floor(Math.random() *5)],
    class: houses[Math.floor(Math.random() * 5)]
  };
  
  students.push(sortType);
  cardsOnDom(students);
}


//target House buttons on the DOM
const houseButtons = document.querySelector("#houseButtons");
// event listeners with filters
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("ravenclaw-btn")) {
    const filterRavenclaw = students.filter((student) => student.class === "Ravenclaw");
    cardsOnDom(filterRavenclaw);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("hufflepuff-btn")) {
    const filterHufflepuff = students.filter((student) => student.class === "Hufflepuff");
    cardsOnDom(filterHufflepuff);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("slytherin-btn")) {
    const filterSlytherin = students.filter((student) => student.class === "Slytherin");
    cardsOnDom(filterSlytherin);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("gryffindor-btn")) {
    const filterGryffindor = students.filter((student) => student.class === "Gryffindor");
    cardsOnDom(filterGryffindor);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("all-btn")) {
    cardsOnDom(students);
  };
});



const studentCards = document.querySelector ("#studentCards");



//Voldy Army Card and filter for expelled students
const voldyCard = () => {
  let domString = "";
  //console.log(voldyStudents)
  voldyStudents.map((student) => {
    console.log("student", student[0])
    domString +=
  `<div class="card" style="width: 18rem;">
    <img src="https://cdn.pixabay.com/photo/2021/12/14/13/36/fantasy-6870524_960_720.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h1 class="card-text">${student.name}  Welcome to the Dark Side!!</h1>
    </div>
  </div>`;
  })
  renderToDom("#voldysArmy", domString)
  
  };

  //expel button event listener and actions

  studentCards.addEventListener("click", (e) => {
    if (e.target.id.includes("expel-btn")) {
      const [ ,id] = e.target.id.split("--");
      const index = students.findIndex(e => e.id === Number(id));
      cardsOnDom(students);
      const voldysArmy = students.splice(1, 1, index)
      console.log(voldysArmy)
      voldyStudents.push(voldysArmy)
      voldyCard(voldyStudents)
    };
  });


//events for startApp function at the end

const events = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); //ON EVERY FORM
    createNewStudent(e);
    filterButtons()
    form.reset();
  });
}


const startApp = () => {
  events();
}

startApp();
