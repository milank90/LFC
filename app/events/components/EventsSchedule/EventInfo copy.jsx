import React from 'react';
import { getMonth } from './EventsSchedule';

const EventInfo = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="event-info">
          <table>
            <tbody>
              <tr className="inner-box">
                <th scope="row">
                  <div className="event-date">
                    <span>{item.event_date.split('/')[0]}</span>
                    <p>{getMonth(parseInt(item.event_date.split('/')[1]) - 1)}</p>
                  </div>
                </th>
                <td>
                  <div className="event-img" style={{ textAlign: 'center' }}>
                    <img src={item.event_img || ''} alt="" />
                  </div>
                </td>
                <td>
                  <div className="event-wrap">
                    <h3><a href="#">{item['event_name'] || ''}</a></h3>
                    <div className="meta">
                      <div className="time">
                        <span>{item.event_time || ''}</span>
                      </div>
                      <div className="information">
                        <p>{item.event_info || ''}</p>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default EventInfo;