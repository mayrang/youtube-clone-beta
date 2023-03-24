export class Youtube {
  constructor(appClient) {
    this.httpClient = appClient;
  }

  search(keyword) {
    return keyword ? this.#searchVideos(keyword) : this.#popularVideos();
  }

  channel(channelId) {
    return this.#chennelInfo(channelId);
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

  #chennelInfo(channelId) {
    return this.httpClient.channel({
      params: {
        id: channelId
      }
    })
  }
}
