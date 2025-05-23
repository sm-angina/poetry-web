let nav = document.body.querySelector('nav')

nav.querySelector('.nav-i').addEventListener('click', ()=>{
    nav.style.animation = 'formNav 700ms forwards'
    nav.style.cursor = 'auto'
    nav.querySelector('i').style.display = 'none'
    setTimeout(() => {
        nav.style.width = '100vw'
       nav.style.height = '100vh'
       nav.style.top = 0
       nav.style.right = 0
       nav.style.borderRadius = '30px'
       nav.style.borderWidth = '2px'
       nav.style.animation = 'none'
    }, 800);
    
})

let closeNav = document.body.querySelector('.close-nav')
closeNav.addEventListener('click', ()=>{
        nav.style.animation = 'closeNav 1000ms forwards'
        nav.style.cursor = 'pointer'
        nav.querySelector('.nav-i').style.display = 'block'
        setTimeout(() => {
            nav.style.width = 'calc(clamp(15px, 6vw, 40px) + 10px)'
           nav.style.height = 'calc(clamp(15px, 6vw, 40px) + 10px)'
           nav.style.top = '10px'
           nav.style.right = '5px'
           nav.style.borderRadius = '5px'
           nav.style.borderWidth = '.5px'
           nav.style.animation = 'none'
        }, 1500);

})
closeNav.click()

//  list names
let navPoemList = nav.querySelector('ul')
poemsList.forEach(data => {
    if(poemsList.indexOf(data) + 1 < 10){
        navPoemList.innerHTML += `<li><span class='poem-index'>0${poemsList.indexOf(data) + 1}.</span>${data.poemName}</li>`
    }else{
        navPoemList.innerHTML += `<li><span class='poem-index'>${poemsList.indexOf(data) + 1}.</span>${data.poemName}</li>`      
    }
})

//  list function

let names = navPoemList.querySelectorAll('li')
let poemName = document.querySelector('.poem-name')
let poemBox = document.querySelector('.poem-box')
for(let i=0; i<names.length; i++){
    names[i].addEventListener('click', ()=> {
        poemName.innerText = poemsList[i].poemName
        poemBox.innerText = poemsList[i].poem
        closeNav.click()
    })
}



// nav.click()