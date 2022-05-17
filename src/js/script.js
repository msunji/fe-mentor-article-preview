console.log('test script');

const shareButton = document.querySelector('.article__details__share__button');
const shareOptions = document.querySelector(
  '.article__details__share__options'
);

const handleShare = () => {
  shareOptions.classList.toggle('active');
};
