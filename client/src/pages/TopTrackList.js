import React, { useState, useEffect } from 'react';
import {getTopTracks30Days, getTopTracks6Months, getTopTracksAllTime} from "../spotify"; 
import "../styles/Style.css";
import { catchErrors } from '../util';
import Loader from "./Loader";
import "../styles/List.css";
import { formatDuration, formatRank } from '../util';


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
      <div className='center-page'>
        
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
            <tr className='track__item'>
                <th className='track__item__num'>
                RANK
                </th>
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
            // topTracks.items.map((track, i) => <TrackItem track={track} key={i} />).slice(0, 10)

            topTracks.items.map((track, i) => 
                <tr className='track__item'>
                    <td className="track__item__num">{"NO." + formatRank(i+1)}</td>
                    <td className="track__item__name">
                        {track.name.toUpperCase()}
                    </td>
                    <td className="track__item__name">
                        {track.artists.map((artist, i) => (
                        <span key={i}>
                        {artist.name.toUpperCase()}
                        {i !== track.artists.length - 1 && ", "}
                        </span>
                        ))}
                    </td>
                    <td className="track__item__duration">
                        {formatDuration(track.duration_ms)}
                    </td>
                </tr>
              ).slice(0,10)

          ) : (
            <Loader />
          )}
        </table>
      </div>
    );
  };

export default TopTrackList;