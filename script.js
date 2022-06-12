// declaring the DOM Elements
const form = document.getElementById("PG--form");
const resultDOM = document.getElementById("result");
const lengthDOM = document.getElementById("length");
const upperCaseDOM = document.getElementById("upperCase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const copybtnDOM = document.getElementById("copy");
const generateBtn = document.getElementById("submit");
// Genrating Character Codes For The Application
const UPPERCASE_Codes = arrayFromLowToHigh(65, 90);
const LOWERCASE_Codes = arrayFromLowToHigh(97, 122);
const NUMBER_Codes = arrayFromLowToHigh(48, 57);
const SYMBOL_Codes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

// Copy Password Btn

copybtnDOM.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const passwordToCopy = resultDOM.innerText;
  // In Case when Password is Empty
  if (!passwordToCopy) return;
  // Copy Functionality
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("coppy");
  textarea.remove();
  alert("Password Copied to Clipboard");
});

// Checking the options that are selected and setting the password

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  const includeUppercase = upperCaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});
//The Password Generating Function

let generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = LOWERCASE_Codes;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_Codes);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_Codes);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_Codes);
  const passwordCharacters = [];

  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
};
// Character Code Generating Function
function arrayFromLowToHigh(low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
