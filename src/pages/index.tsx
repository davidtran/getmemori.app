import { Be_Vietnam_Pro, Inter, Spectral, Poppins } from "next/font/google";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ANDROID_APP_URL, IOS_APP_URL } from "@/constants/app";
import { DownloadButtons } from "@/components/DownloadButtons";
import { FeatureHighlights } from "@/components/FeatureHighlights";
import DemoVideo from "@/components/DemoVideo";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

const spectral = Spectral({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-spectral",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const fontTitle = spectral.className;

// Before/After Comparison Slider Component

export default function Home() {
  return (
    <div
      className={`${beVietnamPro.variable} ${inter.variable} ${poppins.variable} ${spectral.variable} ${poppins.className} font-[500] bg-[#FFF6E3] min-h-screen`}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF6E3] backdrop-blur-sm border-b border-[#B35832]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className={`font-title text-2xl font-bold text-[#39241A] flex items-center gap-2`}
          >
            <img
              src="/icon.png"
              className="w-8 h-8"
            />
            Memori
          </div>
          <nav className="hidden md:flex gap-8">
            <a
              href="#features"
              className={`text-[#39241A] hover:opacity-70 transition-opacity`}
            >
              Features
            </a>
            <a
              href="#download"
              className={`text-[#39241A] hover:opacity-70 transition-opacity`}
            >
              Download
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(179,88,50,0.15)_0%,rgba(245,239,230,0)_60%)]"></div>
          <div className="max-w-6xl mx-auto text-center">
            <h1
              className={`font-title itatlic uppercase text-3xl md:text-6xl font-bold text-[#000] mb-6 leading-tight`}
            >
              <span className="dash">Bring Your Old Photos</span>
              <br /> <span className="dash">Back to Life</span>
            </h1>
            <p
              className={`text-xl md:text-xl  text-[#47423E] mb-12 max-w-3xl mx-auto text-[#47423E]`}
            >
              Turn blurry or damaged pictures into clear, beautiful memories
              with the magic of AI.
            </p>

            {/* Video Demo Placeholder */}
            <div className="max-w-4xl mx-auto mb-12">
              <DemoVideo />
            </div>

            <DownloadButtons />
          </div>
        </div>
      </section>

      <div className="line"></div>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className={`font-title text-4xl md:text-5xl text-[#39241A] mb-4 text-center`}
          >
            <span className="dash">See the Magic</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-[#B35832]/20 mx-auto mb-8"></div>
          <p
            className={`text-xl  text-[#47423E] mb-16 text-center max-w-2xl mx-auto text-[#47423E]`}
          >
            Experience the power of AI restoration. Drag the slider to compare
            before and after.
          </p>

          {/* Feature 1 */}
          <div className="mb-30">
            <BeforeAfterSlider
              beforeImage="/compares/before-1.jpg"
              afterImage="/compares/after-1.png"
              title="Restore Faded Colors"
              className="!aspect-video"
            />
          </div>

          {/* Feature 2 */}
          <div className="mb-30">
            <BeforeAfterSlider
              beforeImage="/compares/before-2.webp"
              afterImage="/compares/after-2.jpg"
              title="Remove Scratches & Damage"
              className="!aspect-[6/4]"
            />
          </div>

          {/* Feature 3 */}
          <div className="mb-0">
            <BeforeAfterSlider
              beforeImage="/compares/before-3.jpg"
              afterImage="/compares/after-3.jpg"
              title="Enhance to 4K Quality"
              className="!aspect-[6/4]"
            />
          </div>
        </div>
      </section>

      <div className="line"></div>

      {/* Key Features Highlight */}
      <FeatureHighlights />

      <div className="line"></div>

      {/* Download Section */}
      <section
        id="download"
        className="py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-title text-4xl md:text-5xl text-[#000] mb-6`}>
            <span className="dash">Start Restoring Today</span>
          </h2>
          <p className={`text-xl  text-[#47423E] mb-12`}>
            Download Memori and bring your old photos back to life
          </p>
          <DownloadButtons />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[linear-gradient(180deg,#B35832_0%,#9E4927_100%)] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <img
                  src="/icon.png"
                  className="w-8 h-8 mb-4"
                />
                <h3 className={`font-title text-2xl mb-4`}>Memori</h3>
              </div>
              <p className={`opacity-90`}>
                AI-powered photo restoration at your fingertips.
              </p>
            </div>
            <div></div>
            <div>
              <h4 className={`font-title font-semibold mb-4`}>Product</h4>
              <ul className={`space-y-2 opacity-90`}>
                <li>
                  <a
                    href="#features"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#download"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`font-title font-semibold mb-4`}>Legal</h4>
              <ul className={`space-y-2 opacity-90`}>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-70 transition-opacity"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`border-t border-white/20 pt-8 text-center opacity-90`}
          >
            <p>© 2025 Memori. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
