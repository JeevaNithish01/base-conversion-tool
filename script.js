function _(id){
   return document.getElementById(id);
}

var from = _("from");
var to = _("to");
var valid = /[^01]/;
var validOctal = /[^01234567]/;
var validDecimal = /[^0123456789]/;
var validHexaDecimal = /[^0123456789ABCDEFabcdef]/;
var r = "";

function print(val){
  return console.log(val);
}

function text(){
  _("num").style.opacity = 1;
  _("inp").removeAttribute('placeholder');
  _("num").style.transform = "translateY(22px)";
}

function reset(){
  _("num").style.opacity = 0;
  _("inp").setAttribute('placeholder', 'Enter a number here');
  _("num").style.transform = "translateY(35px)";
}

function clearBox(){
  _("inp").value = "";
}

function validate() {

  if(!inp.value){
    _("output").textContent = "Empty value";
    _("output").style.color = "red";
  }

  
  else if(from.value == "2 (Binary)") {
    if(valid.test(_("inp").value)){
    _("output").textContent = "Error bin char";
    _("output").style.color = "red";
    }
    else{
      binaryConversion();
    }
  }
  else if(from.value == "8 (Octal)"){
    if(validOctal.test(_("inp").value)){
    _("output").textContent = "Error octal char";
    _("output").style.color = "red";
    }
    else {
      octalConversion();
    }
    
  }
  else if (from.value == "10 (Decimal)"){
    if(validDecimal.test(_("inp").value)){
    _("output").textContent = "Error decimal char";
    _("output").style.color = "red";
    }
    else {
      decimalConversion();
    }
  }
  else if (from.value == "16 (Hexadecimal)"){
    if(validHexaDecimal.test(_("inp").value)){
    _("output").textContent = "Error hexa char";
    _("output").style.color = "red";
    }
    else {
      hexaConversion();
    }
  }
}

function binaryConversion() {
  if(to.value == "2 (Binary)") {
    _("output").textContent = "Can't convert same value";
    _("output").style.color = "red";
  }
  else if (to.value == "8 (Octal)"){
    r = "";
    let decimal = toDecimal(inp.value, 2);
    _("output").textContent = decimalToAnyBase(decimal, 8);
    _("output").style.color = "green";
  } 
  else if(to.value == "10 (Decimal)") {
    _("output").textContent = toDecimal(inp.value, 2);
    _("output").style.color = "green";
  }
  else if(to.value == "16 (Hexadecimal)") {
    r = "";
    let decimal = toDecimal(inp.value, 2); 
    _("output").textContent = decimalToAnyBase(decimal, 16);
    _("output").style.color = "green";
  }
}

function octalConversion(){
  if(to.value == "8 (Octal)") {
    _("output").textContent = "Can't convert same value";
    _("output").style.color = "red";
  }

  else if(to.value == "2 (Binary)") {
    r ="";
    let decimal = toDecimal(inp.value, 8);
    _("output").textContent = decimalToAnyBase(decimal, 2);
    _("output").style.color = "green";
  }

  else if(to.value == "10 (Decimal)") {
    r ="";
    let decimal = toDecimal(inp.value, 8);
    _("output").textContent = decimal;
    _("output").style.color = "green";
  }
  else if(to.value == "16 (Hexadecimal)") {
    r ="";
    let decimal = toDecimal(inp.value, 8);
    _("output").textContent = decimalToAnyBase(decimal, 16);
    _("output").style.color = "green";
  }
}

function decimalConversion() {
  if(to.value == "10 (Decimal)") {
    _("output").textContent = "Can't convert same value";
    _("output").style.color = "red";
  }

  else if(to.value == "2 (Binary)") {
    r ="";
    _("output").textContent = decimalToAnyBase(inp.value, 2);
    _("output").style.color = "green";
  }

  else if(to.value == "8 (Octal)") {
    r ="";
    _("output").textContent = decimalToAnyBase(inp.value, 8);
    _("output").style.color = "green";
  }
  else if(to.value == "16 (Hexadecimal)") {
    r ="";
    _("output").textContent = decimalToAnyBase(inp.value, 16);
    _("output").style.color = "green";
  }
}

function hexaConversion() {
  if(to.value == "16 (Hexadecimal)") {
    _("output").textContent = "Can't convert same value";
    _("output").style.color = "red";
  }
  else if(to.value == "2 (Binary)") {
    r="";
    var deciNumberForHex = hexToDec(inp.value);
    _("output").textContent = decimalToAnyBase(deciNumberForHex, 2);
    _("output").style.color = "green";
  }
  else if(to.value == "8 (Octal)") {
    r="";
    deciNumberForHex = hexToDec(inp.value);
    _("output").textContent = decimalToAnyBase(deciNumberForHex, 8);
    _("output").style.color = "green";
  }
  else if(to.value == "10 (Decimal)") {
    r="";
    _("output").textContent = hexToDec(inp.value);
    _("output").style.color = "green";
  }
}

function hexToDec(k) {
  var deciNum = 0;
  let reversed = reverseString(k);
  for(let i = 0; i<reversed.length; i++){
    if(reversed[i]== "A" || reversed[i]== "a"){
      deciNum+= (10 * (16 ** i));
    }
    else if(reversed[i]== "B" || reversed[i]== "b"){
      deciNum+= (11 * (16 ** i));
    }
    else if(reversed[i]== "C" || reversed[i]== "c"){
      deciNum+= (12 * (16 ** i));
    }
    else if(reversed[i]== "D" || reversed[i]== "d"){
      deciNum+= (13 * (16 ** i));
    }
    else if(reversed[i]== "E" || reversed[i]== "e"){
      deciNum+= (14 * (16 ** i));
    }
    else if(reversed[i]== "F" || reversed[i]== "f"){
      deciNum+= (15 * (16 ** i));
    }
    else {
      deciNum += (reversed[i] * (16 ** i));
    }
  }
  return deciNum;
}

function toDecimal(num, arg) {
  var decimalNumber = 0;
    let reversed = reverseString(num);
    for(let i = 0; i<reversed.length; i++){
      decimalNumber+= (reversed[i] * (arg ** i));
    }
  return decimalNumber;
}

function decimalToAnyBase(n,m){
  while(n>0){
     var r2 = n % m;
    if (r2==10){
      r2="A";
    }
     else if (r2==11){
      r2="B";
    }
      else if (r2==12){
      r2="C";
    }
      else if (r2==13){
      r2="D";
    }
      else if (r2==14){
      r2="E";
    }
      else if (r2==15){
      r2="F";
    }
      
   r+=r2;
   n = parseInt(n/m);
      
  }
  return reverseString(r);
}

function reverseString(str){
  if(str === ""){
    return "";
  }
  else {
    return reverseString(str.substr(1)) + str.charAt(0);

  }
}
