//your JS code here. If required.
function  daysOfYear(year) {
const isLeapYear = ((year%4===0 && year%100!==0)||(year%400===0));
return isLeapYear?366:365;
}
const year = prompt("enter the year");

	alert(`number of days in year${year} : ${daysOfYear(year)}`);
