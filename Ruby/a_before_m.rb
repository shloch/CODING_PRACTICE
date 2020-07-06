# frozen_string_literal: true

# Write a function that accepts an array of randomized
# letters "a" to "z" and returns true if the
# letter "a" is before the letter "m" in the array,
# and returns false if the letter "m" is before the letter "a".

# Letters in the provided array will only be downcase and there
# will only be one instance of a letter in the array, resulting
# in an array that is 26 elements long.

# Example:
# rando_array = %w(q a z w s x e d c r f v t g b y h n u j m i k o l p)
# a_before_m?(rando_array) #=> true
# rando_array_2 = %w(p o l i k u j m y h n t g b r f v e d c w s x q a z)
# a_before_m?(rando_array_2) #=> false

def a_before_m?(array)
  array.index('a') < array.index('m')
end
