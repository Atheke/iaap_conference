'use client';
import React, { useEffect, useState } from 'react';

const targetDate = new Date('2025-02-26T00:00:00Z'); // Target date in UTC

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Stop at 00:00:00:00
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = getTimeLeft();
        if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
          clearInterval(intervalId); // Stop timer when it reaches 00:00:00:00
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="countdown-timer inline-flex gap-5 mx-auto border-2 border-primary px-5 sm:px-20 py-5 text-primary">
      <DisplayDiv duration={timeLeft.days} durationType="Day(s)" />:
      <DisplayDiv duration={timeLeft.hours} durationType="Hour(s)" />:
      <DisplayDiv duration={timeLeft.minutes} durationType="Minute(s)" />:
      <DisplayDiv duration={timeLeft.seconds} durationType="Second(s)" />
    </div>
  );
};

export default CountdownTimer;

const DisplayDiv = ({ duration, durationType }: any) => {
  return (
    <div className="text-xl sm:text-3xl flex flex-col items-center justify-center">
      <span>{duration}</span>
      <span className="text-xs sm:text-base">{durationType}</span>
    </div>
  );
};

