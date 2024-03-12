'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import EventDetails from './EventDetails';

const EventDetailPage = () => {
  // Use the usePathname hook
  const pathname = usePathname();
  // Extract the eventId from the pathname
  const eventId = pathname.split('/').pop();

  if (!eventId) {
    console.log('Router not available');
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div className='d-flex justify-content-center'>
        {/* Pass eventId to EventDetails component */}
        <EventDetails eventId={eventId} />
      </div>
    </main>
  );
};

export default EventDetailPage;