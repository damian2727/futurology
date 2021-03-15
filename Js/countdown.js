const getRemainTime = deadLine => {
    let now =  new Date(),
    remainTime = (new Date(deadLine) - now + 1000)/1000,
    remainSecond = ('0' + Math.floor(remainTime  % 60)).slice(-2),
    remainMinutes =('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours =('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));
    

return {
    remainTime,
    remainSecond,
    remainMinutes,
    remainHours,
    remainDays
    
}
};
const countdown = (deadLine, elem, finalmessage) =>{
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadLine);
        el.innerHTML =   `<div class="container bg-container"><div class="row"><div class="col-2 espacio-reloj-1">${t.remainHours}<div class="dias">Horas</div></div><div class="col-2 espacio-reloj">${t.remainMinutes}<div class="dias2">Minutos</div></div></div></div>`;

        if (t.remainTime <= 1 ) {
            clearInterval(timerUpdate);
            el.innerHTML = finalmessage;
        }
    },1000)

};
countdown('Apr 14 2021 18:54:08 GMT-0500', 'clock');