function fufufu(str) {
  
  var string = str
  var arr = ['pro', 'gram', 'merit', 'program', 'programmer', 'it' ]
  var ulang = 1
  var has
  var buang = []
  var buang2 = []
  var buang_hasil = []
  var t = 0
  var cek = ''
  
  var hasil = ''
  
  for(var x = 0; x < arr.length; x++) {
    has = string.indexOf(arr[x])
    if(has >= 0) {
      buang.push(arr[x])
    }
  }
  
  
  for(var i = 0; i < ulang; i++) {
      
    //console.log(arr)
     for(var x = 0; x < arr.length; x++) {
       
       //if(buang_hasil.length > 0) {
       //  cek += buang_hasil[buang_hasil.length - 1]
       //}
       //console.log(cek+arr[x])
       has = string.indexOf(cek+arr[x])
       //console.log(arr[x])
       if(has >= 0) {
         
         //var valid = buang_hasil[buang_hasil.length-1] + arr[x]
         //if(string.indexOf(valid) >= 0) {
           
           //console.log(arr[x])
           buang_hasil.push(arr[x])
           cek += arr[x]
           //string = string.substring(arr[x].length, string.length)
         
           arr.splice(x, 1)
         
           x -= 1
           t += 1
           
         //}
         
         
       }
       

       //cek = ''
     }
     cek = ''
    
    //console.log(buang2)
    if(t < buang.length) {
       ulang += 1
      
    }
    
    var arr2 = [ ...arr, ...buang_hasil]
    arr = arr2
    
    //console.log(arr2)
   
    
    console.log(buang_hasil)
    string = str
    buang_hasil = []
    //buang2 = buang
    
  }
    
}


fufufu('programmerit')


