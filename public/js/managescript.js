const tableContainer = document.querySelector('table');
const textContainer= document.querySelector('.text-container');
const inputColor = document.querySelector('input[type="color"]');
const textLocationBtn = document.querySelector('.text-location')

// global variables
let text; 
let selectedColor;
let changeTextLocation = false;
// event listeners 
tableContainer.addEventListener('click', (e)=>{
    if(!changeTextLocation){
        text = e.target;
        textContainer.textContent = e.target.textContent;
    }
    if(changeTextLocation){
        if(!e.target.textContent){
            e.target.append(text);
        }
       
    }
})
inputColor.addEventListener('change', (e)=>{
    textContainer.style.color = e.target.value;
    text.style.color = e.target.value;
    selectedColor = e.target.value;
})

textLocationBtn.addEventListener('click', (e)=>{
    let allCells = document.querySelectorAll('td');
    for(let cell of allCells){
        if(cell.textContent === ''){
            cell.style.backgroundColor = 'green';
        }
    }
    changeTextLocation = true;
})




// const getAllData = ()=>{
//     let allData = []
//     let position = {};
//     let text;
//     let color;
//     const allCells = document.querySelectorAll('td');
//     for(cell of allCells){
//         text = cell.textContent;
//         if(text){
//             color = window.getComputedStyle(cell.childNodes[0]).color;
//         }else{
//             color='black';
//         }
//         position.row = cell.parentNode.rowIndex;
//         position.col = cell.cellIndex;
//         allData.push({
//             text: text,
//             color: color,
//             position: position
//         })
//     }
//     return allData[1].text;
// }
const intialize = ()=>{
    text = ''; 
     selectedColor = '';
     changeTextLocation = false;
}
document.querySelector('.agree-change').addEventListener('click', intialize);