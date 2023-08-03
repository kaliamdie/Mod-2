const decodeQuestion = (question) => {
  let decodedQuestion = question.replace(/&quot;/g, '"');
  decodedQuestion = decodedQuestion.replace(/&#039;/g, "'");
  return decodedQuestion;
};

export const fetchQuestions = async (category, difficulty) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=15&type=multiple${category ? `&category=${category}` : ''}${difficulty ? `&difficulty=${difficulty}` : ''}`
    );

    const data = await response.json();

    const decodedQuestions = data.results.map((questionObject) => {
      return {
        ...questionObject,
        question: decodeQuestion(questionObject.question),
      };
    });

    return decodedQuestions;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

