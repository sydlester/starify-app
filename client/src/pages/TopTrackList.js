import React, { useState, useEffect } from 'react';

import {getTopTracks30Days, getTopTracks6Months, getTopTracksAllTime} from "../spotify"; 
import { formatDuration, formatRank, catchErrors } from '../util';

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

    function time(len){
        if (activeRange===len){
            return true;
        } else {
            return false;
        }
    }

    time('short');

    return (
      <div>
        <div>
          <h2>- TRACK LEADERBOARD -</h2>
          <div className='timeframe'>
            <btn className="time-btn" isActive={activeRange === 'short'} onClick={() => { setRangeData('short')}} 
            style={{color: (time('short')? "yellow" : "white"), textDecoration: (time('short')? "underline" : "")}}
            >
              <span>4 WEEKS</span>
            </btn>
            <btn className="time-btn" isActive={activeRange === 'medium'} onClick={() => setRangeData('medium')} 
            style={{color: (time('medium')? "yellow" : "white"), textDecoration: (time('medium')? "underline" : "")}}
            >
              <span>6 MONTHS</span>
            </btn>
            <btn className="time-btn" isActive={activeRange === 'long'} onClick={() => setRangeData('long')} 
            style={{color: (time('long')? "yellow" : "white"), textDecoration: (time('long')? "underline" : "")}}
            >
              <span>ALL TIME</span>
            </btn>
          </div>
        </div>
        <table className='top10tracks'>
          <colgroup>
            <col width="10%"/>
            <col width="50%"/>
            <col width="30%"/>
            <col width="10%"/>
          </colgroup>
            <thead className='track-header'>
                <th className='track-item-num'>RANK</th>
                <th className='track-item-name'>TITLE</th>
                <th className='track-artist-name'>ARTIST</th>
                <th className='track-item-duration'>SCORE</th>
            </thead>
          <tbody>
            {topTracks ? (
              topTracks.items.map((track, i) => 
                  <tr className='track-item'>
                      <td className="track-item-num">{"NO." + formatRank(i+1)}</td>
                      <td className="track-item-name">{track.name.toUpperCase()}</td>
                      <td className="track-item-name">
                          {track.artists.map((artist, i) => (
                          <span key={i}>
                          {artist.name.toUpperCase()}
                          {i !== track.artists.length - 1 && ", "}
                          </span>
                          ))}
                      </td>
                      <td className="track-item-duration">{formatDuration(track.duration_ms)}</td>
                  </tr>).slice(0,10)
            ) : 
            (<span className='load'>loading...</span>)
            }
          </tbody>
        </table>
      </div>
    );
  };

export default TopTrackList;