/*    _____________________
    |  _________________  |
    | | QW  3.141592654 | |
    | |_________________| |
    |  __ __ __ __ __ __  |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
*/

package insertion_sort;

import java.util.Arrays;

public class MainClass {
    public static void main(String[] args) {
        int[] array = new int[]{6, 3, 7, 1, 9, 4};                              // We need an array to iterate through
        int tmp;                                                                // This is for holding out variable we are working on
        int j;

        for(int i = 1; i < array.length; i++){                                  // Start with the second element. We will begind with second element
            tmp = array[i];                                                     // Each time we run through, we save i as a temp so j can be switched if need be
            for(j = i; j > 0 && tmp < array[j-1]; j--){                         // J is equal to the current element being run. And test that the current array (j) is less than the one below it. If not, we can break out.
                array[j] = array[j-1];                                          // if its true, it will shift the element below up to the current position.
            }
            array[j] = tmp;                                                     // We need to store out current j variable so we can switch it
        }
        System.out.println(Arrays.toString(array));
    }
}
