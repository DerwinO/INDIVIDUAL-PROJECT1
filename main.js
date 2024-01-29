const students = [
{
  id: 1,
  Name: "Harry Potter",
  Talent: "Flying", 
  imageUrl: ""
},
{
  id: 2,
  Name: "Hermione Granger",
  Talent: "WitchCraft",
  imageUrl: ""
},
{
  id: 3,
  Name: "Draco Malfoy",
  Talent: "Occlumency",
  imageUrl: ""
},
{
  id: 4,
  Name: "Ron Weasley",
  Talent: "Comedian", 
  imageUrl: ""
},
{
  id: 5,
  Name: "Luna Lovegood",
  Talent: "Wit",
  imageUrl: ""
},
{
  id: 6,
  Name: "Ginny Weasley",
  Talent: "Quidditch",
  imageUrl: ""
},
{
  id: 7,
  Name: "Dean Thomas",
  Talent: "Wizard", 
  imageUrl: ""
},
{
  id: 8,
  Name: "Newton Scamander",
  Talent: "Magizoologist",
  imageUrl: ""
},
{
  id: 9,
  Name: "Cedric Diggory",
  Talent: "Wizard",
  imageUrl: ""
},
{
  id: 10,
  Name: "Pansy Parkinson",
  Talent: "Witchcraft",
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

let submitForm = "";
submitForm += 
`<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Sort</button>`;
  

  

  //Event Listener for Get Started Button
const getStartedButton = document.querySelector("#getStarted");

getStartedButton.addEventListener("click", () => {
  renderToDom("#app", submitForm);
});
