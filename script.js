
function spancreation() {
    const title = document.querySelector('h1');
    let letters = title.textContent.split('');
    title.innerHTML= '';
    for (let i = 0 ; i < letters.length; i++){
        
        title.innerHTML += '<span class="letter">'+letters[i]+'</span>';
    }

    return 0;

}

spancreation();