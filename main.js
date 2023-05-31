const shareBtn = document.getElementById('share-icon-wrapper');
const shareWrapper = document.querySelector('.share-wrapper');
const shareIconPath = document.querySelector('.share-icon-path');

shareBtn.addEventListener('click', () => {
  if (shareWrapper.classList.contains('active')) {
    shareBtn.classList.remove('active');
    shareWrapper.classList.remove('active');
    shareIconPath.classList.remove('active');
  } else {
    shareBtn.classList.add('active');
    shareWrapper.classList.add('active');
    shareIconPath.classList.add('active');
  }
});
