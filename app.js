// Selectors
let form = document.querySelector('.form')
let nameInput = document.querySelector('.input-name')
let weightInput = document.querySelector('.input-weight')
let heightInput = document.querySelector('.input-height')
let username = document.querySelector('.username')
let userResult = document.querySelector('.user-result')
let userBmi = document.querySelector('.user-bmi')
let mainImg = document.querySelector('.main-img')
let viewBtn = document.querySelector('.right-btn')
nameInput.focus()
// Events
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let nameValue = nameInput.value.trim()
    let weightValue = weightInput.value
    let heightValue = heightInput.value
    let bmi = (weightValue / ((heightValue **2)/10000)).toFixed(2)
    if(nameValue && weightValue && heightValue && (bmi>0)){
        username.textContent = `${nameValue}`
        username.style.textTransform = 'Capitalize'
        username.style.color = "#fff"
        userBmi.textContent = 'Your BMI is:'
        if(bmi < 18.5){
            userResult.innerHTML = `UnderWeight (${bmi})`
        }else if(bmi >= 18.5 && bmi <= 24.9){
            userResult.innerHTML = `NormalWeight (${bmi})`
        }else if(bmi > 24.9 && bmi <=29){
            userResult.innerHTML = `OverWeight (${bmi})`
        }else if(bmi > 29){
            userResult.innerHTML = `Obesity (${bmi})`
        }else{
            alert('error')
        }
    }else{
        alert('error')
    }

    nameInput.value = ''
    weightInput.value = ''
    heightInput.value = ''    
})

// viewBtn.addEventListener('click', ()=>{
//     mainImg.classList.add('shownav')

// })

















































