import { useState, useEffect } from 'react';

export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);
  return position;
};

export const calcMonths = (startDate: string, endDate: string | null) => {
  const parseDate = (date: string) => {
    const [month, year] = date.split('.').map(Number);
    return new Date(year, month - 1, 1); // 👈 safe everywhere
  };

  const start = parseDate(startDate);
  const end = endDate === null ? new Date() : parseDate(endDate);

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  return `${totalMonths} Month${totalMonths !== 1 ? 's' : ''}`;
};
