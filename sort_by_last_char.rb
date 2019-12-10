# https://www.codewars.com/kata/sort-by-last-char/train/ruby
# Given a string of words (x), you need to return an
# array of the words, sorted alphabetically by
# the final character in each.

# If two words have the same last letter, they returned
# array should show them in the order they appeared
# in the given string.

# All inputs will be valid.

def last(sentence)
  char_word_dict = {}
  sentence.split.each do |word|
    last_char = word[word.size - 1]
    if char_word_dict.keys.include?(last_char)
      char_word_dict[lastChar] << word
    else
      char_word_dict[lastChar] = [word]
    end
  end
  sorted_dict = char_word_dict.sort_by { |k, v| k }
  answer = []
  sorted_dict.each { |x| answer << x[1] }
  answer.flatten
end

##--- ALTERNATIVE ALGORITHM---####
# def last(x)
#  return x.split.sort_by {|w| w.chars.last}
# end

#---------- sample test ------------------------
# describe "Basic Tests" do
#  it "testing..." do
#        Test.assert_equals(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
#        Test.assert_equals(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])
#        Test.assert_equals(last('massage yes massage yes massage'), ['massage', 'massage', 'massage', 'yes', 'yes'])
#        Test.assert_equals(last('take bintang and a dance please'), ['a', 'and', 'take', 'dance', 'please', 'bintang'])
#  end
# end
