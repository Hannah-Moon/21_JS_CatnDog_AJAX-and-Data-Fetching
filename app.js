// let request;

// document.getElementById("myBtn").addEventListener("click", testRequest);

// function testRequest() {
//   request = new XMLHttpRequest();
// //----------------------------------Establish new Request

//   if (!request) {
//     alert("Failed to create an XMLHttpRequest Object.");
//     return false;
//   }
// //----------------------------------Error / Fail State
//   request.onreadystatechange = alertResponse;
// //----------------------------------Link the state change to the alertFunc()
//   request.open("GET", "test.html");
// // //----------------------------------Set request to the html doc "test"
//   request.send();
// }

// function alertResponse() {
//   if (request.readyState === XMLHttpRequest.DONE) {
//     if (request.status === 200) {
//         // if request is DONE , status = 200(complete)
//       alert(request.responseText);
//     } else {
//       alert(
//         "The request returned a status other than 200 OK: " + request.status,
//         // Return status
//       );
//     }
//   }
// }
// const populateData = (arr)=>{
//   let body = document.querySelector('body')
//   arr.forEach((obj)=>{
//     let title = document.createElement('div')
//     title.setAttribute('class', 'title')
//     title.innerHTML = obj.title
//     body.append(title)

//   })
// }
// async function logJSONData() {
//   let URL = "https://jsonplaceholder.typicode.com/todos"
//   const response = await fetch(URL);
//   const jsonData = await response.json();
//   console.log(jsonData);
//   populateData(jsonData)
// }

// const dog = document.getElementById('dog');
//     dog.addEventListener("click", getNewDog);

//     async function getNewDog() {
//         dog.style.cursor = 'wait';
//         const response = await fetch("https://dog.ceo/api/breeds/image/random");
//         const jsonData = await response.json();
//         console.log(jsonData)
//         const url = jsonData.message;

//         dog.src = url;
//         dog.style.cursor = 'pointer';
//     }

//     getNewDog();
// -----------------------------------[NOTES]
let catScore = 0;
let dogscore = 0;

let catPoints = document.querySelector(".c1");
let dogPoints = document.querySelector(".d1");
let doghouse = document.querySelector(".dogs");

catPoints.innerHTML = catScore;
dogPoints.innerHTML = dogscore;

// ---------------------------------------------QS
const getCat = async () => {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  const jsonData = await response.json();
  let catImg = document.querySelector("#meow");
  catImg.setAttribute("src", jsonData[0].url);
  // console.log(jsonData[0].url);
};

const getDog = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const jsonData = await response.json();
  const url = jsonData.message;
  let dogImg = document.querySelector("#woof");
  dogImg.setAttribute("src", url);
};

getAnotherCat = async () => {
  let response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_cpUvXtjvo8aqXosFx8FMq04zFnSQQTUl87DhQRzfIvQMgKnutC13vYL919bHVEaR"
  );

  const jsonData = await response.json();
    // jsonData.forEach((cat)=>{
    //   console.log(cat.url)
    // })
  console.log(jsonData);
  // Look at the data type/ structure
  let link = jsonData[0].url;
  let catImg = document.querySelector("#meow");
  catImg.setAttribute("src", link);
  console.log("CatInfo: ", link);
};

const startGame = () => {
  getCat();
  getDog();
  let pick = prompt("Which is the Cutest of the Two?");
  if (pick.toLowerCase() === "cat") {
    catScore++;
    catPoints.innerHTML = catScore;
  } else if (pick.toLowerCase() === "dog") {
    dogscore++;
    dogPoints.innerHTML = dogscore;
  } else {
    alert("Wrong Response!");
  }
};

getAnotherCat();
getDog();
