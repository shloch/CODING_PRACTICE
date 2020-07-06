# Given a string of integers, return the number of odd-numbered substrings that can be formed.

# For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

# solve("1341") = 7. See test cases for more examples.

# Good luck!

# If you like substring Katas, please try

# exercise = https://www.codewars.com/kata/59da47fa27ee00a8b90000b4/train/python

def solve(str):
    answers = []
    for rotation in range(1,len(str)+1):
        for i in range(len(str)):
            if str[i:rotation].isdigit(): 
                num = int(str[i:rotation])
                if num % 2 == 1:
                    answers.append(str[i:rotation])
    return len(answers)

# ------------ testing samples----------
# Test.it("Basic tests")
# Test.assert_equals(solve("1347"),7)
# Test.assert_equals(solve("1357"),10)
# Test.assert_equals(solve("13471"),12)
# Test.assert_equals(solve("134721"),13)
# Test.assert_equals(solve("1347231"),20)
# Test.assert_equals(solve("13472315"),28)


