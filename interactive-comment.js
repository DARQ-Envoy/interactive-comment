const firstArticle=document.querySelector("#first-article");
const textField=document.querySelector("#text-field");
// console.log(textField);
const sendButton=document.querySelector(".send-button")
const timing=document.querySelector(".timing");
const name=document.querySelector(".name");
const replyIcon=document.querySelector(".reply-icon");
const minus=document.querySelector(".minus");
const plus=document.querySelector(".plus");
const image=document.querySelector(".image");
const timo=document.querySelector(".timo");
let box;
let del;
let forthDeleted=false;
console.log(typeof firstArticle);
console.log(firstArticle)

const img="image";
let comments;


 comments=[
    {
        timing:"1 month ago",
        name:"amyrobson",
        reply:"Reply",
        id:"amyrobson",
        firstLetter:`A`,
        lastLetter:`on`,
        position:`first`,
        tClass:"st1",


        text:"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",

        plusIcon:"icon-plus.svg",
        number:12,
        minusIcon:"icon-minus.svg",
        image:`${img}-amyrobson.png`,
    },
    {
        timing:"2 weeks ago",
        name:"maxblagun",
        reply:"Reply",
        id:"maxblagun",
        firstLetter:`M`,
        lastLetter:`un`,
        position:`second`,
        tClass:"nd2",

        text:"Woah,your project looks awesome! How long have you been coding for? I'm still new, but think i want to dive into React as well soon. Perhaps you can give me an insight on where i can learn React? Thanks!",

        plusIcon:"icon-plus.svg",
        number:12,
        minusIcon:"icon-minus.svg",
        image:`${img}-maxblagun.png`
    },
    {
        name:"ramsesmiron",
        timing:"1 weeks ago",
        reply:"Reply",
        id:"ramsesmiron",
        firstLetter:`R`,
        lastLetter:`n`,
        position:`third`,
        tClass:"rd3",

        text:"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",

        plusIcon:"icon-plus.svg",
        number:12,
        minusIcon:"icon-minus.svg",
        image:`${img}-ramsesmiron.png`
    },
    {
        name:"Timothy",
        timing:"2 days ago",
        plusIcon:"icon-plus.svg",
        reply:"Reply",
        id:"Timothy",
        firstLetter:`T`,
        lastLetter:`y`,
        position:`forth`,
        tClass:"th4",

        text:" I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",

        number:12,
        minusIcon:"icon-minus.svg",
        image:`${img}-timothy.jpg`
    }, 

]
let bigBox;
let change;
let count=0;


Run()

function Run(){
   change=false;
    count=0;
    let counting=0;
    console.log("its run")
    console.log(comments)

        comments.forEach(user=>{
            count+=1
         box=document.createElement("div");
            box.classList.add("box");
            box.setAttribute('id',`${user.id}`)
            box.innerHTML=`
            <div class="first-block">
                <div class="info" id=${user.lastLetter}>
        <img src="${user.image}" alt="${user.name} image" class="image timo"/>
        <span id="${user.firstLetter}">
                    <span class="name">${user.name}</span>
                    </span>
                    <span class="timing">${user.timing}</span>
                
                    </div>
            <div class="text ${user.tClass}">
         ${user.text}
            </div>
            </div>
        
            <div class="foot">
            <div class="increment">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path class="plus" d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
                <span class="no">12</span>
                <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path class="minus" d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>
            </div>
         <div class="rep ${user.position}">
         <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" class="reply-icon" fill="#5357B6"/></svg>
        <span class="reply">Reply</span>
                        </div>
                    </div>
            `
            console.log(box)
    firstArticle.appendChild(box);
    
    console.log(count)
        // settingClass()
        bigBox=box
        if(count===3){
            changingText()
        }
        if(user.tClass==="th4"){
            change=true;
            changingText();
            console.log(user.tClass);
        }
        if(count>3){
            counting++;
            console.log(box)
            console.log(count);
            console.log(counting);
            settingClass()
        }
    
    
    })

}





function changingText(){
    console.log(change)
let threeRd=document.querySelector(".rd3");
threeRd.innerHTML="<a href='#maxblagun' class='link'>@maxblagun</a> If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.";


if(change){
    let fourRd=document.querySelector(".th4");
    console.log(fourRd)
    fourRd.innerHTML=" <a href='#ramsesmiron' class='link'>@ramsesmiron</a> I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant."
}
}

function settingClass(){
    const lastY=document.querySelector(`#y`)
    const firstT=document.querySelector(`#T`);
    console.log(lastY)
    const forth=document.querySelector(`.forth`);
    console.log(forth)
    console.log(forthDeleted)
    if(!forthDeleted){
        console.log("forthDeleted")
        forth.innerHTML=`
        <span class="del">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path  d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" class="delete-icon" fill="#ED6368"/></svg>
        <span class="delete">Delete</span>
        </span>
        <span class="edy">
        <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path  d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" class="edit-icon" fill="#5357B6"/></svg>
        <span class="edit">Edit</span>
        </span>
        `
        lastY.classList.add("my-info");
        lastY.classList.remove("info");
        firstT.innerHTML=` <span class="name">Timothy</span>`
        firstT.innerHTML+= `<span class="person">you</span>
        `
    del=document.querySelector(".del");
    console.log(del)
    del.addEventListener("click",()=>{   
        background.classList.remove("none")
        console.log("done")
        // reset(firstArticle)
        })
    }
    console.log(bigBox)
}

