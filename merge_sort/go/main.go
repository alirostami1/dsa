package mergesort

import (
	"cmp"
)

func MergeSort[T cmp.Ordered](arr []T) {
	if len(arr) <= 1 {
		return
	}

	q := len(arr) / 2
	MergeSort(arr[:q])
	MergeSort(arr[q:])
	merge(arr[:q], arr[q:], arr)
}

func merge[T cmp.Ordered](leftArr, rightArr, destArr []T) {
	copiedLeftArr := make([]T, len(leftArr))
	copy(copiedLeftArr, leftArr)
	copiedRightArr := make([]T, len(rightArr))
	copy(copiedRightArr, rightArr)
	rightArrItr, leftArrItr, destArrItr := 0, 0, 0

	for leftArrItr < len(copiedLeftArr) && rightArrItr < len(copiedRightArr) {
		if copiedLeftArr[leftArrItr] < copiedRightArr[rightArrItr] {
			destArr[destArrItr] = copiedLeftArr[leftArrItr]
			leftArrItr++
			destArrItr++
		} else {
			destArr[destArrItr] = copiedRightArr[rightArrItr]
			rightArrItr++
			destArrItr++
		}
	}

	for leftArrItr < len(leftArr) {
		destArr[destArrItr] = copiedLeftArr[leftArrItr]
		leftArrItr++
		destArrItr++
	}
	for rightArrItr < len(rightArr) {
		destArr[destArrItr] = copiedRightArr[rightArrItr]
		rightArrItr++
		destArrItr++
	}
}
