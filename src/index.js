const ones = ['zero','one', 'two', 'three', 'four', 'five','six','seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const onesForTens = ['','one', 'two', 'three', 'four', 'five','six','seven', 'eight', 'nine', 'ten']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hndrs = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred','six hundred','seven hundred', 'eight hundred', 'nine hundred']

module.exports = function toReadable (number) {
  let num = number;
  let str = String(num); // number in string
  if (str.length === 1) {  //for 1 
    return ones[number];
} 
  else if (str.length === 2 && str[0]==='1') { // >10 <20
  let c = Number((str[0]+str[1]))
  return ones[c];
} 
  else if (str.length === 2 && str[0]>='2') {  //>20
  let one = Math.floor((number/1)%10);
  let ten = Math.floor((number/10)%10);
  return (tens[ten]+' '+onesForTens[one]).trim();
} 
  else if(str.length === 3 && (str[1]=== '0'&& str[2]==='0')) {   //100,200, -00.
  let hundred= Math.floor((number/100)%10);
  return hndrs[hundred];
} 
  else if(str.length === 3 && (str[1]=== '0'|| str[1]==='1')) { //from -01 till -19
  let a = Number((str[1]+str[2]));
  let hundred= Math.floor((number/100)%10);
  return hndrs[hundred]+' '+ ones[a];
} 
  else if(str.length === 3 && str[1]>=2 && str[2]===0) { //-20, -30, -40
  let one = Math.floor((number/1)%10);
  let ten = Math.floor((number/10)%10);
  let hundred= Math.floor((number/100)%10);
  return (hndrs[hundred]+tens[ten]).trim();
} 
  else if(str.length === 3 && str[1]>=2 && str[2]!==0) { //> -20 and != --0
  let one = Math.floor((number/1)%10);
  let ten = Math.floor((number/10)%10);
  let hundred= Math.floor((number/100)%10);
  return (hndrs[hundred]+' '+tens[ten]+' '+ onesForTens[one]).trim();
} 

else {
  return 'Give number in range 0-999'
}
}
