class quizApi {
  static getQuiz() {
    return fetch('http://localhost:3000/api/quizzes/new').then(response => {
        return response.json();
      }).catch(error => {
        return error;
      });
  }
}

export default quizApi;
