# The vowel substrings in the word codewarriors are o,e,a,io.
#  The longest of these has a length of 2. Given a lowercase string that has 
#  alphabetic characters only (both vowels and consonants) and no spaces,
#   return the length of the longest vowel substring. Vowels are any of aeiou.

# Good luck!

# If you like substring Katas, please try:

# exercise ==> https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/python

def solve(str):
    vowels = 'aeiou'
    vowel_indexes = []
    
    for idx,char in enumerate(str):
        if char in vowels:
            vowel_indexes.append(idx)
    
    if len(vowel_indexes) == 0: return 0 #if no vowel
    
    count = 1
    final = 1
    for i in range(len(vowel_indexes)-1):
        print(i)
        if (vowel_indexes[i+1]-1) == vowel_indexes[i]:
            count += 1
            if (count > final): final = count
        else:
            count = 1
    return final


#     ----------- sample tests------------
# Test.it("Basic tests")
# Test.assert_equals(solve("codewarriors"),2)
# Test.assert_equals(solve("suoidea"),3)
# Test.assert_equals(solve("ultrarevolutionariees"),3)
# Test.assert_equals(solve("strengthlessnesses"),1)
# Test.assert_equals(solve("cuboideonavicuare"),2)
# Test.assert_equals(solve("chrononhotonthuooaos"),5)
# Test.assert_equals(solve("iiihoovaeaaaoougjyaw"),8)