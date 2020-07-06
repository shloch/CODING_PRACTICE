# frozen_string_literal: true

# EXERCISE --> https://www.codewars.com/kata/if-you-cant-beat-em-join-em/train/ruby

# Inside of the city there are many gangs, each with differing
# numbers of members wielding different weapons and possessing
# different strength levels. The gangs do not really want to
# fight one another, and so the "If you can't beat 'em, join 'em"
# rule applies. The gangs start combining with the most powerful
# gangs being joined by the weaker gangs until there is one gang left.

# Challenge:

# You are given an array of arrays. Inside of the interior arrays are
# numbers. Join the arrays together by descending total array value
# ending up with one final array.

# Simple example:

# cant_beat_so_join([[1,2], [3,4], [5,6], [7,8], [9]]) -> [7, 8, 5, 6, 9, 3, 4, 1, 2]
# In the example above, [7, 8] are the first in the array because they have
# the highest value
# They are followed by [5, 6]
# That is followed by [9] which comes before [3, 4] because the list of [9]
# is greater
# It ends with [1, 2] which has the least amount of value
# More examples:

# cant_beat_so_join([[5, 1],[9, 14],[17, 23],[4, 1],[0, 1]]) -> [17, 23, 9, 14, 5, 1, 4, 1, 0, 1]
# cant_beat_so_join([[13, 37], [43, 17], [2,3], [45,64], [1,9]]) -> [45, 64, 43, 17, 13, 37, 1, 9, 2, 3]
# cant_beat_so_join([[], [], [], []]) -> []
# cant_beat_so_join([[], [], [0], []]) -> [0]
# cant_beat_so_join([[1,0,1,0,1,0], [0,1,0,0,1,0,0,1], [0], []]) -> [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]
# In the case of more than one array sharing the same sum, place
# them in the same order that they were in the argument:

# cant_beat_so_join([[0,1,1,1], [1,0,1,1], [1,1,0,1], [3]]) -> [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 3]

def cant_beat_so_join(numbers)
  sub_totals = {}
  answer = []
  numbers.each do |pairs|
    if sub_totals.key? pairs.sum
      sub_totals[pairs.sum] << pairs unless pairs.nil?
      sub_totals[pairs.sum].flatten
    else
      sub_totals[pairs.sum] = pairs unless pairs.nil?
    end
  end
  sorted = sub_totals.sort_by { |k, _| k }.reverse
  sorted.each do |x|
    answer << x[1]
  end
  answer.flatten
end

#------------- test cases----------------------------

# Testing for [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
# Testing for [[5, 1], [9, 14], [17, 23], [4, 1], [0, 1]]
# Testing for [[13, 37], [43, 17], [2, 3], [45, 64], [1, 9]]
# Testing for [[52, 11, 33, 222], [582, 192, 442, 512, 41], [23912], [2314], [2491, 2412, 84828]]
# Testing for [[], [], [], []]
# Testing for [[], [], [0], []]
# Testing for [[1, 0, 1, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1], [0], []]

# Testing for [[702, 340, 157, 869, 952, 32, 711, 97], [686, 962, 436], [758, 714, 766, 888, 357, 71, 453], [814, 639, 698, 674, 430], [278, 987, 302, 48, 899, 803, 951, 947, 159], [148, 47, 265, 50, 757, 604, 967, 944, 248], [740, 928, 691, 478, 322, 252, 179], [73, 909, 68, 164], [572, 142, 874, 192, 790, 137, 284, 803, 20, 847], [815, 984, 399, 330, 690, 102, 1000, 885, 953], [646, 243, 918, 231, 884, 876, 541, 886], [562, 919, 625, 398, 127, 121]]
# Testing for [[373, 505, 326, 152, 693, 867, 51, 402, 174], [173, 603, 946], [743, 983, 927, 798, 602, 869, 950], [133, 262], [741, 744], [95, 167, 542, 225, 826, 676, 134, 184], [138, 257, 9, 527, 548, 726, 35, 512], [596, 373, 26, 143, 542], [534, 736, 631, 715, 908, 495, 67, 686], [997, 989], [418, 591, 264, 324, 936, 269, 555, 55], [226, 399], [287, 104, 450, 438, 345, 563, 347, 79]]
# Testing for [[501, 64, 516, 39, 448, 219, 899], [966, 873, 80, 277, 790, 428, 238, 741, 130, 164], [592, 540], [459, 743, 521], [285, 451, 856, 868, 841, 986, 563], [712, 843, 550, 377, 786, 951, 671], [282, 659, 640, 105, 198, 387, 537], [511, 622, 418, 389, 927, 945, 200], [386, 21, 381, 229, 580, 192], [24, 19, 947, 840, 941], [972, 121], [891, 940, 121, 115, 731, 32, 335, 851, 151], [894, 192, 337, 181, 896, 572, 904, 537, 227]]
# Testing for [[367, 115, 710, 113, 195, 901, 38, 671, 794, 997], [30, 552, 293, 666, 584, 160, 601], [527, 228, 186, 432], [948, 677], [190, 436, 552, 127, 931, 985, 571, 163, 32, 686], [803, 331, 322, 471], [831, 796, 751, 548, 719, 30, 241], [597, 490, 384, 530, 810], [473, 625, 774, 136]]
# Testing for [[22, 533, 105, 591, 349, 715], [833, 867, 167, 136, 558, 717, 292], [255, 984, 758, 706, 508, 476, 149, 259]]
