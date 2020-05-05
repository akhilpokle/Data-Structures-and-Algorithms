class Solution {
    public int firstUniqChar(String s) {
        int[] arr = new int[26];
        Arrays.fill(arr,-1);
        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(arr[c-'a'] == -1){
                arr[c-'a'] = i;
            }else{
                arr[c-'a'] = -2;
            }
        }
        int min = Integer.MAX_VALUE;
        for(int i=0;i<26;i++){
            if(arr[i] < min && arr[i] != -2 && arr[i] != -1){
                min = arr[i];
            }
        }
        return min == Integer.MAX_VALUE ? -1 : min;
    }
}
