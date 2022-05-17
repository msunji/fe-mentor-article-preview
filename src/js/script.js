console.log('test script');

const shareButton = document.querySelector('.article__details__share__button');
const shareOptions = document.querySelector(
  '.article__details__share__options'
);

const handleShare = () => {
  console.log('firing');
  shareOptions.classList.toggle('active');
};
