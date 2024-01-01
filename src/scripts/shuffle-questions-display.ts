const shuffleAnswers = (toShuffle: HTMLLIElement[]) => {
  for (let i = toShuffle.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [toShuffle[i], toShuffle[randomIndex]] = [toShuffle[randomIndex], toShuffle[i]];
  }

  return toShuffle;
};

export default shuffleAnswers;
