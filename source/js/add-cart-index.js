var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.add-cart');
var orderButton = document.querySelector('.popular-item__order');

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

  orderButton.addEventListener('click', function (evt) {
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
