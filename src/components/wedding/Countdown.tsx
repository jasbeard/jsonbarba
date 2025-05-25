import { sans } from "@/font/fonts";

const CountdownItem = ({
  time,
  value
}: {
  time: string;
  value: number;
}) => {
  return (
    <div className="flex-1 justify-center items-center flex flex-col">
      <div>{time}</div>
      <div>{value}</div>
    </div>
  );
};

export const CountdownTimer = () => {
  function getTimeRemaining() {
    let targetTime = new Date("2024-10-13T10:00:00");
    let currentTime = new Date();
    
    let months = targetTime.getMonth() - currentTime.getMonth() + (12 * (targetTime.getFullYear() - currentTime.getFullYear()));
    let days = targetTime.getDate() - currentTime.getDate();
    let hours = targetTime.getHours() - currentTime.getHours();

    if (hours < 0) {
        hours += 24;
        days -= 1;
    }
    
    if (days < 0) {
        // Get the number of days in the previous month
        let prevMonth = new Date(targetTime.getFullYear(), targetTime.getMonth(), 0).getDate();
        days += prevMonth;
        months -= 1;
    }

    return {
      months,
      days,
      hours
    };
  }
  
  const { months, days, hours } = getTimeRemaining();

  return (
    <div
      className={`flex shrink w-80 h-16 bg-stone-200 rounded-xl px-4 shadow-md border border-golden-amber ${months < 0 && 'justify-center items-center text-center'}`}
      style={{ fontFamily: sans.style.fontFamily }}
    >
      {months < 0 ? 'Wedding was a success, thanks for attending guys! ♥️' : (
        <>
          <CountdownItem time={"Months"} value={months} />
          <CountdownItem time={"Days"} value={days} />
          <CountdownItem time={"Hours"} value={hours} />
        </>
      )}
      
    </div>
  );
};