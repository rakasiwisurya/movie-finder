import CONFIG from '../globals/config.js';

class DataSource {
  static searchMovie(keyword) {
    return fetch(`
        ${CONFIG.BASE_URL}/search/movie?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&query=${keyword}&page=1&include_adult=false`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
