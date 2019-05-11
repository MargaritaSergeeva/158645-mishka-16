var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.add-cart');
var orderButton = document.querySelector('.popular-item__order');


  orderButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('popular-item__modal-show');
    overlay.classList.add('popular-item__modal-show');
    modal.classList.add('popular-item__animation');
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains('popular-item__modal-show')) {
        modal.classList.remove('popular-item__modal-show');
        overlay.classList.remove('popular-item__modal-show');
        modal.classList.remove('popular-item__animation');
      }
    }
  });

  overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('popular-item__modal-show');
    overlay.classList.remove('popular-item__modal-show');
    modal.classList.remove('popular-item__animation');
  });
