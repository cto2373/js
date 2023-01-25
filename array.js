function setOne() {
   
   const ar = [6, 21, 32, 34, 41, 75];
   const arr = [];
   const len = ar.length - 1;
   for (let i = 0; i <= ar.length; i++) {
      const j = Math.floor(Math.random() * (ar[len] - ar[0]) + ar[0]);
      if (!ar.includes(j)) {
         arr.push(j);
      }
   }
   document.writeln(arr)
}

function setTwo() {
   let mat = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 1, 2, 3, 4, 5],
      [6, 8, 9, 7, 6, 8, 3],
      [5, 7, 3, 5, 4, 6, 8],
      [4, 6, 4, 3, 5, 7, 5]
   ];
   
   let sum = 0;
   for (let i = 0; i < mat.length; i++){
      for (let j = 0; j < mat[i].length; j++){
         sum += mat[i][j];
      }
   }
   console.log(sum);
}

function setThree(){
   let cheet = [1, 22, 45, 62, 99, 74, 53];
   let even = 0;
   for (let i = 0, j = 1; i < cheet.length, j < cheet.length; i++, j++){
      even = cheet[j];
      cheet[j] = cheet[i];
      cheet[i] = even;
   }
   console.log(cheet);
}

function setFour() {
   let mat = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 1, 2, 3, 4, 5],
      [6, 8, 9, 7, 6, 8, 3],
      [5, 7, 3, 5, 4, 6, 8],
      [4, 6, 4, 3, 5, 7, 5]
   ];
   let min = 0;
   for (let i = 0; i < mat.length; i++) {
      min = mat[i][0];
      for (let u = 0; u < mat[i].length; u++) {
         if ( min>= mat[i][u]) {
            min = mat[i][u];
         }
      }
      console.log(min);
      
   }
}

setOne()

setTwo()

setThree()

setFour()
