package insertionsort_test

import (
	"slices"
	"testing"

	insertionsort "github.com/alirostami1/dsa/go/insertion_sort"
	"github.com/stretchr/testify/assert"
)

func TestInsertionSort(t *testing.T) {
	arr := []int{5, 2, 4, 3, 1}

	correctlySortedArr := make([]int, len(arr))
	copy(correctlySortedArr, arr)
	slices.Sort(correctlySortedArr)

	insertionsort.InsertionSort(arr, len(arr))

	assert.Equal(t, correctlySortedArr, arr)
}
