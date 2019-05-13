var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.add-cart');
var addCartHare = document.querySelector('.item__cart--hare');
var addCartBowl = document.querySelector('.item__cart--bowl');
var addCartToys = document.querySelector('.item__cart--toys');

var modalOpen = function () {
  modal.classList.add('add-cart--modal-show');
  overlay.classList.add('overlay--show');
  modal.classList.add('add-cart--animation');
}

var modalClose = function () {
  modal.classList.remove('add-cart--modal-show');
  overlay.classList.remove('overlay--show');
  modal.classList.remove('add-cart--animation');
}

  addCartHare.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalOpen ();
  });

  addCartBowl.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalOpen ();
  });

  addCartToys.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalOpen ();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('add-cart--modal-show')) {
        modalClose ();
      }
    }
  });

  overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalClose ();
  });
