function swap(arr, i, j) {
  // Function for swapping two elements in an array
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(array, start, end) {
  // Rearranges elements based on pivot value
  // Returns the final index of the pivot

  let pivot = array[end]; // Pivot is last element

  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (array[j] <= pivot) {
      i++;

      swap(array, i, j);
    }
  }

  swap(array, i + 1, end);

  return i + 1;
}

function quicksort(array) {
  let n = array.length;

  // Empty array case
  if (n === 0) return [];

  // Initialize with original array bounds
  let stack = [[0, n - 1]];

  let p; // Pivot index
  let subarr_bounds;

  while (stack.length !== 0) {
    subarr_bounds = stack.pop();

    start = subarr_bounds[0];
    end = subarr_bounds[1];

    if (start < end) {
      p = partition(array, start, end);
      stack.push([start, p - 1]);
      stack.push([p + 1, end]);
    }
  }

  return [...array];
}
