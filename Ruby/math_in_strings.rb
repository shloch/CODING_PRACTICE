# frozen_string_literal: true

# EXERRCISE --> https://www.codewars.com/kata/basic-math-add-or-subtract/train/ruby
# In this kata, you will do addition and subtraction on a
# given string. The return value must be also a string.

# Note: the input will not be empty.

# Examples
# "1plus2plus3plus4"  --> "10"
# "1plus2plus3minus4" -->  "2"

def calculate(str)
  expression = str.gsub('plus', ' + ').gsub('minus', ' - ')
  str_arr = expression.split(' ')
  total = str_arr[0].to_i
  str_arr.each_with_index do |v, i|
    if v == '+'
      total += str_arr[i + 1].to_i
    elsif v == '-'
      total -= str_arr[i + 1].to_i
    end
  end
  total.to_s
end

## SIMPLER SOLUTION ##
# def calculate(str)
#  expression = str.gsub('plus', '+').gsub('minus', '-')
#  eval(expression).to_s
# end

#------------ sample tests -------------------
# Testing for 478plus283plus322
# Testing for 763minus932minus486
# Testing for 857plus277minus894
# Testing for 681plus823minus420
# Testing for 833minus10plus373
# Testing for 694minus454minus175
# Testing for 382minus818plus704
# Testing for 67minus228minus10
# Testing for 311plus264plus452plus459
# Testing for 245plus746plus800plus55
# Testing for 571plus498minus978plus947
# Testing for 524minus312minus437plus661
# Testing for 747minus222minus385plus383
# Testing for 101minus685plus546plus347
# Testing for 961minus691minus108minus454
# Testing for 772minus204plus908plus411
# Testing for 377minus958minus356plus332
# Testing for 652plus764plus796minus702
# Testing for 467plus501minus662plus826
# Testing for 49plus518minus543minus458
# Testing for 623plus6minus501minus537
# Testing for 993plus34plus322plus969
# Testing for 205plus317plus412minus78plus642
# Testing for 2plus772minus777plus598plus409
