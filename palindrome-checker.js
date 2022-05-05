function palindrome(str) {
  //Get rid of anything no alphanumeric
  str = str.replace(/[\W_]/g, "").toLowerCase();
  console.log(str)
  //Spread into Array to iterate through
  let newStr = [...str];
  //Check comapare each letter to the one on the opposite side of the word
  for(let i = 0; i < newStr.length/2; i++){
    if(newStr[i] !== newStr[newStr.length - 1 - i]){
      return false;
    }
  }
  //if all letters check out it will get here
  return true;
}
