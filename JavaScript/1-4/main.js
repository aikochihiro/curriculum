let number = 1;

//1から100までのループ
for(let number = 1; number <= 100; number++){

//3の倍数のとき、 Fizz! と出力します。
if(number % 3 == 0 && number % 5 != 0)
  console.log("Fizz!");

//5の倍数のとき、 Buzz! と出力します。
else if(number % 3 != 0 && number % 5== 0)  
  console.log("Buzz!");

//3の倍数かつ5の倍数のとき、 FizzBuzz!! と出力します。
else if(number % 3 == 0 && number % 5 == 0)
  console.log("FizzBuzz!!");

//3の倍数でも、5の倍数でもない場合は、その数を出力します。
else
  console.log(number);
}