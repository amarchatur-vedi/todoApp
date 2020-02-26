const taskAdder = document.querySelector('#adder-button');
k = 0;
//localStorage.clear();
setTimeout(() => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d. getDay()];
    var month = d.getMonth()+1;
    document.querySelector('#day-date').innerHTML = dayName +" "+ d.getDate() +"/"+ month +"/"+ d.getFullYear();
},1000);
while(k<localStorage.length){
    let para = document.createElement('p');
    para.setAttribute('class','tasks');
    para.setAttribute('id',localStorage.key(k));
    document.querySelector('.task-list').appendChild(para);
    
    let inputCheck = document.createElement('input');
    inputCheck.setAttribute('type','checkbox');
    inputCheck.setAttribute('id','task-checkbox');
    para.appendChild(inputCheck);
    
	let spanEle = document.createElement('span');
    spanEle.setAttribute('id','task-content');
    spanEle.textContent = localStorage.getItem(localStorage.key(k));
    para.appendChild(spanEle);

    let delButton = document.createElement('button');
    delButton.setAttribute('class','task-deletion');
    delButton.setAttribute('onclick','deleter(this)');
    para.appendChild(delButton);

    let delIcon = document.createElement('i');
    delIcon.setAttribute('class','far fa-trash-alt');
    delButton.appendChild(delIcon);
	k++;
}
taskAdder.addEventListener('click',()=>{
    console.log(localStorage.length);
    if(localStorage.length < 7){
        let task = document.querySelector('#input-bar').value;
    let idReciver = "tasks"+localStorage.getItem('eleCount');
    let para = document.createElement('p');
    para.setAttribute('class','tasks');
    let newtask="";
    for (let i = 0; i < 6; i++) {
        if(task[i]===" "){
            newtask = newtask + "" +Math.floor(Math.random()*50);
        }
        else newtask += task[i];
    }
    para.setAttribute('id',newtask);
        
    document.querySelector('.task-list').appendChild(para);

    let inputCheck = document.createElement('input');
    inputCheck.setAttribute('type','checkbox');
    inputCheck.setAttribute('id','task-checkbox');
    para.appendChild(inputCheck);

    let spanEle = document.createElement('span');
    spanEle.setAttribute('id','task-content');
    spanEle.textContent = task;
    para.appendChild(spanEle);

    let delButton = document.createElement('button');
    delButton.setAttribute('class','task-deletion');
    delButton.setAttribute('onclick','deleter(this)');
    para.appendChild(delButton);

    let delIcon = document.createElement('i');
    delIcon.setAttribute('class','far fa-trash-alt');
    delButton.appendChild(delIcon);

    document.querySelector('#input-bar').value = "";
    localStorage.setItem(newtask,task);
    }
    else{
        document.querySelector('#adder-button').disabled = true;
        document.querySelector('#adder-button').style.backgroundColor = 'rgb(136, 136, 136)';
        document.querySelector('#input-bar').value = "Can't add more than 7 task";
        document.querySelector('#input-bar').disabled = true;
    }
});

function deleter(elem){
    let idHolder = '#'+elem.parentNode.id;
    let dele = document.querySelector(idHolder);
    console.log(idHolder.substring(1));
    localStorage.removeItem(idHolder.substring(1));
    document.querySelector('.task-list').removeChild(dele);
    document.querySelector('#adder-button').disabled = false;
    document.querySelector('#adder-button').style.backgroundColor = 'black';
    document.querySelector('#input-bar').value = "Add tasks";
    document.querySelector('#input-bar').disabled = false;
}