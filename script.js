const toggleSwitch = document.querySelector('input[type="checkbox"]')



// Switch Theme Dynamically
function switchTheme(evt){
    // console.log(evt.target.checked)
    if(evt.target.checked){
        //get the document at the highest level, give a attribute property [data-theme="dark"]
        document.documentElement.setAttribute('data-theme', 'dark')
    } else{
        document.documentElement.setAttribute('data-theme', 'light')
    }
}


// Event Listener
toggleSwitch.addEventListener('change', switchTheme)