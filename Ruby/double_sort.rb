# Simple enough this one - you will be given an array
# The values in the array will
# either be numbers or strings, or a mix of both. You will not
# get an empty array, nor a sparse one.

# Your job is to return a single array that has first the numbers sorted
# in ascending order, followed by the strings sorted in alphabetic
# order. The values must maintain their original type.

# Note that numbers written as strings are strings and must be
# sorted with the other strings.

def db_sort(arr)
  ints, str = arr.partition { |x| x.is_a? Integer }
  [ints.sort, str.sort].flatten
end

p db_sort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2])

# ----------------TEST SAMPLES--------------------------------------
# describe "Double Sort" do
#  it "Basic tests" do
#    Test.assert_equals(db_sort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6])
#    Test.assert_equals(db_sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
# Test.assert_equals(db_sort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"])
#  end
# end
