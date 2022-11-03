 const ELEMENTS = document.querySelectorAll(".pic img");
 const POPUP = document.querySelector(".popup");
 const POPUPCLOSE = document.querySelector(".popupButton");
 const POPUPIMG = document.querySelector(".popupImg");
 const ARROWLEFT = document.querySelector(".popArrow--left");
 const ARROWRIGHT = document.querySelector(".popArrow--right");
 const ADDWISH1 = document.querySelector(".addwish1");
 const ADDWISH2 = document.querySelector(".addwish2");
 const ADDWISH3 = document.querySelector(".addwish3");
 const ADDWISH4 = document.querySelector(".addwish4");
 const ADDWISH5 = document.querySelector(".addwish5");
 const ADDWISH6 = document.querySelector(".addwish6");
 const ul = document.querySelector('.whisList');

let currentImgIndex;

const removeTask = (e) => {
    e.target.parentNode.remove();
}

ELEMENTS.forEach((pic, index) => {
    pic.addEventListener("click", (e) => {
        POPUP.classList.remove("hidden");
        POPUPIMG.src = e.target.src;
        currentImgIndex = index;
    });
});

POPUPCLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});

ARROWRIGHT.addEventListener("click", () => {
    if(currentImgIndex === ELEMENTS.length - 1){
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUPIMG.src = ELEMENTS[currentImgIndex].src;
});

ARROWLEFT.addEventListener("click", () => {
    if(currentImgIndex === 0){
        currentImgIndex = ELEMENTS.length - 1;
    } else {
        currentImgIndex = currentImgIndex - 1;
    }
    POPUPIMG.src = ELEMENTS[currentImgIndex].src;
});

ADDWISH1.addEventListener("click", () => {
    const task = document.createElement('li');
    task.className = 'task'
    task.innerHTML = '<div class="pic J1"><img src="images/mamanieraJ1.jpeg" alt=""> <button class="add removewish1">&#x2718;</button></div>';
    ul.appendChild(task);
    task.querySelector('button').addEventListener('click', removeTask);
});

ADDWISH2.addEventListener("click", () => {
    const task = document.createElement('li');
    task.className = 'task'
    task.innerHTML = '<div class="pic uptempo"><img src="images/uptempo.jpg" alt=""> <button class="add removewish2">&#x2718;</button></div>';
    ul.appendChild(task);
    task.querySelector('button').addEventListener('click', removeTask);
});

ADDWISH3.addEventListener("click", () => {
    const task = document.createElement('li');
    task.className = 'task'
    task.innerHTML = '<div class="pic blackcat"><img src="images/J4blackcat.jpg" alt=""> <button class="add removewish3">&#x2718;</button></div>';
    ul.appendChild(task);
    task.querySelector('button').addEventListener('click', removeTask);
});

ADDWISH4.addEventListener("click", () => {
    const task = document.createElement('li');
    task.className = 'task'
    task.innerHTML = '<div class="pic vapor"><img src="https://fastsole.co.uk/wp-content/uploads/2021/05/Nike-Air-VaporMax-Flyknit-2021-Grey-Fog-DH4084-002-01.jpg" alt=""> <button class="add removewish4">&#x2718;</button></div>';
    ul.appendChild(task);
    task.querySelector('button').addEventListener('click', removeTask);
});

ADDWISH5.addEventListener("click", () => {
    const task = document.createElement('li');
    task.className = 'task'
    task.innerHTML = '<div class="pic strawberry"><img src="https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-sb-dunk-high-pro-qs-strawberry-cough-nike-kikikickz-127246_1024x1024.jpg?v=1636032210"> <button class="add removewish5">&#x2718;</button></div>';
    ul.appendChild(task);
    task.querySelector('button').addEventListener('click', removeTask);
});

ADDWISH6.addEventListener("click", () => {
    const task = document.createElement('li');
    task.className = 'task'
    task.innerHTML = '<div class="pic holy"><img src="https://i.pinimg.com/originals/17/b5/f0/17b5f0ffad76d3983dc083382c1b7ff2.jpg" alt=""> <button class="add removewish6">&#x2718;</button></div>';
    ul.appendChild(task);
    task.querySelector('button').addEventListener('click', removeTask);
});

