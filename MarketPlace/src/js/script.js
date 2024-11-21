const showCatalog = () =>{
    const catalogModal = document.querySelector('.modal-catalog')
    catalogModal.addEventListener
    catalogModal.classList.toggle('show')
}


const mainSectionCards = document.querySelector('.main-section-cards');
mainSectionCards.addEventListener('mouseover', (e)=>{
    sectionCardsEvent(e);
})
const sectionCardsEvent = (e) =>{
    let card = e.target.closest('.cards-item');
    if(!card) return;
    showCardBtns(card)
}

const showCardBtns = (item) =>{
    const toBasket = item.querySelector('.cards-item__img-to-basket');
    const toFavorite = item.querySelector('.cards-item__img-to-favorite');
    toBasket.classList.toggle('show');
    toFavorite.classList.toggle('show');
}

for(let i = 1; i <= 20; i++){
    mainSectionCards.insertAdjacentHTML('beforeend','<div class="cards-item"><a href="#" class="cards-item__img"><img src="imgs/no-game-here.png" alt="no-game-here"><div class="cards-item__img-to-basket btn">В корзину</div><div class="cards-item__img-to-favorite"><svg width="100%" height="100%" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5355 3.46436C19.4881 5.41698 19.4881 8.5828 17.5355 10.5354L10.7071 17.3639C10.3166 17.7544 9.68341 17.7544 9.29288 17.3639L2.46447 10.5354C0.511845 8.5828 0.511845 5.41698 2.46447 3.46436C4.0168 1.91202 5.89056 1.43671 7.78125 2.35927C8.53167 2.72543 9.51561 3.46436 9.99999 4.42958C10.4844 3.46436 11.4683 2.72543 12.2187 2.35927C14.1094 1.43671 15.9832 1.91202 17.5355 3.46436Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></a><a href="#" class="cards-item__title">GAME NO-x</a><div class="cards-item__price"><div class="cards-item__price-current">700р</div><div class="cards-item__price-discount">5%</div></div></div>')
}