# Given a string, capitalize the letters that occupy even indexes and odd 
# indexes separately, and return as shown below. Index 0 will be considered even.

# For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

# The input will be a lowercase string with no spaces.

# Good luck!

# If you like this Kata, please try:

# EXERCISE = https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/python

def capitalize(str):
    evenCaps = []
    oddCaps = [str[0]]
    
    for idx, char in enumerate(str):
        if (idx % 2 == 0):
            evenCaps.append(char.upper())
            if (idx + 1) < len(str): evenCaps.append(str[idx+1])
        else:
            oddCaps.append(char.upper())
            if (idx + 1) < len(str): oddCaps.append(str[idx+1])
    return [''.join(evenCaps), ''.join(oddCaps)]

# ----------- test samples -----------
# Test.it("Basic tests")
# Test.assert_equals(capitalize("abcdef"),['AbCdEf', 'aBcDeF'])
# Test.assert_equals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS'])
# Test.assert_equals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa'])
# Test.assert_equals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS'])