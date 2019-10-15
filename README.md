# DNA-Encoder
#### Description
DNA is a very stable and compact storage medium.  The language of DNA consists of four bases, each of which may be thought of as a character in the DNA alphabet.  For our purposes, these characters (in order) are: A, T, G, and C.  We would like to store digital data in DNA!

### Preview / Run Application

http://htmlpreview.github.io/?https://github.com/RyanLBui/DNA-Encoder/blob/master/index.html

or 

1. Copy repository to your computer. git clone https://github.com/RyanLBui/DNA-Encoder
2. cd .\DNA-Encoder\
3. start index.html

### Built With
* HTML
* JavaScript
* CSS

### Example Tests
Objective 1:
<ul>
<li>(Given Example) Input: a, Output: TGAT</li>
<li>(Given Example) Input: cat, Output: TGACTGATTCTA</li>
<li>Input: aA, Output: TGATTAAT</li>
<li>Input: aaa, Output: TGATTGATTGAT</li>
</ul>

Objective 2:  
// checking if correct by using examples given for obj 1
<ul>
<li>Input: a, Output: UGAU</li>
<li>Input: cat, Output: UGACUGAUUCUA</li>
<li>Input: aA, Output: UGAUUAAU</li>
<li>Input: aaa, Output: UGAUUGAUUGAU</li>
</ul>

Objective 3:  
<ul>
<li>First Input: TGAT, Second Input: a, Output: ASCII equivalent of DNA strand: a  
Substring begins at index: 0 </li>
<li>First Input: TGACTGATTCTA, Second Input: c ,Output: ASCII equivalent of DNA strand: cat
Substring begins at index: 0 </li>
<li>First Input: TGACTGATTCTA, Second Input: a ,Output: ASCII equivalent of DNA strand: cat
Substring begins at index: 1 </li>
<li>First Input: TGACTGATTCTA, Second Input: t ,Output: ASCII equivalent of DNA strand: cat
Substring begins at index: 2 </li>
<li>First Input: TGACTGATTCTA, Second Input: r ,Output: ASCII equivalent of DNA strand: cat
-1 Substring does not exist </li>
</ul>

Given examples for objective 4:
<ul>
<li>Input: ACTGACTAAGAT, Output: cat</li>
</ul>

Objective 5:
<ul>
<li>Input 1: TGAT, Input 2:  TGACTGATTCTA, Output: TGAT</li>
<li>Input 1: TGACTGATTCTA, Input 2:  TCTTAAAA, Output: TCTAA</li>
<li>Input 1: TGAT, Input 2:  ZQWER, Output: No common subsequence</li>
</ul>
