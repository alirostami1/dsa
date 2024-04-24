#include <stdio.h>

void printArr(int arr[], int n);
void insertion_sort(int arr[], int n);
void insertion_sort_dec(int arr[], int n);

int main(int argc, char *argv[]) {
  int arr[5] = {1, 5, 2, 3, 4};
  int size = sizeof(arr) / sizeof(arr[0]);

  insertion_sort(arr, size);
  printArr(arr, size);

  printf("\n");
  insertion_sort_dec(arr, size);
  printArr(arr, size);

  return 0;
}

void insertion_sort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int insertElement = arr[i];
    int j = i - 1;
    while (j >= 0 && arr[j] > insertElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = insertElement;
  }
}

void insertion_sort_dec(int arr[], int n) {
  for (int i = n - 2; i >= 0; i--) {
    int insertElement = arr[i];
    int j = i + 1;
    while (j < n && arr[j] > insertElement) {
      arr[j - 1] = arr[j];
      j++;
    }
    arr[j - 1] = insertElement;
  }
}

void printArr(int arr[], int n) {
  for (int i = 0; i < n; i++) {
    printf("%d,", arr[i]);
  }
}
