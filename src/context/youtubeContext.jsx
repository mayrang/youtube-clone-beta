import { createContext, useContext } from "react";
import { FakeYoutubeClient } from "../api/fakeYotubeClient";
import { Youtube } from "../api/youtube";
import { YoutubeClient } from "../api/youtubeClient";

export const YoutubeContext = createContext();

const youtube = new Youtube(FakeYoutubeClient);

export function YoutubeContextProvider({ children }) {
  return <YoutubeContext.Provider value={youtube}>{children}</YoutubeContext.Provider>;
}

export const useYoutubeApi = () => useContext(YoutubeContext);
