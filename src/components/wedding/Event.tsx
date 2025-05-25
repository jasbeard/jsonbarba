import gotymePhoto from "/public/event_flow.png";
import Image from 'next/image';

const Event = () => {
  const message = `Disclaimer: Timeline may be update as we finalize our event details.`;
  return (
    <div className="my-6 flex flex-col items-center">
      <div className="md:w-96">
        <Image src={gotymePhoto} alt="Gotyme" className="rounded-xl object-cover shadow-lg"/>
        <div className="mt-2 font-medium">{message}</div>
      </div>
    </div>
    
  );
};

export default Event;