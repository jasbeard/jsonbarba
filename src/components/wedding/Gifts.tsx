import gotymePhoto from "/public/gotyme.png";
import gcashPhoto from "/public/gcash.png";
import Image from 'next/image';

export const Gifts = () => {
  const message = `
    If you're thinking of a gift to help us on our way, a gift of cash would really make our day. 
    However, if you prefer to purchase a gift, feel free to surprise us in your own way.
  `;

  return (
    <div className="my-6">
      <span className="font-medium">{message}</span>
      <div className="flex flex-col items-center md:flex-row gap-4 md:justify-start mt-4">
        <div className="w-64 h-[340px]">
          <Image src={gotymePhoto} alt="Gotyme" className="rounded-xl object-contain h-[340px] shadow-lg"/>
        </div>
        <div className="w-64 h-[340px] relative">
          <Image src={gcashPhoto} alt="Gcash" className="rounded-xl object-contai h-[340px] shadow-lg"/>
          <div className="absolute bottom-0 mb-4 font-bold left-1/2 bg-white" style={{transform: "translate(-50%, 0)"}}>Gcash</div>
        </div>
      </div>
    </div>
  );
}