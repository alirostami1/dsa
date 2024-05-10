package mergesort_test

import (
	"slices"
	"testing"

	mergesort "github.com/alirostami1/dsa/merge_sort/go"
	"github.com/stretchr/testify/assert"
)

func TestMergeSort(t *testing.T) {
	arr := []int{5, 2, 4, 3, 1}

	correctlySortedArr := make([]int, len(arr))
	copy(correctlySortedArr, arr)
	slices.Sort(correctlySortedArr)

	mergesort.MergeSort(arr)

	assert.Equal(t, correctlySortedArr, arr)
}
