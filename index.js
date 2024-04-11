// Code your solution in this file!
// index.js

function distanceFromHqInBlocks(blocks) {
    if (blocks > 42) {
      return blocks - 42;
    } else {
      return 42 - blocks;
    }
  }
  
  function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264; // Assuming 1 block = 264 feet
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264; // Assuming 1 block = 264 feet
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
        return 'distance exceeds maximum limit';
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };