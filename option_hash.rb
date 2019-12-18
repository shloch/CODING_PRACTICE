# frozen_string_literal: true

# testing OPTION HASH
# definition here -->https://stackoverflow.com/questions/18407618/what-are-options-hashes

# others in form {'pers3': 'micheal', pers4: 'jordan'}

def greet(pers1, pers2, others = {})
  p "hello #{pers1.upcase}"
  p "hello #{pers2.upcase}"
  if others
    others.keys.each do |pers_key|
      p "i also greet #{others[pers_key].upcase}"
    end
  end
end

greet('ULRISH', 'TRICHIA')

# curly brace below is optional
greet('lovert', 'nina', { 'pers3': 'micheal', pers4: 'jordan' }) 

#=========== screen output =================

# "hello ULRISH"
# "hello LOVERT"
# "hello TRICHIA"
# "hello NINA"
# "i also greet MICHEAL"
# "i also greet JORDAN"
