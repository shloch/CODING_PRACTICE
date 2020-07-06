
#t = gets.strip.to_i
#for a0 in (0..t-1)
#    n = gets.strip.to_i
#end

def fib_series(n)
  arr = []
  f1=0
  f2=1
  f3=0
  while f3<n do 
    f3 = f1 + f2
    arr << f3
    f1=f2
    f2=f3  
  end
  arr
end

all_fib = fib_series(100)


#check = 10
def fib_even_sum(check)
  p even_fibs = fib_series(1000000).filter{|x| x.even?}
  sum = 0
  sum_arr = []
  even_fibs.each do |num|
    sum_arr << num 
    if (sum_arr.sum > check)
      sum_arr.pop
      sum = sum_arr.sum
      break
    end
  end
  sum
end

p fib_even_sum(3)
