
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  main();
  process.exit();
});

function main(){

      // 입력받은 문자배열을 숫자배열로 변환
      const numbers = input.map(Number);

      let result = numbers[0] * numbers[1] * numbers[2];
  
      // 결과 값을 문자열로 변환
      result = String(result);
  
      for (let i = 0; i <= 9; i++) {
          // 문자열을 0~9까지의 문자로 split했을 때 나오는 배열요소 수 -1
          // ex) 17037300 을 0 으로 split하면 ['17','373','','']
          //     여기다가 1을 빼주면 총 split한 횟수 = 해당 문자의 개수
          console.log(result.split(String(i)).length - 1);
      }
}