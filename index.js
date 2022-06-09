



function sort(entrada){
  let array =  [];

  let values = {}

   for( let i = 0; i < entrada.length; i++ ) {
       values[entrada[i]] = 0;
   }

   
   for(let i = 0; i < entrada.length; i++){
     for(let j = 0; j < entrada.length; j++){
        if(entrada[i] > entrada[j]){
             values[entrada[i]]++
        }
     }
     array[values[entrada[i]]]  = entrada[i]
   }
   return array
}


module.exports = sort