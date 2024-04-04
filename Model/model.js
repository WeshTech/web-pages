let openbtn = document.getElementById('openbtn')
let modalbutton = document.getElementById('modelcontainer')
let closebtn = document.getElementById('closebtn')

openbtn.addEventListener('click', function(){
    modalbutton.style.display = 'block';

})
closebtn.addEventListener('click',function(){
    modalbutton.style.display = 'none';
})
window.addEventListener('click', function(e){
    if(e.target === modalbutton){
        modalbutton.style.display = 'none';
    }
})
