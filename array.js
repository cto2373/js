const ar = [6, 21, 32, 34, 41, 75];
const arr = [];
const len = ar.length - 1;
for (let i = 0; i <= ar.length; i++) {
   const j = Math.floor(Math.random() * (ar[len] - ar[0]) + ar[0]);
   if (!ar.includes(j)) {
      arr.push(j);
   }
   document.writeln()
}