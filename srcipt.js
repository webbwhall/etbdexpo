function clickedMe(){
    let objectClicked = document.getElementById('clickable');
    objectClicked.classList.add('purple');
}
function pageLocation(page){
    window.location.href = page + ".html";
}