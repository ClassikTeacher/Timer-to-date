const daysEl = document.getElementById('days') 
const hoursEl = document.getElementById('hours') 
const minsEl = document.getElementById('mins') 
const secondsEl = document.getElementById('seconds') 

const nameDay = document.querySelector('.name-day') 
const btns = document.querySelector('.btn-container')
const btnDay = document.querySelectorAll('.btn')

const newY = '1 1 2023' //month days year  OR 1 Jan 2022
const birthdayD = '10 2 2022'
const birthdayL = '5 18 2022'
const birthdayK = '4 29 2022'
let elem = newY
let id 

function countdown(){
    
    const elementDate = new Date(elem)
    const CurrentDate = new Date()

    const allSeconds = (elementDate-CurrentDate)/1000;

    const days = Math.floor(allSeconds / 3600 / 24)
    const hours = Math.floor(allSeconds / 3600) % 24
    const mins = Math.floor(allSeconds / 60) % 60
    const seconds = Math.floor(allSeconds) % 60
   
    console.log(days,hours,mins,seconds)
    console.log(elem)
   
  
daysEl.innerHTML = days
hoursEl.innerHTML = EndTime(hours)
minsEl.innerHTML =  EndTime(mins)
secondsEl.innerHTML = EndTime(seconds)
}

function EndTime(time){
    return time < 10 ? `0${time}` : time
}


btns.addEventListener('click', changID)
    

   
    
 

function changID(e){
    btnDay.forEach(function(btn){
        
        btn.classList.remove('active')
        e.target.classList.add('active')
         id = e.target.id
        
        
        // console.log(id)
    })
    switch(id){
        case 'newY': elem = newY
        break
        case 'birthdayD': elem = birthdayD
        break
        case 'birthdayL': elem = birthdayL
        break
        case 'birthdayK': elem = birthdayK
        break
        
        default: elem = newY
        console.log(false)
    }
    countdown(elem)
    dayActive()
    
    // console.log(elem)
}

function dayActive(){
    element = document.querySelector(`#${id}`)
    texte = element.textContent
    nameDay.innerText = texte
}


// //call function



countdown(elem)
setInterval(countdown, 1000, elem)

