const getRandomWords = () => {
  return fetch(RANDOM_WORDS_API_URL)
    .then(res => res.json())
    .then(data => data.reduce((words,item) => { 
      // Clean up word list to only get acceptable words
      if (/^[a-z]+$/.test(item.word)) {
        words.push(item.word)
      }
      return words
    }, []))
}

const fillWordList = async () => {
  const words = await getRandomWords();
  console.log(words);
  // const filteredWords = words.map(word => {
  //   if (/^[a-z]+$/.test(item.word))
  // })
}
fillWordList();
