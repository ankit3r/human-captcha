const imgClass = document.querySelectorAll("img");


imgClass.forEach((item) => item.addEventListener('click', () => {
    item.classList.toggle("active");

}))