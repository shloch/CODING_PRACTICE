# Write a method that takes one argument as name and then
#  greets that name, capitalized and ends with an exclamation point.

# Example:

# "riley" --> "Hello Riley!"
# "JACK"  --> "Hello Jack!"

def greet(name): 
    first_letter = name[0].upper()
    other_letters = name[1:].lower()
    return 'Hello ' + first_letter + other_letters + '!' 