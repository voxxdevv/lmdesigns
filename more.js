// more.js

function copy() {
  // Get the text field
  var copyText = document.getElementById("txtInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the script inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied script
  alert("Copied the script: " + copyText.value);
}