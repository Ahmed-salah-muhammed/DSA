//--------------sort colors by quick sort----------------

var sortColors = function (nums) {
  const quicksort = (arr) => {
    if (arr.length < 2) return arr;

    let pivot = arr[0];
    let lessThanPivot = arr.slice(1).filter((ele) => ele <= pivot);
    let greaterThanPivot = arr.slice(1).filter((ele) => ele > pivot);

    return [...quicksort(lessThanPivot), pivot, ...quicksort(greaterThanPivot)];
  };

  const sortedArray = quicksort(nums);
  nums.splice(0, nums.length, ...sortedArray);
};
