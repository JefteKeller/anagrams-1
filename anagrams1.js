const button = document.getElementById("findButton");

button.onclick = function () {
  let typedText = document.getElementById("input").value;

  let anagrams = getAnagramsOf(typedText);

  const resultDiv = document.getElementById("result");

  const resultTitle = document.createElement("h2");
  resultTitle.textContent = "Anagramas Encontrados";
  resultDiv.appendChild(resultTitle);

  const resultPara1 = document.createElement("p");
  resultPara1.textContent = anagrams;
  resultDiv.appendChild(resultPara1);
};

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(input) {
  let sortedText = alphabetize(input);

  let words = palavras.filter(function (input) {
    return input.length == sortedText.length;
  });

  let filteredWords = [];
  let max = words.length;

  for (let i = 0; i < max; i++) {
    let currentWord = alphabetize(words[i]);

    if (currentWord == sortedText) {
      filteredWords.push(` ${words[i]}`);
    }
  }
  return filteredWords;
}