const views=[]


const Timothy=document.querySelector("#Timothy");
const background=document.querySelector(".background");
const noButton=document.querySelector(".no-button");
const yesButton=document.querySelector(".yes-button");
noButton.addEventListener("click",()=>{
    background.classList.add("none")
})

yesButton.addEventListener("click",()=>{
    background.classList.add("none")
    // firstArticle.removeChild(Timothy)
    comments.splice(3,1);
    reset(firstArticle)
    forthDeleted=true;
    Run()
    console.log(comments)
    console.log(firstArticle)
})


const comm=[

]

let comment;
let texture

textField.addEventListener("input",(e)=>{
    inputing(e.target.value)
})

function inputing(texting){
//  comment=
//         {
//             name:"Timothy",
//             timing:"2 days ago",
//             plusIcon:"icon-plus.svg",
//             reply:"Reply",
//             id:"Timothy",
//             firstLetter:"T",
//             lastLetter:"y",
//             position:"forth",
        
//             text:texting,
        
//             number:12,
//             minusIcon:"icon-minus.svg",
//             image:`${img}-timothy.jpg`
//         }   
 
 texture=texting
 console.log(texting)
 console.log(comments)
    
}

sendButton.addEventListener("click",()=>{
sent()
})


function sent(){
    if(textField.value){
        comments.push(  {
                                name:"Timothy",
                                    timing:"2 days ago",
                                    plusIcon:"icon-plus.svg",
                                    reply:"Reply",
                                    id:"Timothy",
                                    firstLetter:"T",
                                    lastLetter:"y",
                                    position:"forth",
                                    tClass:"th5",
                                
                                    text:texture,
                                
                                    number:12,
                                    minusIcon:"icon-minus.svg",
                                    image:`${img}-timothy.jpg`
        }  )  

        forthDeleted=false
        addComment()
        console.log(views)

        console.log("Clicked")
        textField.value="";
        console.log(firstArticle)
    }

    
}
function addComment(){
    rad()
}
function rad(){
reset(firstArticle)
Run()

}




function roundRun(){

// let count=0;
// let counting=0;
console.log("its run")
console.log(comments)
views.forEach(user=>{
    // count+=1
    // if(count>4){

    //     counting++;
    //     console.log(count);
    //     console.log(counting);
    //     settingClass()
    // }

 box=document.createElement("div");
    box.classList.add("box");
    box.setAttribute('id',`${user.id}`)
    box.innerHTML=`
    <div class="first-block">
        <div class="info" id=${user.lastLetter}>
<img src="images/avatars/${user.image}" alt="${user.name} image" class="image timo"/>
<span id="${user.firstLetter}">
            <span class="name">${user.name}</span>
            <span class="person">you</span>
            </span>
            <span class="timing">${user.timing}</span>
        
            </div>
    <div class="text">
 ${user.text}
    </div>
    </div>

    <div class="foot">
    <div class="increment">
        <img src="images/${user.plusIcon}" alt="plus SVG" class="plus"/> 
        <span class="no">12</span>
        <img src="images/${user.minusIcon}" alt="minus icon" class="minus">
    </div>
 <div class="rep ${user.position}">
 <img src="images/icon-delete.svg" alt="delete icon" class="delete-icon">
 <span class="delete">Delete</span>


<img src="images/icon-edit.svg" alt="edit icon" class="edit-icon" class="reply-icon"/>

<span class="edit">Edit</span>
                </div>
            </div>
    `
    console.log(box)
firstArticle.appendChild(box);

// console.log(count)
// // settingClass()
// if(count>3){

//     counting++;
//     console.log(count);
//     console.log(counting);
//     settingClass()
// }


})}







// const ramses=document.querySelector("#ramsesmiron");
// ramses.addEventListener("click",()=>{
//     firstArticle.removeChild(ramses)
// })
function insert(){
    // if(comm.length>1){
    //     comm.shift()
    // }

    comments.forEach(user=>{
        const div=document.createElement("div");
           div.classList.add("box");
           div.setAttribute('id',`${user.id}`)
           div.innerHTML=`
           <div class="first-block">
               <div class="my-info" id=${user.lastLetter}>
       <img src="images/avatars/${user.image}" alt="${user.name} image" class="image timo"/>
       <span id="${user.firstLetter}">
                   <span class="name">${user.name}</span>
                   <span class="person">you</span>
                   </span>
                   <span class="timing">${user.timing}</span>
               
                   </div>
           <div class="text">
        ${user.text}
           </div>
           </div>
       
           <div class="foot">
           <div class="increment">
               <img src="images/${user.plusIcon}" alt="plus SVG" class="plus"/> 
               <span class="no">12</span>
               <img src="images/${user.minusIcon}" alt="minus icon" class="minus">
           </div>
        <div class="rep ${user.position}">
        <span class="del dele">
        <img src="images/icon-delete.svg" alt="delete icon" class="delete-icon">
        <span class="delete">Delete</span>
        </span>
       <img src="images/icon-edit.svg" alt="edit icon" class="edit-icon" class="reply-icon"/>
   
       <span class="edit">Edit</span>
                       </div>
                   </div>
           `
           firstArticle.appendChild(div);
           console.log(div)
}   ) 


const dele=document.querySelector(".dele");
console.log(dele);
dele.addEventListener("click",()=>{
    background.classList.remove("none")
    console.log("done")
})
}



    // setTimeout(reset(firstArticle),2000);
     function reset(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild)
        }
     }
