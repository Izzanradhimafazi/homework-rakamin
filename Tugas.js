// No. 1
/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari
angka-angka yang terdapat di dalam array
Contoh array:
[
  [
    [1, 2, 3],
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [1, 2],
    [1]
  ]
]
Maka akan menghasilkan output: 22
*/

function deepSum (arr) {
    // Code disini
  
  if (arr === [] ){
    return "No Number"
  }
  
  total = 0
  for (var a=0; a<arr.length; a++){
   
    for (var b=0; b<arr[a].length; b++){
      //console.log(arrMulti[a][b])
      
      for (var c=0; c<arr[a][b].length; c++){
       // console.log(arr[a][b][c])
       total += arr[a][b][c]
      }
    }  
  }
    return total
    
    } 
  
  //TEST CASE
  console.log(deepSum([
    [
      [4, 5, 6],
      [9, 1, 2, 10],
      [9, 4, 3]
    ],
    [
      [4, 14, 31],
      [9, 10, 18, 12, 20],
      [1, 4, 90]
    ],
    [
      [2, 5, 10],
      [3, 4, 5],
      [2, 4, 5, 10]
    ]
  ])); // 316
  
  console.log(deepSum([
    [
      [20, 10],
      [15],
      [1, 1]
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      [2],
      [9, 11]
    ],
    [
      [3, 5, 1],
      [1, 5, 3],
      [1]
    ],
    [
      [2]
    ]
  ])); // 156
  
  console.log(deepSum([])); // No number
  
  
  
  
  
  // No. 2
  /*
     Uppercase
     input: paragraph berupa string
     output: huruf pertama dari paragraph dan huruf pertama setelah tanda baca titik menjadi huruf besar.
     if:
     - jika setelah tanda baca adalah huruf, buatlah jarak spasi nya juga
     BUATLAH JUGA PSEUDOCODE -nya
     Rules:
      - Dilarang menggunakan regex, .reduce .indexOf .lastIndexOf .split
      - Wajib menggunakan pseudocode
  */
  
  function convertUpperCase(paragraph) {
    // doing something

    paragraph.charAt(0).toUpperCase() + paragraph.slice(1);
    console.log(paragraph.replace(/[\.]/g, ". ").trim());
  }
  
let paragraph1 = `A Git Workflow is a recipe or recommendation for how to use Git to accomplish work in a consistent and productive manner. Git workflows encourage users to leverage Git effectively and consistently.Git offers a lot of flexibility in how users manage changes.Given Git's focus on flexibility, there is no standardized process on how to interact with Git. When working with a team on a Git managed project, it’s important to make sure the team is all in agreement on how the flow of changes will be applied. To ensure the team is on the same page, an agreed upon Git workflow should be developed or selected. There are several publicized Git workflows that may be a good fit for your team. Here, we’ll be discussing some of these workflow options.
The array of possible workflows can make it hard to know where to begin when implementing Git in the workplace.This page provides a starting point by surveying the most common Git workflows for software teams. As you read through, remember that these workflows are designed to be guidelines rather than concrete rules. We want to show you what’s possible, so you can mix and match aspects from different workflows to suit your individual needs.`
console.log(convertUpperCase(paragraph1));

let paragraph2 = `Before the developer can publish their feature, they need to fetch the updated central commits and rebase their changes on top of them. This is like saying, “I want to add my changes to what everyone else has already done.” The result is a perfectly linear history, just like in traditional SVN workflows.`
console.log(convertUpperCase(paragraph2));