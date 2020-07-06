# frozen_string_literal: true

# Given an array of numbers, you must return a string.
# The numbers correspond to the letters of the
# alphabet in reverse order: a=26, z=1 etc.
# You should also account for '!', '?' and ' '
# that are represented by '27', '28'
# and '29' respectively.

def switcher(arr)
  dict = {}
  ('a'..'z').each_with_index { |char, i| dict[26 - i] = char }
  dict[27] = '!'
  dict[28] = '?'
  dict[29] = ' '

  answer = []
  arr.each { |n| answer << dict[n.to_i] }
  answer.join
end

#============ sample tests ===============
# Test.describe("Basic tests") do
# Test.assert_equals(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars')
# Test.assert_equals(switcher(['4', '24']), 'wc')
# Test.assert_equals(switcher(['12']), 'o')
# Test.assert_equals(switcher(['12','28','25','21','25','7','11','22','15']), 'o?bfbtpel' )
# end
