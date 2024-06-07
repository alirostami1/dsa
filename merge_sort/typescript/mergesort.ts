export default function mergeSort(arr: number[], p: number, r: number) {
    if (p >= r) {
        return
    }

    const q = p + Math.trunc((r - p) / 2)
    mergeSort(arr, p, q)
    mergeSort(arr, q + 1, r)
    merge(arr, p, q, r)
}

function merge(arr: number[], p: number, q: number, r: number) {
    const leftArrLength = q - p + 1
    const rightArrLength = r - q

    const leftArrCopy: number[] = []
    for (let i = 0; i < leftArrLength; i++) {
        leftArrCopy[i] = arr[p + i]
    }
    const rightArrCopy: number[] = []
    for (let i = 0; i < rightArrLength; i++) {
        rightArrCopy[i] = arr[i + q + 1]
    }

    let leftArrIdx = 0
    let rightArrIdx = 0
    let destArrIdx = p
    while (leftArrIdx < leftArrLength && rightArrIdx < rightArrLength) {
        if (leftArrCopy[leftArrIdx] < rightArrCopy[rightArrIdx]) {
            arr[destArrIdx] = leftArrCopy[leftArrIdx]
            leftArrIdx++
        } else {
            arr[destArrIdx] = rightArrCopy[rightArrIdx]
            rightArrIdx++
        }
        destArrIdx++
    }

    while (leftArrIdx < leftArrLength) {
        arr[destArrIdx] = leftArrCopy[leftArrIdx]
        leftArrIdx++
        destArrIdx++
    }
    while (rightArrIdx < rightArrLength) {
        arr[destArrIdx] = rightArrCopy[rightArrIdx]
        rightArrIdx++
        destArrIdx++
    }
}
