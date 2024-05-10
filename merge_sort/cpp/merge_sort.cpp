#include <stdio.h>

void merge_sort(int arr[], int p, int r);
void printArr(int arr[], int n);

int main() {
  int arr[5] = {1, 5, 2, 3, 4};
  int size = sizeof(arr) / sizeof(arr[0]);

  merge_sort(arr, 0, 4);
  printArr(arr, size);
}

void merge(int arr[], int p, int q, int r) {
  // calculate size of left and right subarrays
  int nl = q - p + 1;
  int nr = r - q;

  // create the left and right subarrays and copy the corresponding elements
  // into them
  int left[nl];
  int right[nr];
  for (int i = 0; i < nl; i++) {
    left[i] = arr[p + i];
  }
  for (int i = 0; i < nr; i++) {
    right[i] = arr[q + i + 1];
  }

  int lp = 0;
  int rp = 0;
  int cp = p;

  while (lp < nl && rp < nr) {
    if (left[lp] < right[rp]) {
      arr[cp] = left[lp];
      lp++;
    } else {
      arr[cp] = right[rp];
      rp++;
    }
    cp++;
  }

  while (lp < nl) {
    arr[cp] = left[lp];
    lp++;
  }
  while (rp < nr) {
    arr[cp] = right[rp];
    rp++;
  }
}

void merge_sort(int arr[], int p, int r) {
  if (p >= r) {
    return;
  }

  int q = p + (r - p) / 2; // 0 - 2 => 0 - 1 => 0 - 0 & 1 - 1

  merge_sort(arr, p, q);
  merge_sort(arr, q + 1, r);
  merge(arr, p, q, r); // 0 0 1
}

void printArr(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    printf("%d,", arr[i]);
  }
}
