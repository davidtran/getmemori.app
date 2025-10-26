import { ANDROID_APP_URL, IOS_APP_URL } from "@/constants/app";
import classNames from "classnames";

export function DownloadButtons({ className }: { className?: string }) {
  function handleIosDownload() {
    window.location.href = IOS_APP_URL;
  }

  function handleAndroidDownload() {
    window.location.href = ANDROID_APP_URL;
  }
  return (
    <div
      className={classNames(
        "flex flex-row gap-2 justify-center items-center",
        className
      )}
    >
      <div
        onClick={handleIosDownload}
        className={`flex-1 cursor-pointer sm:flex-none bg-[linear-gradient(180deg,#B35832_0%,#9E4927_100%)] text-white px-4 py-2 sm:px-8 sm:py-4 rounded-2xl font-light text-lg inline-flex items-center gap-3 shadow-sm transition-[transform,box-shadow] hover:shadow-md hover:-translate-y-0.5`}
      >
        <img
          src="/icons/app-store.svg"
          alt="App Store"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        <div className="text-left">
          <div className="text-xs opacity-90">Get it on</div>
          <div className="text-md sm:text-xl font-medium">App Store</div>
        </div>
      </div>
      <div
        onClick={handleAndroidDownload}
        className={`flex-1 cursor-pointer sm:flex-none bg-[linear-gradient(180deg,#FFFFFF_0%,#F5EFE6_100%)] text-[#39241A] px-4 py-2 sm:px-8 sm:py-4 rounded-2xl font-light text-lg inline-flex items-center gap-3 ring-1 ring-[#B35832]/15 transition-[transform,box-shadow] hover:shadow-md hover:-translate-y-0.5`}
      >
        <img
          src="/icons/google-play.svg"
          alt="Google Play"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        <div className="text-left">
          <div className="text-xs opacity-90">Get it on</div>
          <div className="text-md sm:text-xl font-medium">Play Store</div>
        </div>
      </div>
    </div>
  );
}
