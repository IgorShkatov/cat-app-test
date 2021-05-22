document.querySelector('#sort-price-btn').onclick = mySortPrice;
function mySortPrice () {
    let cards = document.querySelector('.main_content-cards');
    for(let i = 0; i < cards.children.length; i++ ){
        for(let j = 0; j < cards.children.length; j++){
            if(+cards.children[i].getAttribute('data-price') < +cards.children[j].getAttribute('data-price')){
                replacedNode = cards.replaceChild(cards.children[i], cards.children[j]);
                insertAfterPrice(replacedNode, cards.children[i]);
                
            }
        }
    }
}

function insertAfterPrice(element, refElem){
    return refElem.parentNode.insertBefore(element, refElem.nextSibling);
}


