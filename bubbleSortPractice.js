//Bubble Sort from mycodeschool Youtube

let a = [2,7,4,1,5,3];
let n = a.length;

// Redundant O(n^2) 3 Runs to completely sort (Ehhh)
function bubble(arr,n) {
for (let i = 0; i < n-1; i++){
    if (arr[i]>arr[i+1]){
       console.log(arr[i]);
       console.log(arr[i+1]);
       [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }
 }
}

// Redundant O(n^2) 3 Runs 2 redundants (Automatic) (Not Good)
function bubble(arr,n) {
      for (let k = 1; k < n-1; k++){
        for (let i = 0; i < n-1; i++){
             if (arr[i]>arr[i+1]){
               [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
             }
         }
      }
}

// Best Case O(n) the flag will stop the loop to avoid redundancy (Pretty Good)
function bubble(arr,n) {
    for (let k = 1; k < n-1; k++){
        let flag = 0;
        for (let i = 0; i < n-k; i++) {
            if (arr[i]>arr[i+1]){
                   [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                flag = 1;
            }
        }
       if (flag === 0) {
           break;
       }
    }
}
