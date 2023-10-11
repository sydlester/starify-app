// Get the query params off the window's URL
export const getHashParams = () => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  };
  

  /**
 * Higher-order function for async/await error handling
 * @param {function} fn an async function
 * @returns {function}
 */
export const catchErrors = (fn) => {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };
};

/**
 * Format milliseconds to time duration
 * @param {number} ms number of milliseconds
 * @returns {string} formatted duration string
 * @example 216699 -> '3:36'
 */
export const formatDuration = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  if(minutes < 10){
    return `0${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  } else {
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
};

export const toAllCaps = (str) => {
  const cap = str.toUpperCase;
  return cap;
}

export const formatRank = (num) =>{
  if (num < 10){ 
    return 0 + "" + num;
  } else {
    return num;
  }
}
