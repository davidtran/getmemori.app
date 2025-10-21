import { useState } from "react";
import Image from "next/image";

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  className,
}: {
  beforeImage: string;
  afterImage: string;
  title: string;
  className?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging && e.type !== "click") return;

    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3
        className={`font-title sm:text-4xl text-2xl font-bold text-[#000] mb-6 text-center`}
      >
        <span className="dash-2">{title}</span>
      </h3>
      <div
        className={
          `relative w-full border border-[#B35832]/10 aspect-[9/16] overflow-hidden rounded-2xl shadow-sm cursor-ew-resize select-none ` +
          className
        }
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onClick={handleMove}
      >
        {/* After Image (Full) */}
        <div className="absolute inset-0 bg-[#FFF6E3]">
          <Image
            src={afterImage}
            alt="After restoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 bg-[#FFF6E3]"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt="Before restoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-black shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-6 bg-[#B35832]"></div>
              <div className="w-0.5 h-6 bg-[#B35832]"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-[#CBA84A] text-white px-3 py-1 rounded-full text-sm font-medium">
          After
        </div>
      </div>
    </div>
  );
}
