import React from 'react';
import { getMonth } from './LeagueFightsSchedule';
import Link from 'next/link';


const LeagueFightCard = ({ data }) => {

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="event-info">
          <div className="container d-flex flex-wrap inner-box">
            <div className='col-md-12 col-9 order-lg-1 order-2'>
              <Link href={`/events/${item.id}`} passHref>
                <h3><strong><p>{item?.leaguefight_name || ''}</p></strong></h3>
              </Link>
            </div>
            <div className="col-md-1 col-3 order-lg-2 order-1 mt-lg-5 mt-0 leaguefight-date">
              <span>{item?.leaguefight_date?.split('/')[0] || ''}</span>
              <strong><p>{getMonth(parseInt(item?.leaguefight_date?.split('/')[1]) - 1) || ''}</p></strong>
            </div>
            <div className="col-md-6 col-12 order-3 event-img" style={{ textAlign: 'center' }}>
              <img src={item?.leaguefight_img || ''} alt="Event Image" style={{width: '100%'}}  />
            </div>
            <div className="col-md-5 col-12 order-4 event-wrap">
              <h5><p>{item?.leaguefight_datacenter || ''}/{item?.leaguefight_world || ''}</p></h5>
              <p>{item?.event_location || ''}</p>
              <p>{item?.leaguefight_time || ''}</p>
              <div className="information">
                <p>{item?.leaguefight_info || ''}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeagueFightCard;