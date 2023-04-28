let API_KEY = `a957ec0b3d744d67b9d22006231304`

let container = document.querySelector("body")
let form = document.querySelector("form")
let input = document.querySelector("input")
let button = document.querySelector(".nav-btn")
let heading = document.querySelector("h2")
let state = document.querySelector("h5")
let heading2 = document.querySelector("h3")
let heading3 = document.querySelector("h4")
let image = document.querySelector("img")

const getData = async(e)=>{
    e.preventDefault()
    try{
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY} &q=${input.value}&aqi=yes`)
    const data = await res.json()


    const cityname = data.location.name
    const temp  = data.current.temp_c
    const state1 = data.location.region
    const text = data.current.condition.text
    const iconimg = data.current.condition.icon

    heading.innerText = cityname
    state.innerText = state1
    heading2.innerText = `${temp}℃`
    heading3.innerText = text
    image.setAttribute('src' , 'https:'+iconimg)
    container.style.background = `url(https://source.unsplash.com/random/900×900/?${text})`
    

   form.reset()}catch(error){
    window.alert("Please inter valid name")
   }
}

form.addEventListener("submit",getData)

// let API_KEY = `a957ec0b3d744d67b9d22006231304`

// let container = document.querySelector("body")
// let form = document.querySelector("form")
// let input = document.querySelector("input")
// let heading = document.querySelector("h2")
// let heading2 = document.querySelector("h5")
// let heading3 = document.querySelector("h3")
// let heading4 = document.querySelector("h4")
// let image = document.querySelector("img")

// const getData = async(e) => {
//     e.preventDefault()
//     try{
//     const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY} &q=${input.value}&aqi=yes`)
//     const data = await res.json()

//     const cityname = data.location.name
//     const temp  = data.current.temp_c
//     const state1 = data.location.region
//     const text = data.current.condition.text
//     const iconimg = data.current.condition.icon

//     heading.innerText = cityname
//     heading2.innerText = state1
//     heading3.innerText =`${temp}℃`
//     heading4.innerText = text
//     image.setAttribute('src' , 'https:'+iconimg)
//     container.style.background = `url(https://source.unsplash.com/random/900×700/?${text})`
//     form.reset()}catch(error){
//         window.alert("Enter valid city name")
//     }
// }
// form.addEventListener("submit",getData)