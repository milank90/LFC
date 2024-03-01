'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import LeagueFightDetails from './LeagueFIghtDetails';

const LeagueFightsDetailPage = () => {
  // Use the usePathname hook
  const pathname = usePathname();
  // Extract the eventId from the pathname
  const leaguefightId = pathname.split('/').pop();

  if (!leaguefightId) {
    console.log('Router not available');
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div>
        {/* Pass eventId to EventDetails component */}
        <LeagueFightDetails leaguefightId={leaguefightId} />
      </div>
    </main>
  );
};

export default LeagueFightsDetailPage;