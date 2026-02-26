import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-2 justify-center">
      <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">Oferta expira em:</span>
      <div className="flex gap-1">
        {[
          { value: time.hours, label: "h" },
          { value: time.minutes, label: "m" },
          { value: time.seconds, label: "s" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-0.5">
            <span className="gradient-primary text-primary-foreground font-heading font-bold text-sm px-2 py-1 rounded-md min-w-[36px] text-center">
              {pad(item.value)}
            </span>
            <span className="text-primary font-bold text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
