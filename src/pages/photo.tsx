import { DownloadButtons } from "@/components/DownloadButtons";
import { supabase } from "@/libs/supabase";
import IonIcon from "@reacticons/ionicons";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const [photoId] = useState("82ce78ef-7ae9-40bc-9fb2-9cd5edfc6db2");
  const [photo, setPhoto] = useState<any>(null);
  const [showOriginal, setShowOriginal] = useState(false);

  useEffect(() => {
    initialize();
  }, []);

  async function initialize() {
    const { data } = await supabase
      .from("photos")
      .select("*")
      .eq("id", photoId)
      .single();
    setPhoto(data);
  }

  if (!photo) return null;

  const imageUrl = showOriginal
    ? photo.original_url
    : photo.hd_url || photo.sd_url;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = photo.hd_url || photo.sd_url;
    link.download = "restored_photo.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col gap-4 items-center justify-between p-6">
      <div
        className={`text-3xl font-bold text-[#39241A] flex items-center gap-2`}
      >
        <img
          src="/icon.png"
          className="w-12 h-12"
        />
        <a href="/">
          <div className="font-title ">Memori</div>
          <div className="text-xl">Restore Old Photos</div>
        </a>
      </div>
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="relative max-w-2xl">
          <img
            src={imageUrl}
            alt="Restored result"
            className="rounded-2xl shadow-lg max-w-full max-h-[80vh] object-contain"
          />
          <div className="absolute right-[10px] bottom-[10px] flex items-center justify-end gap-2">
            <button
              onClick={() => setShowOriginal(!showOriginal)}
              className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-xl transition cursor-pointer"
            >
              {showOriginal ? "View Enhanced" : "View Original"}
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-xl transition  cursor-pointer"
            >
              <IonIcon name="download-sharp" /> <span>Save image</span>
            </button>
          </div>
        </div>
      </div>

      <DownloadButtons className="w-full" />
    </div>
  );
}
