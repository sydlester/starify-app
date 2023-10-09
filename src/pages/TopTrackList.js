import React, { useState, useEffect } from 'react';
import {getTopTracks30Days, getTopTracks6Months, getTopTracksAllTime} from "../spotify"; 
import "../styles/Style.css";
import { catchErrors } from '../util';
import TrackItem from '../components/TrackItem';
import Loader from "./Loader";
import "../styles/List.css";
//import styled from 'styled-components/macro';
//import theme from '../styles/theme';
// const { colors } = theme;


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
      <div>
        <div>
          <h2>TOP TRACKS</h2>
          <div className='timeframe'>
            <btn isActive={activeRange === 'short'} onClick={() => setRangeData('short')}>
              <span>4 WEEKS</span>
            </btn>
            <btn isActive={activeRange === 'medium'} onClick={() => setRangeData('medium')}>
              <span>6 MONTHS</span>
            </btn>
            <btn isActive={activeRange === 'long'} onClick={() => setRangeData('long')}>
              <span>ALL TIME</span>
            </btn>
          </div>
        </div>
        <ul>
          {topTracks ? (
            topTracks.items.map((track, i) => <TrackItem track={track} key={i} />).slice(0, 10)
          ) : (
            <Loader />
          )}
        </ul>
      </div>
    );
  };

export default TopTrackList;