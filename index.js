window.addEventListener('DOMContentLoaded', function () {
  'use strict';


  let timesOfDay;
  let dayOfWeek;
  let daysLeft;
  let dateNow = new Date().toLocaleTimeString('en');


  // Время суток
  function getTimesOfDay() {
    let myDate = new Date().getHours();
    if (myDate >= 6 && myDate < 12) {
      timesOfDay = 'Доброе утро!'
    } else if (myDate >= 12 && myDate < 18) {
      timesOfDay = 'Добрый день!'
    } else if (myDate >= 18 && myDate < 24) {
      timesOfDay = 'Добрый вечер!'
    } else {
      timesOfDay = 'Доброй ночи!'
    }
    return timesOfDay
  }
  getTimesOfDay();

  // День недели
  function getDayOfWeek() {
    let myDate = new Date();
    dayOfWeek = myDate.toLocaleString('ru', { weekday: 'long' });
    dayOfWeek = dayOfWeek[0].toUpperCase() + dayOfWeek.substring(1);
    return dayOfWeek
  }
  getDayOfWeek();

  // Таймер до нового года
  function newYearTimer() {
    let stopDay = new Date('01 January 2021').getTime();
    let nowDay = new Date().getTime();
    let oneDay = 24 * 60 * 60 * 1000;
    daysLeft = Math.floor((stopDay - nowDay) / oneDay);
    let dayname = ""
    let ds = "" + daysLeft
    let dd = parseInt(ds.substr(ds.length - 1))
    if (daysLeft > 4 && daysLeft < 21) {
      dayname = " дней"
    } else if (dd == 1) {
      dayname = " день"
    } else if (dd == 2 || dd == 3 || dd == 4) {
      dayname = " дня"
    } else {
      dayname = " дней"
    }
    daysLeft += dayname;

    return daysLeft
  }
  newYearTimer();

  document.write(`${timesOfDay}<br>
    Сегодня: ${dayOfWeek}<br>
    Текущее время: ${dateNow}<br>
    До нового года осталось: ${daysLeft}`);
})






// let timesOfDay = newYearTimer.getTimesOfDay();
// let dateNow = newYearTimer.date;
// console.log(newYearTimer);

// Добрый день (утро, вечер, ночь в зависимости от времени суток)
// Сегодня: Понедельник
// Текущее время:12:05:15 PM
// До нового года осталось 175 дней