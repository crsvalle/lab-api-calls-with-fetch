const form  = document.querySelector('form')
const BASE_URL = "https://opentdb.com/api.php?amount=10"

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
        json.results.forEach((result) =>{
            displayTest(result)
        })
    })
    .catch(error => console.log(error));

})

function displayTest (result){
    const section = document.querySelector("main.centered")
    const article = document.createElement("article")
    article.classList.add("card")

    const h2 = document.createElement('h2')
    h2.textContent = result.category

    const p1 = document.createElement("p"),
          p2 = document.createElement('p');
           
    p2.classList.add("hidden")

    const button = document.createElement('button')
    button.textContent = "Show Answers"

    p1.textContent = result.question
    p2.textContent = result.correct_answer

    button.addEventListener("click", ()=> {
        p2.classList.toggle("hidden")
        if (button.textContent == "Hide Answer"){
            button.textContent = "Show Answer"
        }else{
            button.textContent = "Hide Answer"
        }
        
    })
    article.append(h2, p1,p2, button)
    section.append(article)
}

// const bigError = () => {
//     const section = document.querySelector("section")
//     section.style.display = "block";

//     const p = document.createElement('p');
//     p.textContent = "error";

//     section.append(p)
// } 