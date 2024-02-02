const students = [
{
  id: 1,
  Name: "Harry Potter",
  Talent: "Flying",
  Class: "Gryffindor",
  imageUrl: ""
},
{
  id: 2,
  Name: "Hermione Granger",
  Talent: "WitchCraft",
  Class: "Gryffindor",
  imageUrl: ""
},
{
  id: 3,
  Name: "Draco Malfoy",
  Talent: "Occlumency",
  Class: "Slytherin",
  imageUrl: ""
},
{
  id: 4,
  Name: "Ron Weasley",
  Talent: "Comedian",
  Class: "Gryffindor", 
  imageUrl: ""
},
{
  id: 5,
  Name: "Luna Lovegood",
  Talent: "Wit",
  Class: "Ravenclaw",
  imageUrl: ""
},
{
  id: 6,
  Name: "Ginny Weasley",
  Talent: "Quidditch",
  Class: "Ravenclaw",
  imageUrl: ""
},
{
  id: 7,
  Name: "Dean Thomas",
  Talent: "Wizard",
  Class: "Ravenclaw",
  imageUrl: ""
},
{
  id: 8,
  Name: "Newton Scamander",
  Talent: "Magizoologist",
  Class: "Slytherin",
  imageUrl: ""
},
{
  id: 9,
  Name: "Cedric Diggory",
  Talent: "Wizard",
  Class: "Hufflepuff",
  imageUrl: ""
},
{
  id: 10,
  Name: "Pansy Parkinson",
  Talent: "Witchcraft",
  Class: "Hufflepuff",
  imageUrl: ""
},
];

//ForEach loop to sort through array
students.forEach(student => console.log(student.Name));


//render to dom utility function

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


//get the cards on the DOM

const cardsOnDom = (students) => {
  let domString = "";
  students.forEach((student) => {
    domString += `<div class="card style="width: 18rem;">
  <img src=${student.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title"${student.Name}></h5>
  <p class ="card-text">${student.Talent}</p>
  <p class = "card-text">${student.Class}</p>
    <a href="#" class="btn btn-primary" id="expel-btn" ${student.id}>Expel</a>
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
 
const submitForm = () => {
let domString = 

`<div class="mb-3" id="submitForm">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Enter First Year's Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1">
  </div>
  <button type="submit" class="btn btn-primary">Sort</button>`
  renderToDom("#submitForm", domString)
}
  

  //Event Listener for Get Started Button
const getStartedButton = document.querySelector("#getStarted");

getStartedButton.addEventListener("click", () => {
  submitForm();
  filterButtons();
}); 

const form = document.querySelector("form");

//function that grabs values from the form

  
  // const createNewObject = {
  //   id: students.length + 1,
  //   Name: document.querySelector("#name").value,
  //   Talent: document.querySelector("#talent").value,
  //   Class: document.querySelector("#class").value,
  //   Image: document.querySelector("#image").value
  // }
  //   students.push(createNewObject);
  //   cardsOnDom(students);
  //   form.reset();





//target House buttons on the DOM
const houseButtons = document.querySelector("#houseButtons");
// event listeners with filters
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("ravenclaw-btn")) {
    const filterRavenclaw = students.filter((student) => student.Class === "Ravenclaw");
    cardsOnDom(filterRavenclaw);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("hufflepuff-btn")) {
    const filterHufflepuff = students.filter((student) => student.Class === "Hufflepuff");
    cardsOnDom(filterHufflepuff);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("slytherin-btn")) {
    const filterSlytherin = students.filter((student) => student.Class === "Slytherin");
    cardsOnDom(filterSlytherin);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("gryffindor-btn")) {
    const filterGryffindor = students.filter((student) => student.Class === "Gryffindor");
    cardsOnDom(filterGryffindor);
  };
});
houseButtons.addEventListener("click", (e) => {
  if (e.target.id.includes("all-btn")) {
    cardsOnDom(students);
  };
});

//Voldy Army Card
const voldyCard = () => {
let domString =
`<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Welcome to the Dark Side!!</p>
  </div>
</div>`
renderToDom("#voldysArmy", domString)
}

//expel button
const studentCards = document.querySelector ("#studentCards");

studentCards.addEventListener("click", (e) => {
  if (e.target.id.includes("expel-btn")) {
    const [ ,id] = e.target.id.split("--");
    const index = students.findIndex(e => e.id === Number(id));
    students.splice(index, 1);
    cardsOnDom(students);
    voldyCard()
  };
});
