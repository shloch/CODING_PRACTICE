'''
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
'''


#def between(a,b):
#    maList = []
#        maList.append(x)
#    for x in range(a, b+1):
#    return maList

def between(a, b):
    maList = [a]
    fin = a
    while(fin < b):
        fin = fin + 1
        maList.append(fin)
    return maList