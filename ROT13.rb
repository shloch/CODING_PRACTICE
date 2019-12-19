# frozen_string_literal: true

# EXERCISE ==> https://www.codewars.com/kata/rot13/train/rubyi

# How can you tell an extrovert from an introvert at NSA?
# Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

# I found this joke on USENET, but the punchline is
# scrambled. Maybe you can decipher it? According to
# Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13)
# is frequently used to obfuscate jokes on USENET.

# Hint: For this task you're only supposed to substitue
# characters. Not spaces, punctuation, numbers etc. Test examples:

# rot13("EBG13 rknzcyr.") == "ROT13 example.";
# rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"

def rot13(message)
  uppercase_rot13 = {}
  lowercase_rot13 = {}
  # construct upper  case dictionary for ROT13
  ('A'..'M').each { |char| uppercase_rot13[char] = (char.ord + 13).chr }
  ('N'..'Z').each { |char| uppercase_rot13[char] = (char.ord - 13).chr }

  # construct lower case dictionary for ROT13
  ('a'..'m').each { |char| lowercase_rot13[char] = (char.ord + 13).chr }
  ('n'..'z').each { |char| lowercase_rot13[char] = (char.ord - 13).chr }

  answer = []
  message.split('').each do |char|
    ascii = char.ord
    answer << if ascii >= 65 && ascii <= 90 # capital letters
                uppercase_rot13[char]
              elsif ascii >= 97 && ascii <= 122 # small letters
                lowercase_rot13[char]
              else
                char
              end
  end
  answer.join
end
