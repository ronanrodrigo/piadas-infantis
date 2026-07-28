(() => {
  const jokes = Array.isArray(window.JOKES) ? window.JOKES : [];
  const loading = document.querySelector("#joke-loading");
  const content = document.querySelector("#joke-content");
  const question = document.querySelector("#joke-heading");
  const answer = document.querySelector("#joke-answer");
  const answerBox = document.querySelector("#answer-box");
  const revealButton = document.querySelector("#reveal-button");
  const newJokeButton = document.querySelector("#new-joke-button");
  let currentIndex = -1;

  const chooseIndex = () => {
    if (jokes.length < 2) return 0;
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * jokes.length);
    }
    return nextIndex;
  };

  const showJoke = () => {
    if (!jokes.length) {
      loading.textContent = "😅";
      loading.hidden = false;
      return;
    }

    currentIndex = chooseIndex();
    const joke = jokes[currentIndex];
    question.textContent = `${joke.emoji || "😄"} ${joke.question}`;
    answer.textContent = joke.answer;
    answerBox.hidden = true;
    revealButton.hidden = false;
    revealButton.disabled = false;
    revealButton.textContent = "Mostrar continuação";
    newJokeButton.hidden = false;
    loading.hidden = true;
    content.hidden = false;
  };

  revealButton.addEventListener("click", () => {
    answerBox.hidden = false;
    revealButton.disabled = true;
    revealButton.textContent = "Continuação mostrada";
  });

  newJokeButton.addEventListener("click", showJoke);
  showJoke();
})();
