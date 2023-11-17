//your JS code here. If required.
function daysOfAYear(year) {
  // Check if the year is a leap year, considering century years
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Return the number of days based on leap year status
  return isLeapYear ? 366 : 365;
}

// Take user input for the year
const userYear = prompt("Enter a year:");

// Convert the user input to a number
const userYearNumber = parseInt(userYear);

// Check if the input is a valid number
if (!isNaN(userYearNumber)) {
  alert(`Number of days in ${userYearNumber}: ${daysOfAYear(userYearNumber)} days`);
} else {
 alert("Invalid input. Please enter a valid year.");
}
