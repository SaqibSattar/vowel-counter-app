function countVowels() {
  const text = document.getElementById("inputText").value.toLowerCase();
  const vowelCount = countOccurrences(text, isVowel);

  const result = document.getElementById('result');
  result.textContent = `Total Vowels: ${vowelCount}`;
}

function countOccurrences(str, condition) {
  return str.split('').filter(condition).length;
}

function isVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}
