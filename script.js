let data = [{
        quote: `You know, Hobbes, some days even my lucky rocketship underpants dont help`,
        author: `Bill Watterson`
    },
    {
        quote: `I try to create sympathy for my characters, then turn the monsters loose.`,
        author: `Stephen King`
    },
    {
        quote: `Prose is architecture, not interior decoration.`,
        author: `Ernest Hemingway`
    },
    {
        quote: `It's none of their business that you have to learn to write. Let them think you were born that way.`,
        author: `Ernest Hemingway`
    },
    {
        quote: `Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.`,
        author: `Mark Twain`
    },
    {
        quote: `And as imagination bodies forth The forms of things unknown, the poet's pen Turns them to shapes and gives to airy nothing A local habitation and a name.`,
        author: `William Shakesphere`
    },
    {
        quote: `If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn't matter a damn how you write.`,
        author: `Somerset Mougham`
    },
    {
        quote: `To produce a mighty book, you must choose a mighty theme`,
        author: `Herman Melville`
    },
    {
        quote: `It is perfectly okay to write garbage—as long as you edit brilliantly`,
        author: `C. J. Cherryh`
    },
    {
        quote: `It took me fifteen years to discover I had no talent for writing, but I couldn't give it up because by that time I was too famous.`,
        author: `Robert Benchley`
    }
]

let div1 = document.createElement(`div`)
    // console.log(div1)
document.body.style.display = `flex`
document.body.style.height = `100vh`
document.body.style.alignItems = `center`
document.body.style.justifyContent = `center`
let divCont = document.body.appendChild(div1)
divCont.style.height = `70vh`
divCont.style.width = `70vw`
divCont.style.display = `flex`
divCont.style.flexFlow = `column wrap`
divCont.style.background = `url("./images/bgdiv1.avif")`
divCont.style.backgroundSize = `cover`
divCont.style.alignItems = `center`
divCont.style.justifyContent = `space-evenly`
divCont.style.boxShadow = `0px 0px 30px 10px skyblue`

let h1Ele = document.createElement(`h1`)
h1Ele.append(`Quote for the Day`)
div1.appendChild(h1Ele)
div1.appendChild(h1Ele).style.textAlign = `center`

let pEle = document.createElement(`p`)
pEle.setAttribute(`id`, `id1`)

divCont.appendChild(pEle)
divCont.appendChild(pEle).style.textAlign = `center`
divCont.appendChild(pEle).style.fontSize = `1rem`

const btnEle = document.createElement(`button`)
btnEle.append(`Get a Quote`)
divCont.appendChild(btnEle)
divCont.appendChild(btnEle).style.height = `60px`
divCont.appendChild(btnEle).style.width = `300px`
divCont.appendChild(btnEle).style.fontSize = `2.5rem`
divCont.appendChild(btnEle).style.outlineColor = `skyblue`
divCont.appendChild(btnEle).style.background = `yellow`
divCont.appendChild(btnEle).style.color = `white`
divCont.appendChild(btnEle).style.fontFamily = `times new roman`
divCont.appendChild(btnEle).style.fontWeight = `bolder`
    // divCont.appendChild(btnEle).style.border = `2px solid green`
    // console.log(document.getElementById(`id1`))


// 

function quote() {
    const x = Math.floor((Math.random()) * data.length)
    console.log(x)
    let pid = document.getElementById(`id1`)
    let content = document.createTextNode(`${data[x].quote} \n - ${data[x].author}`)
    pid.innerHTML = data[x].quote + "<br>" + "---  " + data[x].author
}
btnEle.onclick = (`click `, quote)

// //

// function quote() {
//     let btn = document.getElementsByClassName(`btn `)
// //     const pEle = document.getElementById(`id1`)
// //     const x = Math.floor(Math.random() * 10)
// //     console.log(x);
// //     pEle.innerText = `$ { data[x].quote }\n - $ { data[x].author }`
// // }