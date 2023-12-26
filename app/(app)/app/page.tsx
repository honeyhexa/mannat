import PublishScript from "@/components/publish-script";
import { PublishedScripts } from "@/components/published-scripts";
import Image from "next/image";


const NoScriptsFound = () => (
  <div className="container my-10 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
    <div className="col-span-3 flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
      <h2 className="z-10 text-xl font-semibold text-gray-700">
        You haven&apos;t published any scripts yet!
      </h2>
      <Image
        alt="No links yet"
        loading="lazy"
        width="400"
        height="400"
        decoding="async"
        data-nimg="1"
        className="blur-0 pointer-events-none -my-8"
        src="https://app.dub.co/_static/illustrations/shopping-call.svg"
        style={{ color: "transparent" }}
      />
      <PublishScript />
      <p className="mt-3 text-sm font-medium text-gray-500 transition-all hover:text-gray-800 active:scale-95">
        Publish your script on marketplace now
      </p>
    </div>
  </div>
);

export default async function AppPage() {
  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden bg-gray-50">
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">My Scripts</h1>
            <PublishScript />
          </div>
        </div>
      </div>

      {false ? <NoScriptsFound /> : <PublishedScripts />}

      <div className="container"></div>
    </div>
  );
}
