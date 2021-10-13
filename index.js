// Code your solution in this file!
const distanceFromHqInBlocks = (street) => {
    if (street < 42) {
        return 42 - street;
    } else {
        return street - 42;
    }
}

const distanceFromHqInFeet = (blocks) => {
    let blockInFeet = distanceFromHqInBlocks(blocks) * 264;
    return blockInFeet;
}

const distanceTravelledInFeet = (street1, street2) => {
    let block = (street1 > street2) ? street1 - street2 : street2 - street1;
    return block * 264;
}

const calculatesFarePrice = (start, destination) => {
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet < 400) {
        return 0;
      } else if (distanceInFeet > 400 && distanceInFeet < 2000) {
        return (distanceInFeet - 400) * 0.02;
      } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25
      } else {
        return 'cannot travel that far'
      }
}