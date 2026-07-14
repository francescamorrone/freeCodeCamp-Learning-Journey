let year = 2024;


function isLeapYear(yearToCheck) {
  if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
    return `${yearToCheck} is a leap year.`;
  } else {
    return `${yearToCheck} is not a leap year.`;
  }
}

let result = isLeapYear(year);

console.log(result);