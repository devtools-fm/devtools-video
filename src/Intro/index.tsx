import { Sequence, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AudioTrack } from "./AudioTrack";
import { Description } from "./Description";
import { Logo } from "./Logo";

export const Intro = () => {
  const frame = useCurrentFrame();
  const videoConfig = useVideoConfig();

  const seqProps = {
    durationInFrames: videoConfig.durationInFrames,
  };

  const scale = spring({
    fps: videoConfig.fps / 2,
    from: 0,
    to: 1,
    frame,
    config: {
      mass: 0.5,
      damping: 20,
      stiffness: 130,
    },
  });

  return (
    <div className="bg-black w-full">
      <Sequence from={0} {...seqProps}>
        <AudioTrack />
        <Logo scale={scale} />
      </Sequence>
      <Sequence from={0} {...seqProps}>
        <Description scale={scale} />
      </Sequence>
    </div>
  );
};
