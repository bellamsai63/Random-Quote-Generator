let data = [{
        quote: "You know, Hobbes, some days even my lucky rocketship underpants dont help",
        author: "Bill Watterson"
    },
    {
        quote: "I try to create sympathy for my characters, then turn the monsters loose.",
        author: "Stephen King"
    },
    {
        quote: "Prose is architecture, not interior decoration.",
        author: "Ernest Hemingway"
    },
    {
        quote: "It's none of their business that you have to learn to write. Let them think you were born that way.",
        author: "Ernest Hemingway"
    },
    {
        quote: "Most writers regard the truth as their most valuable possession, and therefore are most economical in its use.",
        author: "Mark Twain"
    },
    {
        quote: "And as imagination bodies forth The forms of things unknown, the poet's pen Turns them to shapes and gives to airy nothing A local habitation and a name.",
        author: "William Shakespeare"
    },
    {
        quote: "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn't matter a damn how you write.",
        author: "Somerset Maugham"
    },
    {
        quote: "To produce a mighty book, you must choose a mighty theme",
        author: "Herman Melville"
    },
    {
        quote: "It is perfectly okay to write garbage—as long as you edit brilliantly",
        author: "C. J. Cherryh"
    },
    {
        quote: "It took me fifteen years to discover I had no talent for writing, but I couldn't give it up because by that time I was too famous.",
        author: "Robert Benchley"
    }
];

document.body.style.display = 'flex';
document.body.style.height = '100vh';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';

let divCont = document.createElement('div');
divCont.classList.add('container');
document.body.appendChild(divCont);

let h1Ele = document.createElement('h1');
h1Ele.append('Quote for the Day');
divCont.appendChild(h1Ele);

let pEle = document.createElement('p');
pEle.setAttribute('id', 'id1');
divCont.appendChild(pEle);

const btnEle = document.createElement('button');
btnEle.append('Get a Quote');
btnEle.classList.add('btn');
divCont.appendChild(btnEle);

btnEle.addEventListener('click', () => {
    const x = Math.floor(Math.random() * data.length);
    let pid = document.getElementById('id1');
    pid.innerHTML = `${data[x].quote}<br>--- ${data[x].author}`;
});
