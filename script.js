const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')


// // Dark Mode Styles
// function darkMode() {
//     nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'  // change nav bar bg color
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)' //change textbox bg color
//     console.log(toggleIcon.children) // return an array of the elements inside toggleIcon, <span> & <i>

//     // update the toggle
//     toggleIcon.children[0].textContent = 'Dark Mode'
//     toggleIcon.children[1].classList.remove('fa-sun')
//     toggleIcon.children[1].classList.add('fa-moon')

//     // update the image to be the dark images
//     image1.src = 'img/undraw_modern_art_re_pff5_dark.svg'
//     image2.src = 'img/undraw_Traveling_re_weve_dark.svg'
//     image3.src = 'img/undraw_Nature_fun_re_iney_dark.svg'
// }

// // Light Mode Styles
// function lightMode() {
//     nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'  // change nav bar bg color
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)' //change textbox bg color
//     console.log(toggleIcon.children) // return an array of the elements inside toggleIcon, <span> & <i>

//     // update the toggle
//     toggleIcon.children[0].textContent = 'Light Mode'
//     toggleIcon.children[1].classList.remove('fa-moon')
//     toggleIcon.children[1].classList.add('fa-sun')

//     // update the image to be the light images
//     image1.src = 'img/undraw_modern_art_re_pff5_light.svg'
//     image2.src = 'img/undraw_Traveling_re_weve_light.svg'
//     image3.src = 'img/undraw_Nature_fun_re_iney_light.svg'
// }


// Refactored 

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_modern_art_re_pff5_${color}.svg`
    image2.src = `img/undraw_Traveling_re_weve_${color}.svg`
    image3.src = `img/undraw_Nature_fun_re_iney_${color}.svg`
}

// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'  // change nav bar bg color
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)' //change textbox bg color
    // update the toggle
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    // update the image to be the dark images
    imageMode('dark')
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'  // change nav bar bg color
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)' //change textbox bg color
    console.log(toggleIcon.children) // return an array of the elements inside toggleIcon, <span> & <i>
    // update the toggle
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    // update the image to be the light images
    imageMode('light')
}



// Switch Theme Dynamically
function switchTheme(evt){
    // console.log(evt.target.checked)
    if(evt.target.checked){
        //get the document at the highest level, give a attribute property [data-theme="dark"]
        document.documentElement.setAttribute('data-theme', 'dark')
        //inspect / application tab / storage / localstorage ==> show a key value pair
        localStorage.setItem('theme', 'dark') // set key and value
        darkMode()
    } else{
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light') // set key and value
        lightMode()
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme)


// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme')
if(currentTheme){
    // Always check if the currentTheme exist, if true set it
    document.documentElement.setAttribute('data-theme', currentTheme)

    //automatically toggle the switch and set it to Dark Mode
    if(currentTheme === 'dark'){
        toggleSwitch.checked = true
        darkMode()
    }
}