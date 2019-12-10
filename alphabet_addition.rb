# frozen_string_literal: true

# https://www.codewars.com/kata/alphabetical-addition/train/ruby
# Your task is to add up letters to one letter.

# The function will be given a variable amount of
# arguments, each one being a letter to add.

# Notes:
# Letters will always be lowercase.
# Letters can overflow (see second to last example of
# the description)
# If no letters are given, the function should return 'z'

# Examples:
# add_letters('a', 'b', 'c') = 'f'
# add_letters('a', 'b') = 'c'
# add_letters('z') = 'z'
# add_letters('z', 'a') = 'a'
# add_letters('y', 'c', 'b') = 'd' # notice the letters overflowing
# add_letters() = 'z'

def add_letters(*letters)
  return 'z' if letters.size.zero?

  dict = {}
  sum = 0
  ('a'..'z').each_with_index { |char, idx| dict[char] = idx + 1 }
  letters.each { |char| sum += dict[char] }

  return dict.index(sum) if sum <= 26

  (sum % 26).zero? ? 'z' : dict.index(sum % 26)
end
