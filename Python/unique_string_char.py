# In this Kata, you will be given two strings a and b and your 
# task will be to return the characters that are not common in the two strings.

# For example:

# solve("xyab","xzca") = "ybzc" 
# --The first string has 'yb' which is not in the second string. 
# --The second string has 'zc' which is not in the first string. 
# Notice also that you return the characters from the first string concatenated with those from the second string.

# More examples in the tests cases.

# Good luck!

# EXERCISE ==> https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/python

def solve(s1,s2):
    answer = []
    for char in s1:
        if char not in s2: answer.append(char)
    for char in s2:
        if char not in s1: answer.append(char)
    return ''.join(answer)