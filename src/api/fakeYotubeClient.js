import axios from "axios";

export class FakeYoutubeClient {
  async search(keyword) {
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
}
