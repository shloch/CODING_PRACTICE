# Write a program that, given a word, computes the scrabble score for that word.

# Letter Values
# You'll need these:

# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# There will be a preloaded dictionary dict_scores with
#  all these values: dict_scores["E"] == 1

# Examples
# "cabbage" --> 14
# "cabbage" should be scored as worth 14 points:

# 3 points for C
# 1 point for A, twice
# 3 points for B, twice
# 2 points for G
# 1 point for E
# And to total:

# 3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

# EXERCISE = https://www.codewars.com/kata/558fa34727c2d274c10000ae/train/python

def scrabble_score(text): 
    str = text[:].upper()
    dict_scores = {
        "AEIOULNRST":1,
        'DG':2,
        'BCMP':3,
        'FHVWY':4,
        'K': 5,
        'JX': 8,
        'QZ': 10
    }
    count = 0
    for char in str:
        for kkey in dict_scores.keys():
            if char in kkey:
                count += dict_scores[kkey]
    return count


# ------------ test samples ----------
# @test.describe('"Basic tests')
# def example_tests():
#     test.assert_equals(scrabble_score(""), 0, "returns 0 for ''")
#     test.assert_equals(scrabble_score('a'), 1, 'returns 1 for a')
#     test.assert_equals(scrabble_score("street"), 6, 'returns 6 for street')
#     test.assert_equals(scrabble_score("STREET"), 6, 'returns 6 for STREET')
#     test.assert_equals(scrabble_score(' a'), 1, 'returns score of " a" (with space)')
#     test.assert_equals(scrabble_score("st re et"), 6, 'returns 6 for street with whitespaces')