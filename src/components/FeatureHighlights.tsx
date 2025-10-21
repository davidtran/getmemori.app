import IonIcon from "@reacticons/ionicons";
import React from "react";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode | string;
}

interface FeatureHighlightsProps {
  items?: FeatureItem[];
  heading?: string;
  className?: string;
}

const defaultItems: FeatureItem[] = [
  {
    title: "One Tap, Perfect Restore",
    description:
      "Our AI restores your image naturally, keeping every emotion, face, hand, and background true to the original.",
    icon: (
      <IonIcon
        name="sparkles"
        className="text-4xl"
      />
    ),
  },
  {
    title: "Fix Any Photo",
    description:
      "Whether your photo is old, blurry, or damaged, Memori can bring it back to life in seconds.",
    icon: (
      <IonIcon
        name="image"
        className="text-4xl"
      />
    ),
  },
  {
    title: "Lightning Fast Results",
    description:
      "Get beautifully restored images in just moments — no waiting, no hassle.",
    icon: (
      <IonIcon
        name="flash"
        className="text-4xl"
      />
    ),
  },
  {
    title: "Stunning 4K Quality",
    description:
      "Enjoy your memories in ultra-clear 4K resolution, perfect for printing or sharing online.",
    icon: <div className="text-2xl font-bold">4K</div>,
  },
  {
    title: "Save More, Get More",
    description:
      "Professional-level restoration at a fraction of the cost — up to 500% cheaper than traditional services.",
    icon: (
      <IonIcon
        name="cash"
        className="text-4xl"
      />
    ),
  },
  {
    title: "iOS & Android",
    description:
      "Available on both App Store and Google Play. Restore your memories anywhere, anytime.",
    icon: (
      <IonIcon
        name="phone-portrait"
        className="text-4xl"
      />
    ),
  },
];

export function FeatureHighlights({
  items = defaultItems,
  heading = "Why you'll love Memori",
  className = "",
}: FeatureHighlightsProps) {
  return (
    <section className="py-30 px-6 bg-[#fff5e5]">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`font-title text-4xl md:text-5xl text-[#39241A] mb-16 text-center`}
        >
          <span className="dash">Why Choose Memori?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-[#CBA84A] text-[#fff] ring-1 ring-[#B35832]/10">
                {item.icon}
              </div>
              <h3 className={`font-title text-2xl text-[#39241A] mb-4`}>
                {item.title}
              </h3>
              <p className={` text-[#47423E] text-md font-light`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
