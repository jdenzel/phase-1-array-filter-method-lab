// Code your solution here
function findMatching(list, name){
    let driver = list.filter((num) => num == name || num == name.toLowerCase());
    return driver;
} 
function fuzzyMatch(list, letters){
    let driver = list.filter((name) => name.startsWith(letters));
    return driver;
}
function matchName(list, string){
    let driver = list.filter((obj) => obj.name === string);
    return driver;
}