var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);


var familyAge = [2,3,39,37,9];
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(olderThanFive);

//Ascending
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

//Descending
var familyAge = [3,2,39,37,9];
sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

/*var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);*/

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
sliced = words.slice(3, );
console.log(sliced);
console.log(words);