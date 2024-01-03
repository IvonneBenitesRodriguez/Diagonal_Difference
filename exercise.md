**HackerRank named Diagonal_difference**<br/><br/>
Given a square matrix, calculate the absolute difference between the sums of its diagonals.<br/>

For example, the square matrix arr is shown below:<br/>
1 2 3<br/>
4 5 6<br/>
9 8 9 <br/>

the left-to-right diagonal is 1 + 5 + 9 = 15 <br/>
the right to left diagonal is 3 + 5 + 9 = 17 <br/>
Their absolute difference is [15 - 17] = 2<br/>

Function Description<br/>
Complete the **diagonalDifference** function in the editor below.<br/>
**diagonalDifference** takes the following parameter :<br/>
int arr[n][m]: an array of integers<br/>

**Return**<br/>
int: the absolute diagonal difference<br/>

**Input Format**<br/>
The first line contains a single integer **n** <br/>
the number of rows and columns in the square matrix **arr**<br/>
Each of the next **n** lines describes a row **arr[i]** and consists of **n** space-separated integers **arr[i][j]**

**Constraints**<br/>
-100 =< arr[i][j] =< 100<br/>

**Output Format**<br/>
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.<br/>

**Sample Input**<br/>
3<br/>
11 2   4<br/>
4  5   6<br/>
10 8 -12<br/>

**Sample Ouput**<br/>
15<br/>

**Explanation**<br/>
The primary diagonal is:<br/>
11<br/>
  5<br/>
    -12<br/>

Sum across the primary diagonal: 11 + 5 - 12 =  4 <br/>
The secondary diagonal is: <br/>
     4<br/>
    5<br/>
10<br/>

Sum across the secondary diagonal : 4 + 5 + 10 = 19<br/>
Difference: |4 - 19| = 15<br/>
Note: |x| is the absolute value of x

