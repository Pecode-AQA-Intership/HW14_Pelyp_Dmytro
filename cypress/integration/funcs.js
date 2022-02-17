export function randomSubject () {const myArray = ["English", "Chemistry", "Computer Science", "Commerce", "Economics", "Social Studies", "Maths", "Accounting", "Arts", "History", "Physics", "Biology", "Hindi", "Civics"];
const rand = Math.floor(Math.random()*myArray.length);
return myArray[rand];}