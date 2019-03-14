num = [23,33,43,53,63,73,83,93,13,10];

function findNum(Number,num)
{
  for (i=0; i<num.length; i++){
   if (num[i]==Number){
     return i;
   }  
  }
   return -1;
}
console.log(findNum(13,num));