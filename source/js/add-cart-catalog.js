var overlayHare = document.querySelector('.overlay--hare');
var overlayBowl = document.querySelector('.overlay--bowl');
var overlayToys = document.querySelector('.overlay--toys');
var modalHare = document.querySelector('.add-cart--hare');
var modalBowl = document.querySelector('.add-cart--bowl');
var modalToys = document.querySelector('.add-cart--toys');
var addCartHare = document.querySelector('.item__cart--hare');
var addCartBowl = document.querySelector('.item__cart--bowl');
var addCartToys = document.querySelector('.item__cart--toys');


  addCartHare.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalHare.classList.add('item__modal-show');
    overlayHare.classList.add('item__modal-show');
    modalHare.classList.add('item__animation');
  });

  addCartBowl.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalBowl.classList.add('item__modal-show');
    overlayBowl.classList.add('item__modal-show');
    modalBowl.classList.add('item__animation');
  });

  addCartToys.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalToys.classList.add('item__modal-show');
    overlayToys.classList.add('item__modal-show');
    modalToys.classList.add('item__animation');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modalHare.classList.contains('item__modal-show')) {
        modalHare.classList.remove('item__modal-show');
        overlayHare.classList.remove('item__modal-show');
        modalHare.classList.remove('item__animation');
      }
      if (modalBowl.classList.contains('item__modal-show')) {
        modalBowl.classList.remove('item__modal-show');
        overlayBowl.classList.remove('item__modal-show');
        modalBowl.classList.remove('item__animation');
      }
      if (modalToys.classList.contains('item__modal-show')) {
        modalToys.classList.remove('item__modal-show');
        overlayToys.classList.remove('item__modal-show');
        modalToys.classList.remove('item__animation');
      }
    }
  });

  overlayHare.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalHare.classList.remove('item__modal-show');
    overlayHare.classList.remove('item__modal-show');
    modalHare.classList.remove('item__animation');
  });

  overlayBowl.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalBowl.classList.remove('item__modal-show');
    overlayBowl.classList.remove('item__modal-show');
    modalBowl.classList.remove('item__animation');
  });

  overlayToys.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalToys.classList.remove('item__modal-show');
    overlayToys.classList.remove('item__modal-show');
    modalToys.classList.remove('item__animation');
  });
