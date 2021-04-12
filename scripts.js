const app = {    
    country: null,
    init() {
        setInterval(() => {
            const date = new Date();
            app.launchTime(date);
            }, 1000);
        window.addEventListener('mousemove', (e) => app.parralax(e))
        app.toggle();
    },
    initialiseDate(date) {
        const data = document.querySelector('.data');
        const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}; 
        data.textContent = date.toLocaleDateString(undefined, options);
    },
    initialiseHours(date) {        
        const hours = document.querySelector('.time.hour');
        const numberHours = hours.querySelectorAll('.up, .down');
        let hoursNow = date.getHours();
        const hoursFormated = hoursNow.toString().padStart(2, '0');
        numberHours.forEach((element) => {
            const hourElement = element.querySelector('.dataTime');
            if (hourElement.textContent !== hoursFormated) {
                hourElement.textContent = hoursFormated;
                hours.classList.add('active');
            } else {
                hours.classList.remove('active');
            }
        });
    },
    initialiseMinutes(date) {        
        const minutes = document.querySelector('.time.minutes');
        const numberMinutes = minutes.querySelectorAll('.up, .down');
        let minutesNow = date.getMinutes();
        const minutesFormated = minutesNow.toString().padStart(2, '0');
        // console.log(minutesNow, minutesFormated);
        numberMinutes.forEach((element) => {
            const minuteElement = element.querySelector('.dataTime');
            if (minuteElement.textContent !== minutesFormated) {
                minuteElement.textContent = minutesFormated;
                minutes.classList.add('active');
            } else {
                minutes.classList.remove('active');
            }
        });
    },
    launchTime(date) {
        app.initialiseDate(date);
        app.initialiseHours(date);
        app.initialiseMinutes(date); 
    },
    parralax(e) {
        const box = document.querySelector('#box');
        let axeY = (window.innerWidth / 2 - e.pageX) / 50;
        let axeX = (window.innerWidth / 2 - e.pageY) / 50;
        // console.log(axeX, axeY);
        box.style.transform = `rotateY(${axeY}deg) rotateX(${axeX}deg)`;
        box.style.boxShadow = `-${axeY}px ${axeX}px 20px #454545`;
    },
    toggle() {
        const toggle = document.querySelector('.toggle');
        const colorElements = document.querySelectorAll('body, .slideOnOff, #box, .date > .data, .dataTime, .down, .up, .boxDot, .dot');
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            colorElements.forEach(element => {
                element.classList.toggle('active');
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', app.init);


