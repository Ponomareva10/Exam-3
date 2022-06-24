const btn = document.querySelector('.info__btn');
const modal = document.querySelector('.modal');
const bgModal = document.querySelector('.bg-color');
const messageBtn = document.querySelector('.modal__btn');

btn.addEventListener('click', function() {
  modal.style.display = 'block';
  bgModal.style.display = 'block';
});

messageBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  bgModal.style.display = 'none';
});

bgModal.addEventListener('click', function() {
  modal.style.display = 'none';
  bgModal.style.display = 'none';
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    bgModal.style.display = 'none';
  }
});

const imgArray = [
  {
    src: "./assets/img1.png",
    id: 0,
  },
  {
    src: "./assets/img2.png",
    id: 1,
  },
  {
    src: "./assets/img3.png",
    id: 2,
  },
  {
    src: "./assets/img4.png",
    id: 3,
  },
  {
    src: "./assets/img5.png",
    id: 4,
  },
  {
    src: "./assets/img6.png",
    id: 5,
  },
  {
    src: "./assets/img7.png",
    id: 6,
  },
  {
    src: "./assets/img8.png",
    id: 7,
  },
];

const imgModal = document.querySelectorAll('.image__container');
const img = document.getElementById('1');

const arrModal = Array.from(imgModal);
const itemModal = document.querySelector('.image__item--modal');
const imgBtn = document.querySelector('.opasity');
const windModal = document.querySelector('.image__modal');

arrModal.forEach((item, index) => {
  item.addEventListener('click', function () {
    if(index == imgArray[0].id) {
      img.src = imgArray[0].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    } else if (index == imgArray[1].id) {
      itemModal.src = imgArray[1].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    } else if (index == imgArray[2].id) {
      itemModal.src = imgArray[2].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    } else if (index == imgArray[3].id) {
      itemModal.src = imgArray[3].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    } else if (index == imgArray[4].id) {
      itemModal.src = imgArray[4].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    } else if (index == imgArray[5].id) {
      itemModal.src = imgArray[5].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    } else if (index == imgArray[6].id) {
      itemModal.src = imgArray[6].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    } else if (index == imgArray[7].id) {
      itemModal.src = imgArray[7].src;
      windModal.style.display = 'block';
      bgModal.style.display = 'block';
    }          
  });
});

bgModal.addEventListener('click', function() {
  windModal.style.display = 'none';
});