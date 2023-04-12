const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

const monthDays = document.querySelector(".days");

const lastDay = new Date(date.getFullYear(), date.getMonth() + 1 ,0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

const nextDays = 7 - lastDayIndex - 1;

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = `Today: ${new Date().toDateString()}`;

let days = "";

 for(let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div> `
    }

    for(let i = 1; i <= lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class = "today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
        
    }

    for(let y = 1; y <= nextDays; y++) {
        days += `<div class="next-date">${y}</div>`;
    }

    monthDays.innerHTML = days;
};

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

renderCalendar();

const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  let am_pm = 'AM';

  const html = 
  `
  <span>${h}</span> : 
  <span>${m}</span> : 
  <span>${s}</span>
  <span class="ampm">${am_pm}</span>
  `; 

clock.innerHTML = html;
};

setInterval(tick, 1000);