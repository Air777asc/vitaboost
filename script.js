// Grab label elements
let ordered=false
let flavorLabel=document.querySelector(".label span")
let vitaminList=document.querySelector(".vitamin-list span")
let disporder=document.querySelector(".disporder")
disporder.style.display="none"

// Only select flavor & vitamin buttons
let optionButtons=document.querySelectorAll(".flavor-btn, .vitamin-btn")

function handleClick(e){
    e.target.classList.toggle("selected")

    // Update flavor label
    let selectedFlavors=document.querySelectorAll(".flavor-btn.selected")
    let flavorNames=[]
    for(let j=0;j<selectedFlavors.length;j++){
        flavorNames.push(selectedFlavors[j].textContent)
    }
    flavorLabel.textContent=flavorNames.join(", ")||"No Flavor Selected"

    // Update vitamins list
    let selectedVitamins=document.querySelectorAll(".vitamin-btn.selected")
    let vitaminNames=[]
    for(let k=0;k<selectedVitamins.length;k++){
        vitaminNames.push(selectedVitamins[k].textContent)
    }
    vitaminList.textContent=vitaminNames.join(", ")||"No vitamins selected"
}

// Attach listeners
for(let i=0;i<optionButtons.length;i++){
    optionButtons[i].addEventListener("click",handleClick)
}

// Order button
let order=document.querySelector(".send-order")
order.onclick=function(){
    let selectedFlavors=document.querySelectorAll(".flavor-btn.selected")
    let selectedVitamins=document.querySelectorAll(".vitamin-btn.selected")

    order.style.transition="background-color 0.5s, color 0.5s"

    if(selectedFlavors.length!=0&&selectedVitamins.length!=0&&ordered==false){
        order.style.backgroundColor="black"
        order.style.color="white"
        disporder.style.display="block"
        ordered=true

        // Remove click listeners
        for(let i=0;i<optionButtons.length;i++){
            optionButtons[i].removeEventListener("click",handleClick)
        }
    }
}
// Clicks do not work after ordered
// Multi-select vitamins and flavors