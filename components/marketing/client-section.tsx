export default function ClientSection() {
  const LOGOS = [
    "https://upload.wikimedia.org/wikipedia/en/0/02/Dharma_Production_logo.png",
    "https://www.redchillies.com/wp-content/themes/redchillies/img/red_logo_old.png",
    "https://www.pngitem.com/pimgs/b/41-418483_sony-logo-transparent-png.png",
    "https://upload.wikimedia.org/wikipedia/commons/0/0c/Viacom18_Studios_Logo.png",
  ];
  return (
    <div className="pt-12 pb-36">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="font-semibold text-sm text-gray-500 text-center">
          TRUSTED BY PRODUCTIONS FROM AROUND THE WORLD
        </h3>
        <div className="mt-12">
          <ul className="flex gap-x-10 gap-y-8 flex-wrap items-center justify-center md:gap-x-24">
            {LOGOS.map((logo, idx) => (
              <li key={idx}>
                <img className="h-10" src={logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
