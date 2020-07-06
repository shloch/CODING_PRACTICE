# frozen_string_literal: true.
# A perfect power is a classification of positive integers:

# In mathematics, a perfect power is a positive integer that can
# be expressed as an integer power of another positive integer.
# More formally, n is a perfect power if there exist
# natural numbers m > 1, and k > 1 such that mk = n.

# Your task is to check wheter a given integer is a
# perfect power. If it is a perfect power, return a pair m
# and k with mk = n as a proof.
# Otherwise return Nothing, Nil, null, NULL, None
# or your language's equivalent.

# Note: For a perfect power, there might be several pairs.
# For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions.
# However, the tests take care of this,
# so if a number is a perfect power, return any pair that proves it.

# Examples
# isPP(4) => [2,2]
# isPP(9) => [3,2]
# isPP(5) => nil

# ==================Algorithm===================

def isPP(n)
  ## we keep one number here to determine the other pair
  active = []

  ## We limit at square root number.....
  limit = Math.sqrt(n) + 1

  (2..limit.to_i).each do |i|
    active[0] = i
    (2...n).each do |num2|
      num1 = active[0]
      if num1.pow(num2).equal?(n)
        active << num2
        return active
      elsif num1.pow(num2) > n
        break
      end
    end
  end
  return nil if active.empty?
end

# =============== test===============================
# describe "isPP" do
#    it "should work for some small numbers" do
#      Test.assert_equals(isPP(4), [2,2], "4 = 2^2")
#      Test.assert_equals(isPP(8), [2,3], "8 = 2^3")
#      Test.assert_equals(isPP(36), [6,2], "36 = 6^2")
#      Test.assert_equals(isPP(9), [3, 2], "9 = 3^2")
#      Test.assert_equals(isPP(5), nil, "5 is not perfect")
#    end
#    it "should return valid pairs for random inputs" do
#        i = 0
#        while (i < 20) do
#            a = rand(1000..65000)
#            #puts a
#            r = isPP(a)
#            if ((r != nil) && (r[0] ** r[1] != a)) then
#                Test.assert_equals(r, a, "your pair [#{r[0]}, #{r[1]}] doesn't work for #{a}")
#                break
#            end
#            i += 1
#        end
#    end
# end
