import insertion_sort from './insertion_sort';

test('sorting an array', () => {
    const arr = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
    const correctlySortedArr = [...arr]
    correctlySortedArr.sort((a, b) => a - b)

    insertion_sort(arr, arr.length)

    expect(arr).toEqual(correctlySortedArr);
});
