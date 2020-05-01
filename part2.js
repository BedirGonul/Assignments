<!DOCTYPE html>
<html>
 <head>
   <body>
  	<p>Click the button to replace "Microsoft" with           "W3Schools" in the paragraph below:</p>

	<p> Please input a number </p>
    <input type="text" maxlength="12" class="textinput">
    
	 <script>
     var numsAndKeys = [];
//allows for keys from the numpad/keypad so as to
//prevent the user from inputting letters
const keypadZero = 48;

//add key codes for digits 0 - 9
for (var i = 0; i <= 9; i++) {
  numsAndKeys.push(i + keypadZero);
}
//when a key is pressed
function onKeyDown(e) {
  //if not contained in numsAndKeys
  if (numsAndKeys.indexOf(e.keyCode) < 0) {
    //preventDefault prevents the key from being displayed, in this case, if it is not a number
    e.preventDefault();
    return false;
  }
}

// replaces the input with the formatted version
function onKeyUp(e){
  var input = e.target;
  var formatted = formatPhoneText(input.value);
  input.value = formatted;
}

// formats the phonenumber into xxx-xxx-xxxx format depending on the length
function formatPhoneText(value) {
  // replace the extra '-'
  value = value.trim().split("-").join("");

  if (value.length >= 3 && value.length < 6)
    value = value.slice(0, 3) + "-" + value.slice(3);
  else if (value.length >= 6)
    value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);

  return value;
}

function setupInput(className){
  //retrieve the input
  var phoneFields = document.getElementsByClassName(className);

  for (var i = 0; i < phoneFields.length; i++){
    var input = phoneFields[i];
    if (input.type.toLowerCase() == "text") {
      input.placeholder = "Enter a phone number";
      // attach event handlers to the input field
      input.addEventListener("keydown", onKeyDown);
      input.addEventListener("keyup", onKeyUp);
    }
  }
}

// retrieves the input, formats it, validates it
setupInput("textinput");

</script>
	</body>
</html>
