# frozen_string_literal: true

#
# check perfect square
# isSquare(-1) returns  false
# isSquare(0) returns   true
# isSquare(3) returns   false
# isSquare(4) returns   true
# isSquare(25) returns  true
# isSquare(26) returns  false

def square?(num)
  return false if num == -1

  (Math.sqrt(num).to_i - Math.sqrt(num)).zero?
end

p square?(-1)
p square?(25)
