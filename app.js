(() => {
  const jokes = Array.isArray(window.JOKES) ? window.JOKES : [];
  const loading = document.querySelector("#joke-loading");
  const content = document.querySelector("#joke-content");
  const question = document.querySelector("#joke-heading");
  const answer = document.querySelector("#joke-answer");
  const answerBox = document.querySelector("#answer-box");
  const counter = document.querySelector("#joke-counter");
  const feedback = document.querySelector("#feedback");
  const revealButton = document.querySelector("#reveal-button");
  const newJokeButton = document.querySelector("#new-joke-button");
  const shareButton = document.querySelector("#share-button");
  let currentIndex = -1;

  const setFeedback = (message) => {
    feedback.textContent = message;
    window.clearTimeout(setFeedback.timeout);
    setFeedback.timeout = window.setTimeout(() => {
      feedback.textContent = "";
    }, 2800);
  };

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
      loading.hidden = false;
      loading.textContent = "Ainda não há piadas cadastradas.";
      return;
    }

    currentIndex = chooseIndex();
    const joke = jokes[currentIndex];
    question.textContent = `${joke.emoji || "😄"} ${joke.question}`;
    answer.textContent = joke.answer;
    counter.textContent = `${currentIndex + 1} de ${jokes.length}`;
    answerBox.hidden = true;
    revealButton.hidden = false;
    revealButton.disabled = false;
    revealButton.innerHTML = '<span aria-hidden="true">👀</span> Ver resposta';
    newJokeButton.hidden = false;
    loading.hidden = true;
    content.hidden = false;
    feedback.textContent = "";
  };

  revealButton.addEventListener("click", () => {
    answerBox.hidden = false;
    revealButton.disabled = true;
    revealButton.innerHTML = '<span aria-hidden="true">✨</span> Resposta revelada';
    setFeedback("Boa tentativa! Agora conte para alguém.");
  });

  newJokeButton.addEventListener("click", () => {
    showJoke();
    setFeedback("Uma nova pergunta chegou!");
  });

  shareButton.addEventListener("click", async () => {
    const joke = jokes[currentIndex];
    if (!joke) return;

    const text = `${joke.question}\nResposta: ${joke.answer}`;
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Uma adivinha divertida",
          text
        });
        setFeedback("Adivinha compartilhada!");
        return;
      }
      await navigator.clipboard.writeText(text);
      setFeedback("Adivinha copiada para compartilhar!");
    } catch (error) {
      if (error.name !== "AbortError") setFeedback("Não foi possível compartilhar agora.");
    }
  });

  showJoke();
})();
