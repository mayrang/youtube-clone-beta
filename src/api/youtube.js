export class Youtube {
  constructor(appClient) {
    this.httpClient = appClient;
  }

  search(keyword) {
    return keyword ? this.#searchVideos(keyword) : this.#popularVideos();
  }

  #searchVideos(keyword) {
    return this.httpClient.search({
      params: {
        q: keyword,
        maxResults: "25",
      },
    });
  }

  #popularVideos() {
    return this.httpClient.videos({
      params: {
        maxResults: "25",
        chart: "mostPopular",
      },
    });
  }
}
