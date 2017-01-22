import java.util.Arrays;

public class MainClass {
    public static void main(String[] args) {
        int[] array = new int[]{6,4,3,9,7,10,2};
        int tmp;

        for(int iteration=0; iteration < array.length-1; iteration++){
            for(int j=0; j < array.length-1-iteration; j++){
                if(array[j]>array[j+1]){
                    tmp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = tmp;
                }
            }
        }
        System.out.println(Arrays.toString(array));
    }
}
