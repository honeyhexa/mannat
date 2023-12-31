import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Writer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 0,
      isMostPop: true,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Production",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
  ];

  return (
    <section className="relative py-36 border-b">
      <div
        className="absolute top-0 w-full h-[521px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(0, 0, 0, 0.1) 4.54%, rgba(0, 0, 0, 0.017) 34.2%, rgba(0, 0, 0, 0.01) 77.55%)",
        }}
      ></div>
      <div className="max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="relative max-w-xl mx-auto space-y-3 px-4 sm:text-center sm:px-0">
          <h3 className="text-indigo-600 font-semibold">Pricing</h3>
          <p className="tracking-tight drop-shadow text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-black text-3xl font-extrabold sm:text-4xl">
            Pay as you grow
          </p>
          <div className="max-w-xl">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur consequat nunc.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center sm:flex">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col mt-6 sm:mt-0 sm:rounded-xl sm:max-w-md ${
                item.isMostPop ? "bg-white shadow-lg sm:border" : ""
              }`}
            >
              <div className="p-4 py-8 space-y-4 border-b md:p-8">
                <span className="text-indigo-600 font-medium">{item.name}</span>
                <div className="text-gray-800 text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p>{item.desc}</p>
                <br />
                <Link href="/sign-in">
                  <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 border text-white bg-black hover:bg-white hover:text-black">
                    Get Started
                  </button>
                </Link>
              </div>
              <ul className="p-4 py-8 space-y-3 md:p-8">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
