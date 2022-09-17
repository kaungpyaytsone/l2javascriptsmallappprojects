var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',function(e){
    // console.log('i am working');

    addnew();
    e.preventDefault();
});

function addnew(){
    var todotext = gettextbox.value;
    // console.log(todotext);

    const li = document.createElement('li');
    li.textContent = todotext;
    
    console.log(li);
}