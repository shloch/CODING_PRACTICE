# Normally we have firstname, middle and the last name but 
# there may be more than one word in a name like a South Indian one.

# Similar to those kinda names we need to initialize the names.

# See the pattern below:

# initials('code wars') => returns C.Wars 
# initials('Barack Hussain obama') => returns B.H.Obama 
# Complete the function initials.

# EXERCISE = https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/python

def initials(name):
    suffix_list = []
    name_list = name.split()
    for i in range(len(name_list)-1):
        suffix = name_list[i][0].upper()+'.'
        suffix_list.append(suffix)
        

    last_name = name_list[-1][0].upper()+name_list[-1][1:]
    
    return ''.join(suffix_list) + last_name

# ---------- test samples --------------------
# Test.assert_equals(initials('code wars'),'C.Wars')
# Test.assert_equals(initials('Barack hussein obama'),'B.H.Obama')
# Test.assert_equals(initials('barack hussein Obama'),'B.H.Obama')