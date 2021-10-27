const getQuote = async () => {
  const response = await fetch('https://zenquotes.io/api/random');
  return response.json();
};

export default getQuote;
