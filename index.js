const colors = require("colors/safe");
const EventEmitter = require('events');

class Timers {
    constructor({ hour,day,month,year }) {
        this.hour = hour.getDate();
        this.day = day.getDate();
        this.month = month.getDate();
        this.year = year.getDate();
    }

	static showTimer(hour,day,month,year) {
		let start = Date.now();
		hour;
		if (hour>start) {
			for (let i = hour-start; i > start-1; i--) {
			  console.log(i+" часов");
			}
		}
		if (day>start) {
			for (let i = day-start; i > start-1; i--) {
			  console.log(i+" дней");
			}
		}
		if (month>start) {
			for (let i = month-start; i > start-1; i--) {
			  console.log(i+" месяцев");
			}
		}
		if (year>start) {
			for (let i = year-start; i > start-1; i--) {
			  console.log(i+" лет");
			}
		}
	}
}

const delay = (ms) => {
  return Promise.resolve(resolve => setTimeout(resolve, ms));
}

const generateTimer = (hour,day,month,year) => {
    const params = {hour,day,month,year};
    return new Timers(params);
	return delay(intervalValue).then(() => new Customer(params));
}

const emitter = new EventEmitter();

emitter.on(Timers.showTimer(23,12,10,2022));



