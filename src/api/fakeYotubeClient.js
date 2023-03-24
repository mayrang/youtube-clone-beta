import axios from "axios";

export class FakeYoutubeClient {
  constructor () {
    this.httpClient = axios.create({
      baseURL: "/videos"
    })
  }
  async search() {
    return this.httpClient.get("/search.json").then((res) => {
      const items = res.data.items;
      return items.map((item) => ({ ...item, id: item.id.vidoeId }));
    });
  }

  async videos() {
    return this.httpClient.get("/popular.json").then((res) => {
      const items = res.data.items;
      console.log("items", res);
      return items;
    });
  }

  async channel(){
    return this.httpClient.get("/channel.json").then((res) => {
      const item = res.data.items[0];
      return item;
    })
  }

  async related() {
    return this.httpClient.get("/related.json").then((res) => {
      const items = res.data.items;
      return items.map((item) => ({ ...item, id: item.id.videoId }));
    })
  }
}
