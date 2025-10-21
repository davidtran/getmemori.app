import { useRef, useState } from "react";
import IonIcon from "@reacticons/ionicons";

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="relative w-full aspect-[12/8] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
      onClick={() => {
        setPlaying(true);
        videoRef.current?.play();
      }}
    >
      <video
        className="w-full h-full object-cover"
        src="https://cdn.studyfoc.us/copy_88ECE7F6-3C56-465B-ACE1-0098B4C88124.mp4"
        controls
        ref={videoRef}
        autoPlay
      />
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#B35832]/20 to-[#F5EFE6] ">
          <div className="text-center text-white">
            <IonIcon
              name="play-circle"
              className="text-6xl mx-auto mb-2"
            />
            <p className="font-medium text-white">Watch Demo Video</p>
          </div>
        </div>
      )}
    </div>
  );
}
