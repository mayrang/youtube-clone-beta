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

  related(videoId) {
    return this.#relatedVideos(videoId);
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

  #relatedVideos(videoId){
    return this.httpClient.related({
      params: {
        relatedToVideoId: videoId,
        maxResults: "25" ,
        type: "video"
      }
    })
  }

}
