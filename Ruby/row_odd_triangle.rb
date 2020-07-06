# frozen_string_literal: true

# Given a triangle of consecutive odd numbers:
#
#             1
#          3     5
#       7     9    11
#   13    15    17    19
# 21    23    25    27    29
# ...
# find the triangle's row knowing its index (the rows are 1-indexed), e.g.:

# odd_row(1)  ==  [1]
# odd_row(2)  ==  [3, 5]
# odd_row(3)  ==  [7, 9, 11]
# Note: your code should be optimized to handle big inputs.
# The idea for this kata was taken from this kata: "Sum of odd numbers"
# (https://www.codewars.com/kata/sum-of-odd-numbers)

def odd_row(n)
  return [1] if n == 1

  answer = [n * (n - 1) + 1]
  answer << answer.last + 2 while answer.length < n
  answer
end

#==================== sample tests =============
# Test.assert_equals(odd_row(1), [1])
# Test.assert_equals(odd_row(2), [3, 5])

# Test.assert_equals(odd_row(13), [157, 159, 161, 163, 165, 167, 169, 171,
#    173, 175, 177, 179, 181])

# also tested big numbers like:
# 1043685
# 1084779
# 1036581
# 1027917
