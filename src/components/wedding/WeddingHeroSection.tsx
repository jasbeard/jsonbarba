import { sans, wedSerif, wedSans } from "@/font/fonts";

export const WeddingHeroSection = () => {
  const heroMessage = 'Together with their families invite you to their intimate wedding celebration';
  return (
    <div className="flex flex-col items-center px-2 gap-4 md:px-[unset]">
      <div className={`text-4xl md:text-6xl text-center text-[#AC7914] my-14 ${wedSerif.className}`}>Jason &Josan</div>
        <span className="w-3/4 md:text-lg text-[#342719] text-center font-medium opacity-75" style={{ fontFamily: wedSans.style.fontFamily }}>
          {heroMessage.toLocaleUpperCase()}
        </span>
        <div style={{ fontFamily: wedSans.style.fontFamily }} className="flex flex-col items-center text-center w-full">
          <div>
            <span className="font-medium">SUNDAY, OCTOBER</span>{' '}<span className="text-xl">13, 2024</span>
          </div>
          <span className="font-medium">LOLA CAFE — TOMAS MORATO, QC</span>
        </div>
    </div>
  );
};