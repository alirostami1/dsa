import mergeSort from './mergesort';

test('sorting an array', () => {
    const arr = [5, 2, 4, 3, 1]

    const correctlySortedArr = [...arr]
    correctlySortedArr.sort()

    mergeSort(arr, 0, 4)

    expect(arr).toEqual(correctlySortedArr);
});

