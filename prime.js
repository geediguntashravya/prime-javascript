function test_prime(num){
    if (num===2) {
      return true;
    }
    else if(num>1){
      for(var i=2;i<num;i++){
        if(num%i!==0 ) {
          return true;
        }
        else if(num===i*i){
          return false
        }
        else {
          return false;
        }
      }
    }
    else{
      return false;
    }
  }
  
  var assert=require('assert') 
  assert(test_prime(0)===false,"Testcase 1 passed");
  assert(test_prime(2),"Testcase 2 passed");
  assert(test_prime(5),"Testcase 3 passed");
  assert(test_prime(10)===false,"Testcase 4 passed");
  console.log("All testcases passed");
    
    