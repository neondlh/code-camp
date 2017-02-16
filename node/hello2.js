var arrs = process.argv;
var sum = 0;
for(var i=2; i<arrs.length; i++){
  sum += Number(arrs[i]);
}
console.log(sum);
