import { useCallback, useEffect, useState } from "react";

const addZero = (n: number) => `${n < 10 ? "0" : ""}${n}`;

interface Time {
  hh: string;
  mm: string;
  ss: string;

  DD: string;
  MM: string;
  YY: string;
  YYYY: string;

  month: number;
  day: number;
}
function useClock() {
  const getTime = useCallback<() => Time>(() => {
    const date = new Date();
    return {
      hh: addZero(date.getHours()),
      mm: addZero(date.getMinutes()),
      ss: addZero(date.getSeconds()),

      DD: addZero(date.getDate()),
      MM: addZero(date.getMonth() + 1),
      YY: date.getFullYear().toString().slice(2),
      YYYY: date.getFullYear().toString(),

      day: date.getDay(),
      month: date.getMonth(),
    };
  }, []);

  const [clock, setClock] = useState<Time>(getTime);

  useEffect(() => {
    const interval = setInterval(() => setClock(getTime()), 1 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [getTime]);

  return clock;
}

export default useClock;
