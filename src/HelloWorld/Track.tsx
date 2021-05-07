import { Audio } from "remotion";
import track from "../transition-track.mp3";

export const Track = () => {
  console.log(track);
  return <Audio src={track} startFrom={0} endAt={200} />;
};
