console.log("this is js")
var container= document.getElementById('container')
var btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    container.style.backgroundColor= "black";
    alert('this has been clicked')
    setTimeout(()=>{
        if(container.classList.contains('item1')){
            container.classList.remove('item1')
        }
        else{
            container.classList.add('item1')
        }
    },1500)
    
})
console.log(btn.innerHTML)
// form events
var username = document.getElementById('username')
console.log(username)
// event-change:  only records the final change
username.addEventListener('change',()=>{
    console.log('value changed')
})
// event-input: records as we input the text
username.addEventListener('input',(event)=>{
    console.log(event.target)
    console.log(event.target.value)
    console.log('value inputed')
    // to change the inputed text in uppercase from lower case
    var current=event.target.value;
    var upper= current.toUpperCase();
    event.target.value=upper;
})
// event-focus:  records when we click on the field
username.addEventListener('focus',()=>{
    console.log('focused')
})
// event-blur: records when we click outside the field
username.addEventListener('blur',()=>{
    console.log('blurred')
})
// event:submit
var form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
    alert('your form has been submitted');
    e.preventDefault();
})
// key events
// when a key is clicked
document.body.addEventListener('keydown',()=>{
    console.log('a key is clicked')
})
// when a key is left after clicking
document.body.addEventListener('keyup',()=>{
    console.log('a key was clicked')
})
// to know the key which was clicked, we have the keycode
//webisite to know all the keycodes - keycode.info
document.body.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        //here 13 is the keycode for Enter
        console.log('enter is being clicked')
    }
})
document.body.addEventListener('keypress',(e)=>{
    if(e.keyCode===13){
        //here 13 is the keycode for Enter
       console.log('pressing the enter')
    }
})
document.body.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        //here 13 is the keycode for Enter
        alert('enter has been clicked')
    }
})
// adding an element before the refrence element
// creating an html element
// var list= document.getElementById('list')
// console.log(list.childNodes)
// // var li1=document.getElementById('li1')
// var btnadd= document.getElementById('btn-add')
// btnadd.addEventListener('click',()=>{
//     var li1= list.firstElementChild
//     var index= list.childElementCount
//     console.log(index)
//     var create= document.createElement('li');
//     create.appendChild(document.createTextNode(`li${index+1}`))
//     create.id=`li${index+1}`
//     create.className='li'
//     // create.style.marginRight=2+"px";
//     console.log(create)
//     // list.appendChild(create)
//     // to insert before the refernce element : li1
//     list.insertBefore(create,li1)
//     console.log(index)
// })

// making a todo list
// storing the value inputed
var inputvalue;
var input=document.getElementById('input')
input.addEventListener('input', (e)=>{
    console.log(e.target.value)
    inputvalue=e.target.value;
    console.log(inputvalue)
})
// adding an element after the last element
var list = document.getElementById('list')
var btnadd = document.getElementById('btn-add')
console.log(list)
console.log(btnadd)
btnadd.addEventListener('click', ()=>{
    var index=list.childElementCount;
    console.log(index)
    // alert('This is an event listener')
    var create=document.createElement('li')
    var createbtn=document.createElement('button')
    createbtn.id=`remove`
    createbtn.onclick=alert('this')
    createbtn.appendChild(document.createTextNode('remove'))
    createbtn.style.padding=5+'px'
    createbtn.style.margin=10+'px'
    createbtn.style.backgroundColor="rgb(243, 221, 188)"
    console.log(create)
    create.className='li'
    create.id=`li${index+1}`
    // add only when there is some input to give
    if(inputvalue!=undefined&&inputvalue!=null&&inputvalue!=''){
        create.appendChild(document.createTextNode(inputvalue))
        create.appendChild(createbtn)
        list.appendChild(create)
        input.value=''
        inputvalue=''
    }
    else{
        alert('cannot insert empty value')
    }
 
})
// removing elements
// var btnremove = document.getElementById('btn-remove') 
// btnremove.addEventListener('click',()=>{
//     console.log(list.children)
//     console.log(list.firstElementChild)
//     list.removeChild(list.firstElementChild)
// })

//  adding elements on the enter button
input.addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        var index=list.childElementCount;
    console.log(index)
    // alert('This is an event listener')
    var create=document.createElement('li')
    var createbtn=document.createElement('button')
    createbtn.id=`remove`
    createbtn.onclick=alert('thia')
    createbtn.appendChild(document.createTextNode('remove'))
    createbtn.style.padding=5+'px'
    createbtn.style.margin=10+'px'
    createbtn.style.backgroundColor="rgb(243, 221, 188)"
    console.log(create)
    create.className='li'
    create.id=`li${index+1}`
    // add only when there is some input to give
    if(inputvalue!=undefined&&inputvalue!=null&&inputvalue!=''){
        create.appendChild(document.createTextNode(inputvalue))
        create.appendChild(createbtn)
        list.appendChild(create)
        input.value=''
        inputvalue=''
    }
    }
    
})
// upadating and deleting elements in the todo-list
var btnup= document.getElementById('btn-update')
var btnremove = document.getElementById('btn-remove') 
// update element
btnup.addEventListener('click', function(){
    var list= document.getElementById('list')
    var index=list.childElementCount;
    var firstchild= list.firstElementChild
    var updatevalue;
    if(inputvalue!=undefined&&inputvalue!=null&&inputvalue!=''){
    var create=document.createElement('li')
    var createbtn=document.createElement('button')
    createbtn.onclick=alert('this')
    createbtn.id=`remove`
    createbtn.appendChild(document.createTextNode('remove'))
    createbtn.style.padding=5+'px'
    createbtn.style.margin=10+'px'
    createbtn.style.backgroundColor="rgb(243, 221, 188)"
    console.log(create)
    create.className='li'
    create.id=`li${index+1}`
    create.appendChild(document.createTextNode(inputvalue))
    create.appendChild(createbtn)
        // list.appendChild(create)
    }
    list.replaceChild(create,firstchild)
})
// remove
btnremove.addEventListener('click',()=>{
    var firstchild= list.firstElementChild
    list.removeChild(firstchild) 
})
function removethis(current){
    console.log(current)
}
// regex
var str='This is rishi.I am a good boy.Rishi never lies'
var pattern=/[a-zA-Z0-9]\s[a-zA-Z0-9]/gi;
var pattern2=/rishi/gi;
if(pattern.test(str)){
    console.log('yes')
    console.log(str.search(pattern2))
    console.log(str.match(pattern2))
}
else{
    console.log('noo')
}
// mentioning regex using classes 
var classPattern = new RegExp('rishi','gi')
console.log(str.match(classPattern))
// regex to match a phone number 
var phonenumber =/(\+91)?[\d]{10}$/;
let number='+919903231906';
if(phonenumber.test(number)){
    console.log('yes')
    console.log(number.search(phonenumber))
    console.log(number.match(phonenumber))
}
else{
    console.log('noo')
}
 