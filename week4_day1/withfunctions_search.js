
index_of_element = function(element){

    arr=[12, 45, 34, 23, 56];
    for(i=0;i<=arr.length;i++){
    
      if(arr[i]== element){
    
        index = i;
        return index;
      }
      
    }
    return -1;
    }
     console.log("The index of searched element is " +index_of_element(56));