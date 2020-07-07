# Count how often sign changes in array.

# result
# number from 0 to ... . Empty array returns 0

# example
# const arr = [1, -3, -4, 0, 5];

# /*
# | elem | count |
# |------|-------|
# |  1   |  0    |
# | -3   |  1    |
# | -4   |  1    |
# |  0   |  2    |
# |  5   |  2    |
# */

# catchSignChange(arr) == 2;

# EXERCISE ==> https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/python

def catch_sign_change(lst):
    if len(lst) == 0: return 0 
    sign_count = 0
    current_sign = 'negative' if lst[0] < 0 else 'positive'
    for i in range(1, len(lst)):
        tmp_sign = 'negative' if lst[i] < 0 else 'positive'
        if (tmp_sign != current_sign):
            current_sign = tmp_sign
            sign_count += 1
    return sign_count

#  ---------- test samples ------------------
# Test.assert_equals(catch_sign_change([1, 3, 4, 5]), 0)
# Test.assert_equals(catch_sign_change([1, -3, -4, 0, 5]), 2)
# Test.assert_equals(catch_sign_change([]), 0)
# Test.assert_equals(catch_sign_change([-47,84,-30,-11,-5,74,77]), 3)