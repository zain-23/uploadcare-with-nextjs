import UploadButton from "@/components/buttons/uploadButton";
import ShowImage from "@/components/showImage";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-7xl border h-full w-full mx-auto">
        <div className="flex justify-between py-2">
          <div>
            <h2 className="text-2xl">
              Unleash Your Creativity Where Images Speak Louder Than Words!
            </h2>
            <p className="text-gray-400 text-sm">
              Elevate your sharing experience with our seamless image uploader.
              Effortless, instant, and visually stunning!
            </p>
          </div>
          <UploadButton />
        </div>
        <ShowImage />
      </div>
    </main>
  );
}
