/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{  url:string }>}
 */

import jsondata from './slide.json';
export const getImages = (length = 5) => {
    // return fetch(`./slide.json`)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     const images = [];
    //     response.forEach((c) => {
    //       const url = c?.image?.url;

    //     images.push({ url });
    //     });
    //     return images.slice(0, length); // remove the extra cats
    //   });
    const images = [];
    for (var item in jsondata.items) {
      images.push(jsondata.items[item].image);
    }
    return images.slice(0, length);
  };