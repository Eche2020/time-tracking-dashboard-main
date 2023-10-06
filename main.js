const qs = (param) => document.querySelector(param);
const qsa = (param) => document.querySelectorAll(param);
const iconEllipsis = qsa(".icon-ellipsis");
const daily = qs("#daily");
const weekly = qs("#weekly");
const monthly = qs("#monthly");
const subjectArray = qsa(".subject");
const ArrayHoursText = document.querySelectorAll(".text-hrs");
const lastHourArray = document.querySelectorAll(".l-w-hours-span");
const url = "./data/data.json";

fetch(url)
	.then((response) => response.json())
	.then((data) => (finalData = data));

daily.addEventListener("click", () => {
	monthly.classList.toggle("active", false);
	weekly.classList.toggle("active", false);
	daily.classList.toggle("active");
	for (let index = 0; index <= 5; index++) {
		subjectArray[index].innerHTML = finalData[index].title;
		ArrayHoursText[index].innerHTML = finalData[index].timeframes.daily.current;
		lastHourArray[index].innerHTML = finalData[index].timeframes.daily.previous;
	}
});

weekly.addEventListener("click", () => {
	daily.classList.toggle("active", false);
	monthly.classList.toggle("active", false);
	weekly.classList.toggle("active");
	for (let index = 0; index <= 5; index++) {
		subjectArray[index].innerHTML = finalData[index].title;
		ArrayHoursText[index].innerHTML =
			finalData[index].timeframes.weekly.current;
		lastHourArray[index].innerHTML =
			finalData[index].timeframes.weekly.previous;
	}
});

monthly.addEventListener("click", () => {
	daily.classList.toggle("active", false);
	weekly.classList.toggle("active", false);
	monthly.classList.toggle("active");
	for (let index = 0; index <= 5; index++) {
		subjectArray[index].innerHTML = finalData[index].title;
		ArrayHoursText[index].innerHTML =
			finalData[index].timeframes.monthly.current;
		lastHourArray[index].innerHTML =
			finalData[index].timeframes.monthly.previous;
	}
});

