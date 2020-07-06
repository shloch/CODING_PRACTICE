# frozen_string_literal: true

# The borrowers are tiny tiny fictional people. As tiny
# tiny people they have to be sure they aren't spotted,
# or more importantly, stepped on.

# As a result, the borrowers talk very very quietly.
# They find that capitals and punctuation of any sort lead them
# to raise their voices and put them in danger.

# The young borrowers have begged their parents to stop
# using caps and punctuation.

# Change the input text 'speech' to new borrower speak.
# Help save the next generation!

def borrow(speech)
  answer = []
  speech.split(' ').each do |word|
    word.split('').each do |char|
      ascii = char.ord
      if (ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90)
        answer << char.downcase
      end
    end
  end
  answer.join
end

#=============== sample tests ==================
# Test.describe("Basic tests") do
#  Test.assert_equals(borrow('WhAt! FiCK! DaMn CAke?'), 'whatfickdamncake')
#  Test.assert_equals(borrow('THE big PeOpLE Here!!'), 'thebigpeoplehere')
#  Test.assert_equals(borrow('i AM a TINY BoY!!'), 'iamatinyboy')
#  Test.assert_equals(borrow('DOnt YOU SAY THAT!'), 'dontyousaythat')
# end
