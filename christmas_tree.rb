# frozen_string_literal: true

#EXERCISE --> https://www.codewars.com/kata/christmas-tree/train/ruby

# Create a function christmasTree(height) or christmas_tree(height)
# (in Ruby) that returns a christmas tree of the correct height

# christmasTree(5) || christmas_tree(height) should return:

#    *
#   ***
#  *****
# *******
# *********
# Height passed is always an integer between 0 and 100.

# Use \n for newlines between each line.

# Pad with spaces so each line is the same length.
# The last line having only stars, no spaces.

def christmas_tree(height)
  base_number = 2 * height - 1
  tree = []
  height.times do |i|
    nb_stars = (base_number - (2 * i))
    stars = '*' * nb_stars
    spaces = ' ' * ((base_number - nb_stars) / 2)
    if stars.size == 1
      tree.push(spaces + stars + spaces)
    else
      tree.push("\n" + spaces + stars + spaces)
   end
  end
  tree.reverse.join
end

#------------- test samples------------------
# describe "Christmas tree" do
#  it "should return correct christmas tree for height 1" do
#    Test.assert_equals(christmas_tree(1), "*");
#  end
#  it "should return correct christmas tree for height 2" do
#    Test.assert_equals(christmas_tree(2), " * \n***");
#  end
#  it "should return correct christmas tree for height 3" do
#    Test.assert_equals(christmas_tree(3), "  *  \n *** \n*****");
#  end
#  it "should return correct christmas tree for height 4" do
#    Test.assert_equals(christmas_tree(4), "   *   \n  ***  \n ***** \n*******");
#  end
#  it "should return correct christmas tree for height 5" do
#    Test.assert_equals(christmas_tree(5), "    *    \n   ***   \n  *****  \n ******* \n*********");
#  end
#  it "should return correct christmas tree for height 6" do
#    Test.assert_equals(christmas_tree(6), "     *     \n    ***    \n   *****   \n  *******  \n ********* \n***********");
#  end
#  it "should return correct christmas tree for height 7" do
#    Test.assert_equals(christmas_tree(7), "      *      \n     ***     \n    *****    \n   *******   \n  *********  \n *********** \n*************");
#  end
#  it "should return correct christmas tree for height 8" do
#    Test.assert_equals(christmas_tree(8), "       *       \n      ***      \n     *****     \n    *******    \n   *********   \n  ***********  \n ************* \n***************");
#  end
#  it "should return correct christmas tree for height 9" do
#    Test.assert_equals(christmas_tree(9), "        *        \n       ***       \n      *****      \n     *******     \n    *********    \n   ***********   \n  *************  \n *************** \n*****************");
#  end
#  it "should return correct christmas tree for height 10" do
#    Test.assert_equals(christmas_tree(10), "         *         \n        ***        \n       *****       \n      *******      \n     *********     \n    ***********    \n   *************   \n  ***************  \n ***************** \n*******************");
#  end
# end
