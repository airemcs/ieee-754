
# IEEE-754 binary-32 Floating Point Operation Application 

DEMO:
[![Watch the demo]](https://www.youtube.com/watch?v=3NgYdx0HWug)

Website URL deployed with render:
https://ieee-754.onrender.com/

To run to your local machine: 
git clone https://github.com/airemcs/ieee-754.git
cd ieee-754 
npm i 
npm run dev

Features:
+ IEEE-754 binary-32 floating point addition
+ Rounding with GRS and Rounding to the nearest even
+ Can limit the number of digits
+ Step by step instruction on the addition of floating point numbers
1. Initial normalization
2. Operation
3. Post-operation normalization
4. Final Answer
+ Also includes a button to get a text file containing the output and the step by step instruction of the operation

TEST CASES:

Output rounded nearest to even:

1.	Operands are equal (positive)

<img width="1280" alt="R1" src="https://github.com/user-attachments/assets/154961af-6182-45d1-8aca-1b09c22c4f94">

2.	Operands are unequal (positive)

<img width="1280" alt="R2" src="https://github.com/user-attachments/assets/921b0bc3-8a5f-4756-8336-e0e38e734882">


3.	Exponents are equal (positive)

<img width="1280" alt="R3" src="https://github.com/user-attachments/assets/3b952b92-14dc-4d9e-8946-d08be7da698f">

4.	Exponents are unequal (positive)

<img width="1280" alt="R4" src="https://github.com/user-attachments/assets/6941fb5b-bf05-45a0-a99e-74750cb037dd">

5.	Operands are equal (negative)

<img width="1280" alt="R5" src="https://github.com/user-attachments/assets/d923e44c-184d-4134-ace3-0ff46a69d621">

6.	Operands are unequal (negative)
<img width="1280" alt="R6" src="https://github.com/user-attachments/assets/e0896a64-8414-488e-9b61-c9bcf426ea43">

7.	Exponents are equal (negative

<img width="1280" alt="R7" src="https://github.com/user-attachments/assets/76531a80-5542-4090-9445-d2b016808dba">

8.	Exponents are unequal (negative)

<img width="1280" alt="R8" src="https://github.com/user-attachments/assets/e55627e5-51f5-4513-80ad-b26391979152">

9.	Exponents: One negative, one positive

<img width="1280" alt="R9" src="https://github.com/user-attachments/assets/fe313206-cb78-4552-b19e-40a8e197d630">


Output with GRS:

10.	Operands are equal (positive)

<img width="1280" alt="GRS1" src="https://github.com/user-attachments/assets/f8f528dc-aaf6-42a3-b04a-12d03148848e">

11.	Operands are unequal (positive)

<img width="1279" alt="GRS2" src="https://github.com/user-attachments/assets/0ebc018e-a5af-4b4c-94c0-fd0beca73d81">

12.	Exponents are equal (positive)\

<img width="1280" alt="GRS3" src="https://github.com/user-attachments/assets/50330aae-32f7-4ca6-b967-6a3bdabd0702">

13.	Exponents are unequal (positive)

<img width="1280" alt="GRS4" src="https://github.com/user-attachments/assets/8764c148-0fdf-40dd-87b7-d1370499bd14">

14.	Operands are equal (negative)

<img width="1280" alt="GRS5" src="https://github.com/user-attachments/assets/ae5d6772-ebeb-4afb-881b-fe3a21bb4f8a">

15.	Operands are unequal (negative)

<img width="1280" alt="GRS6" src="https://github.com/user-attachments/assets/f024fb39-0fe3-4944-bd7e-fa5251407fa5">

16.	Exponents are equal (negative)

<img width="1280" alt="GRS7" src="https://github.com/user-attachments/assets/1ea9c864-70d7-4c7e-8085-b5ba89ba6eed">

17.	Exponents are unequal (negative)

<img width="1280" alt="GRS8" src="https://github.com/user-attachments/assets/ac52a39e-34da-49b9-8e02-244672458fec">

18.	Exponents: One negative, one positive

<img width="1277" alt="GRS9" src="https://github.com/user-attachments/assets/d6b550af-c083-4427-95c5-b046aa5ee173">


