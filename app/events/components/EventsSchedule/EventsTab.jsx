'use client'

import Link from 'next/link';
import React from 'react';

const EventsTab = ({ index, isActive, monthYear, getMonthAbbreviation }) => {
  const tabId = `month${index + 1}`;
  const tabLinkId = `month${index + 1}-tab`;

  return (
    <Link
      className={`nav-link ${isActive ? 'active' : ''}`}
      id={tabLinkId}
      data-bs-toggle="tab"
      href={`#${tabId}`}
      role="tab"
      aria-controls={tabId}
      aria-selected={isActive ? 'true' : 'false'}
    >
      {getMonthAbbreviation(monthYear)}
    </Link>
  );
};

export default EventsTab;
