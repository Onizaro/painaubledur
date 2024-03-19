
function spancreation(selector, classe) {
    const title = document.getElementById(selector);
    let letters = title.textContent.split('');
    title.innerHTML= '';
    for (let i = 0 ; i < letters.length; i++){
        
        title.innerHTML += '<span class="'+classe+'">'+letters[i]+'</span>';
    }

    return 0;
}

spancreation('title', 'letter');