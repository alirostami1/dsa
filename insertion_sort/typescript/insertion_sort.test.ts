import insertion_sort from './insertion_sort';

test('sorting an array', () => {
    const arr = [5, 2, 4, 3, 1]

    const correctlySortedArr = [...arr]
    correctlySortedArr.sort()

    insertion_sort(arr, arr.length)

    expect(arr).toEqual(correctlySortedArr);
});
