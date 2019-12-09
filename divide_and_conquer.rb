# Given a mixed array of number and string representations 
# of integers, add up the string integers
# and subtract this from the total of the non-string integers.

def div_con(arr)
  sum_int = 0
  sum_str = 0
  arr.each { |x| x.class == String ? sum_str += x.to_i : sum_int += x }
  sum_int - sum_str
end

# test samples
# Test.describe "Basic tests" do
#  Test.assert_equals(div_con([9, 3, '7', '3']), 2);
#  Test.assert_equals(div_con(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
# end
