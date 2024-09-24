// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  //returns the number of blocks given a value
  if (someValue > 42) {
    return someValue - 42;
  } else if (someValue < 42) {
    return 42 - someValue;
  }
}
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}
function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  if (start > destination) {
    return (start - destination) * 264;
  } else if (start < destination) {
    return (destination - start) * 264;
  }
}
function calculatesFarePrice(start, destination) {
  let total_feet = distanceTravelledInFeet(start, destination);
  //distance for the firs 400 feet
  if (total_feet <= 400) {
    return 0;
  }
  //distance between 400 and 2000 (not including 400, which are free!).
  if (total_feet > 400 && total_feet < 2000) {
    return (total_feet - 400) * 0.02;
    //charges a flat fare of $25 for a distance over 2000 feet and under 2500 feet.
  } else if (total_feet > 2000 && total_feet < 2500) {
    return 25;
    // Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far'
  } else {
    return "cannot travel that far";
  }
  //returns the fare for the customer
}
