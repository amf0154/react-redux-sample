export default class Requests {
    static getQuestions() {
      return fetch('https://legaladviceme.com/api/search?entities=questions&sortBy=date%3Adesc&perPage=20&page=1&interfaceLanguage=en&preferredLanguage=en').then(response => {
        return response.json();
      });
    }
}