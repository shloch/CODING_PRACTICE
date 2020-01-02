# frozen_string_literal: true

# Write a function isIntArray with the below signature.

# function isIntArray(arr) {
#    return true;
# }
# returns true if every element in an array is an integer.
# returns true if array is empty.
# returns false for every other input.

def is_int_array(arr)
  return false if arr.class != Array

  all_int = []

  arr.each do |x|
    all_int << true if x.class == Integer
    if x.class == Float
      all_int << true if (x - x.to_i).zero?
    end
  end

  arr.size == all_int.size
end

#----------- sample test ---------
# Test.describe("Basic tests") do
# Test.assert_equals(is_int_array([]), true, "Input: []")
# Test.assert_equals(is_int_array([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]")
# Test.assert_equals(is_int_array([1, 2, nil]), false, "Input: [1,2, nil]")
# Test.assert_equals(is_int_array(nil), false, "Input: nil")
# Test.assert_equals(is_int_array(""), false, "Input: ''")
# Test.assert_equals(is_int_array([nil]), false, "Input: [nil]")
# Test.assert_equals(is_int_array(["-1"]), false, "Input: ['-1']")
# end
