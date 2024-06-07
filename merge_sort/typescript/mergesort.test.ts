import mergeSort from './mergesort';

test('sorting an array', () => {
    // const arr = [5, 2, 4, 3, 1]
    const arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));

    const correctlySortedArr = [...arr]
    correctlySortedArr.sort((a, b) => a - b)

    mergeSort(arr, 0, arr.length - 1)

    expect(arr).toEqual(correctlySortedArr);
});

