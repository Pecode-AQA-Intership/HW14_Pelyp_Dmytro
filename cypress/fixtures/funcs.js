export function randomSubject () {
const myArray = ["English", "Chemistry", "Computer Science", "Commerce", "Economics", "Social Studies", "Maths", "Accounting", "Arts", "History", "Physics", "Biology", "Hindi", "Civics"];
const rand = Math.floor(Math.random()*myArray.length);
return myArray[rand];
}

export function randomState () {
const myArray = ["NCR", "Uttar Pradesh", "Haryana", "Rajasthan"];
const rand = Math.floor(Math.random()*myArray.length);
return myArray[rand];
}
const { _ } = Cypress;

export const toStrings = (cells$) => _.map(cells$, 'textContent');
export const toNumbers = (prices) => _.map(prices, Number);
