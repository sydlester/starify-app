import React, { useState, useEffect } from 'react';
import {getTopTracks30Days, getTopTracks6Months, getTopTracksAllTime} from "../spotify"; 
import "../styles/Style.css";
import { catchErrors } from '../util';
import TrackItem from '../components/TrackItem';
import Loader from "./Loader";
import "../styles/List.css";

const TopTrackList = () => {
    const [topTracks, setTopTracks] = useState(null);
    const [activeRange, setActiveRange] = useState('short');
  
    const apiCalls = {
      long: getTopTracksAllTime(),
      medium: getTopTracks6Months(),
      short: getTopTracks30Days(),
    };
  
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await getTopTracks30Days();
        setTopTracks(data);
      };
      catchErrors(fetchData());
    }, []);
  
    const changeRange = async range => {
      const { data } = await apiCalls[range];
      setTopTracks(data);
      setActiveRange(range);
    };
  
    const setRangeData = range => catchErrors(changeRange(range));
  
    return (
      <div className='center-page'>
        <div>
          <h2>TOP TRACKS</h2>
          <div className='timeframe'>
            <btn className="time-btn" isActive={activeRange === 'short'} onClick={() => setRangeData('short')}>
              <span>4 WEEKS</span>
            </btn>
            <btn className="time-btn" isActive={activeRange === 'medium'} onClick={() => setRangeData('medium')}>
              <span>6 MONTHS</span>
            </btn>
            <btn className="time-btn" isActive={activeRange === 'long'} onClick={() => setRangeData('long')}>
              <span>ALL TIME</span>
            </btn>
          </div>
        </div>
        <table className='top10tracks'>
            <tr className='track__item'>
                {/* <td>
                RANK
                </td> */}
                <th className='track__item__name'>
                TITLE
                </th>
                <th className='track__artist__name'>
                ARTIST
                </th>
                <th className='track__item__duration'>
                SCORE
                </th>
            </tr>
          {topTracks ? (
            topTracks.items.map((track, i) => <TrackItem track={track} key={i} />).slice(0, 10)
          ) : (
            <Loader />
          )}
        </table>
      </div>
    );
  };

export default TopTrackList;