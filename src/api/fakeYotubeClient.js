import axios from "axios";

export class FakeYoutubeClient {
  async search() {
    return axios.get("/videos/search.json").then((res) => {
      const items = res.data.items;
      return items.map((item) => ({ ...item, id: item.id.vidoeId }));
    });
  }

  async videos() {
    return axios.get("/videos/popular.json").then((res) => {
      const items = res.data.items;
      console.log("items", res);
      return items;
    });
  }

  async channel(){
    return axios.get("/videos/channel.json").then((res) => {
      const item = res.data.items[0];
      return item;
    })
  }
}
