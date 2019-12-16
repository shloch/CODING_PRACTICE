# function that returns the total surface area and
# volume of a box as an array: [area, volume]

def get_size(w, h, d)
  # surface area = 2 x (height x width + width x length + height x length)
  # height = h
  # width = w
  # length = d

  # volume = height x width x length

  area = 2 * (h * w + w * d + h * d)
  volume = w * h * d
  [area, volume]
end

#======== sample test======================
# Test.assert_equals(get_size(4, 2, 6), [88,48])
# Test.assert_equals(get_size(1, 1, 1), [6,1])
# Test.assert_equals(get_size(1, 2, 1), [10,2])
# Test.assert_equals(get_size(1, 2, 2), [16,4])
# Test.assert_equals(get_size(10, 10, 10), [600,1000])
