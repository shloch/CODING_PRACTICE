/**

https://www.codewars.com/kata/5aa1bcda373c2eb596000112/solutions/javascript

Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , negatives and zeros .

Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
*/

function maxTriSum(numbers){
  if(numbers.length == 3) return numbers.reduce((acc,x) => acc+x)

  const sorted = numbers.sort((a,b) => a-b)
  const toSum = [sorted[sorted.length-1]]
  for(let i = numbers.length -2; i > 0; i--) {
    if(!toSum.includes(sorted[i])) {
      toSum.push(sorted[i])
      
      if(toSum.length == 3){
        return toSum.reduce((acc,x) => acc+x)
      }
    }
  }
}

div[class="twin-blog-child"], .t-2-2, .t-1-2 {
          padding-top: 5%;
          padding-top: 2%;
          padding-bottom: 3%;
          border-top:1px solid $veryGray;
          //border-bottom: 1px solid $veryGray;
          display: grid;
          grid-template-columns: 16% 84%;
          .img {
            //border:1px solid lightcoral;
            img {
              height: 80px;
              width: 90px;
            }
          }
          .caption {
            //border:1px solid lightcoral;
            .caption-p {
              font-weight: 800;
            }
            .by {
              font-size: 0.79em;
              //border-top: 1px solid $veryGray;
              color: $noSoBlack;
            }
          }
        }