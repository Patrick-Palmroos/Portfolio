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
    const [month, year] = date.split('.');
    return month + '.1.' + year;
  };
  const start: Date = new Date(parseDate(startDate));
  const end: Date =
    endDate === null ? new Date() : new Date(parseDate(endDate));

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();

  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  // Calculate total months difference
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  // Return the result as years and months
  //const years = Math.floor(totalMonths / 12);
  //const months = totalMonths % 12;
  return `${totalMonths} Month${totalMonths !== 1 ? 's' : ''}`;
};
