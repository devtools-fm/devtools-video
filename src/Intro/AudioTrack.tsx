import { Audio } from "remotion";
import track from "../transition-track.mp3";

export const AudioTrack = () => {
  console.log(track);
  return <Audio className="absolute" src={track} startFrom={0} endAt={400} />;
};
