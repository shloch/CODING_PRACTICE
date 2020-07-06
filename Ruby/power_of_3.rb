# Given a positive integer N, return the
# largest integer k such that 3^k < N.

# For example,

# largest_power(3) => 0
# largest_power(4) => 1

# You may assume that the input to your function
# is always a positive integer.

def largest_power(n)
  p "n = #{n}"
  return -1 if n == 1

  cube_roots = []
  (0..(n / 3)).each do |x|
    cube_roots << 3**x
    break if 3.pow(x) > n
  end
  while (cube_roots.last >= n)
    cube_roots.pop
  end
  p cube_roots
  cube_roots.size - 1
end

#=================test========

# Test on 12532018627
# Test on 10
# Test on 3705509382
# Test on 1020945710617
# Test on 935503994137
# Test on 270371491203232
# Test on 652779377883316
