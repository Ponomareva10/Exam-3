const btn = document.querySelector('.info__btn');
const modal = document.querySelector('.modal');
const bgModal = document.querySelector('.bg-color')
const messageBtn = document.querySelector('.modal__btn');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
  bgModal.style.display = 'block';
})

messageBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  bgModal.style.display = 'none';
})

bgModal.addEventListener('click', function() {
  modal.style.display = 'none';
  bgModal.style.display = 'none';
})

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    bgModal.style.display = 'none';
  }
})