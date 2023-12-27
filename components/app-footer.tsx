
import Text from "@/components/text";
import Link from "next/link";

const AppFooter = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col justify-between">
        <div className="py-4">
          <Link href="/">
            <Text className="text-2xl tracking-tighter uppercase font-black">
              Mannat
            </Text>
          </Link>
        </div>
        <div>
        <div className="border-t mt-20 h-20 flex flex-col gap-2 md:flex-row md:items-center justify-center md:justify-between">
            <p className="text-xs md:text-sm text-neutral-500">
              © 2023{" "}
              <span className="text-black font-medium">Mannat</span>{" "}
              Pvt. Ltd. All Rights Reserved.
            </p>
            <p className="text-xs md:text-sm leading-loose text-neutral-500">
              Designed &amp; Developed by{" "}
              <a
                href="https://www.honeyhexa.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4 hover:text-blue-500"
              >
                Honey Hexa
              </a>
              .
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default AppFooter;
