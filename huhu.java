// Online Java Compiler
// Use this editor to write, compile and run your Java code online
//floor of a Number
public class huhu {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
        int[] arr = {12 , 13 , 14 , 15 , 16, 17 , 18 , 19 , 20 , 66 , 67 , 68 , 69};
        int target = 70;
        int ans = ceilOfNumber(arr , target);
        System.out.println(arr[ans] + " is Available at index no "+ ans);
    }
    static int ceilOfNumber(int[] arr , int target){
        int start = 0;
        int end = arr.length-1;
        if(target > arr[end]){
            return -1;
        }
    while(start <= end){
        int mid = start + (end-start)/2;
        if(arr[mid]<target){
            start = mid+1;
        }else if(arr[mid]>target){
            end = mid-1;
        }else{
            return mid;
        }
    }
    return start;
    }
}