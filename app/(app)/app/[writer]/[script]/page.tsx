import PublishScript from "@/components/publish-script";
import { PublishedScripts } from "@/components/published-scripts";
import Image from "next/image";

export default async function ScriptsPage({ params }: { params: { script: string } }) {
  return (
    <div className="min-h-screen flex w-full flex-1 flex-col overflow-hidden bg-gray-50">
      <div className="flex h-36 items-center border-b border-gray-200 bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl text-gray-600">{params?.script}</h1>
            <PublishScript />
          </div>
        </div>
      </div>

      <div className="container"></div>
    </div>
  );
}
