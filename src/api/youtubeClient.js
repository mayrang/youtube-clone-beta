import axios from "axios";

export class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        part: "snippet",
      },
    });
  }

  async videos(params) {
    return this.httpClient.get("/videos", params).then((res) => {
      return res.data.items;
    });
  }

  async search(params) {
    return this.httpClient.get("/search", params).then((res) => {
      const items = res.data.items;
      console.log(items);
      return items.map((item) => ({ ...item, id: item.id.videoId }));
    });
  }
}
