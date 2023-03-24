import { createContext, useContext } from "react";
// import { FakeYoutubeClient } from "../api/fakeYotubeClient";
import { Youtube } from "../api/youtube";
import { YoutubeClient } from "../api/youtubeClient";

export const YoutubeContext = createContext();

// const fakeYoutubeClient = new FakeYoutubeClient();
const youtubeClient = new YoutubeClient();
const youtube = new Youtube(youtubeClient);

export function YoutubeContextProvider({ children }) {
  return <YoutubeContext.Provider value={youtube}>{children}</YoutubeContext.Provider>;
}

export const useYoutubeApi = () => useContext(YoutubeContext);
