import { useState } from "react";
import IonIcon from "@reacticons/ionicons";

export default function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full aspect-[12/8] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#B35832]/20 to-[#F5EFE6] cursor-pointer"
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        <video
          className="w-full h-full object-cover"
          src="https://cdn.studyfoc.us/copy_88ECE7F6-3C56-465B-ACE1-0098B4C88124.mp4"
          controls
          autoPlay
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="text-center text-[#39241A]">
            <IonIcon
              name="play-circle"
              className="text-6xl mx-auto mb-2"
            />
            <p className="font-medium">Watch Demo Video</p>
          </div>
        </div>
      )}
    </div>
  );
}
