import './style.css';

var pageIsMobile = (function () {
  try {
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
    if (isMobile.any()) return true;
    else return false;
  } catch (e) {
    return false;
  }
})();

if (!pageIsMobile) {
  document.body.innerHTML = '';
  let title = document.createElement('h1');
  title.textContent = 'Somente no celular!!!!!!!';
  title.setAttribute('style', 'text-align: center; font-size: 4rem;');
  document.body.appendChild(title);
} else {
  const targetDate = new Date('2024-06-27T00:00:00').getTime();

  const countdownInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = padZero(days);
    document.getElementById('hours').innerText = padZero(hours);
    document.getElementById('minutes').innerText = padZero(minutes);
    document.getElementById('seconds').innerText = padZero(seconds);

    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      console.log('aconteceu');
    }
  }, 1000);

  function padZero(number) {
    return number < 10 ? '0' + number : number;
  }
}
