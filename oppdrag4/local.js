localStorage.setItem("todo", "cat");
localStorage.setItem("user", "ed");

const user = localStorage.getItem("user");

console.log(user);

localStorage.clear();

const todolisy = ["cat", "wash", "music"];
localStorage.setItem("todos", JSON.stringify(todolisy))
const backHome = JSON.parse(localStorage.getItem("todos"));
console.log(backHome)

const viktig = {
    bestilling1: "5 personer",
    bestilling2: "2 personer"
} 