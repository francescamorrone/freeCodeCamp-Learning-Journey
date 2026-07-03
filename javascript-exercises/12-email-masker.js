function maskEmail(email) {
let atIndex = email.indexOf("@");
let firstLetter = email[0];
let lastLetter = email[atIndex - 1];
let asterisks = "*".repeat(atIndex - 2);
let domain = email.slice(atIndex);
return firstLetter + asterisks + lastLetter + domain;
} 

let email = "apple.pie@example.com";
console.log(maskEmail(email));

email = "freecodecamp@example.com";
console.log(maskEmail(email));

email = "info@test.dev";
console.log(maskEmail(email));

email = "user@domain.org";
console.log(maskEmail(email));