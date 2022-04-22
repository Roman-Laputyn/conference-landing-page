// время для обратного отсчета
let countDownDate = new Date('26 Sep, 2022 00:00:01').getTime();

// Обновляем таймер каждую секунду

let countDownFunction = setInterval(function () {

   // Время на данный момент
   let now = new Date().getTime();

   // Высчитываем промежуток времени между установленным и сегдня
   let distance = countDownDate - now;

   // Определяем время для дней, часов, минут и секунд
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   let sec = Math.floor((distance % (1000 * 60)) / 1000);

   // Результат на сайт
   document.getElementById('days').innerText = days;
   document.getElementById('hours').innerText = hours;
   document.getElementById('minutes').innerText = minutes;
   document.getElementById('seconds').innerText = sec;

   if (distance < 0) {
      clearInterval(countDownFunction);
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
   }

})
//================================================================================

//toTop
window.addEventListener('scroll', () => {
   let scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled > 300) {
      setTimeout(() => {
         document.querySelector('.top-button').style.display = 'block';
      }, 400);
   } else {
      setTimeout(() => {
         document.querySelector('.top-button').style.display = 'none';
      }, 400);
   }
})
let scrolledY;
let timer;
document.querySelector('.top-button').addEventListener('click', () => {
   scrolledY = window.pageYOffset;
   scrollToTop();
})
function scrollToTop() {
   if (scrolledY > 0) {
      window.scrollTo(0, scrolledY);
      scrolledY -= 200;
      timer = setTimeout(scrollToTop, 50);
   }
   else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
   }
}
//================================================================================