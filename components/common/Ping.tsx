import React from 'react';

interface Ping {
  className: string;
}

export default function Ping({ className }: Ping) {
  return (
    <div className="relative">
      <div
        className={`max-h-2 max-w-2 min-w-2 min-h-2 rounded-full ${className} animate-ping`}
      ></div>
      <div
        className={`max-h-2 max-w-2 min-w-2 min-h-2 rounded-full ${className} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      ></div>
    </div>
  );
}
