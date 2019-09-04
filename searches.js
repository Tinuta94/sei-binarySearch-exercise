function binarySearch(array, target){
   // Define Start and End Index
  let startIndex = 0;
  let endIndex = array.length - 1;
  // While Start Index is less than or equal to End Index
  while(startIndex <= endIndex) {
    // Define Middle Index (This will change when comparing )
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    // Compare Middle Index with Target for match
    if(target === array[middleIndex]) {
      return middleIndex
    }
    // Search Right Side Of Array
    if(target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      // Assign Start Index and increase the Index by 1 to narrow search
      startIndex = middleIndex + 1;
    }
    // Search Left Side Of Array
    if(target < array[middleIndex]) {
      // Assign End Index and increase the Index by 1 to narrow search
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    // Not found in this iteration of the loop. Looping again.
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }
  // If Target Is Not Found
  return - 1
  console.log("Target value not found in array");
}
    
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found


function recursiveBinarySearch(arr, element){
    if(!arr && arr.length < 1)
        return -1;

    let mid = Math.floor(arr.length / 2);
    console.log(arr, element);
    
    if (arr[mid] === element) {
        console.log('match', mid, element);
        return mid;
    } else if (arr[mid] < element && arr.length > 1) {
        console.log('mid lower', mid, element);
        const i = binarySearch(arr.slice(mid), element);
        return i < 0 ? i : i + mid;
    } else if (arr[mid] > element && arr.length > 1) {
        console.log('mid higher', arr[mid], element);
        return binarySearch(arr.slice(0, mid), element);
    } else {
        console.log('not here', element);
        return -1;
    }
}

//      search through the array recursively for the element
//      you may need to add more parameters to this function!
//      if the element is not found, return -1
//      if the element is found, return the index at which it was found


module.exports = {
    binarySearch,
    recursiveBinarySearch
}