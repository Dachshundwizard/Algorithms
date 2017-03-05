####################################################################################
####################################################################################
############## RECURSION ###########################################################
####################################################################################
####################################################################################


# 1) A function makes one or more calls to itself.
#
# 2) A data structure uses a smaller instance of the exact same type of data structure
# when it represents itself.
#
# + Powerful alternative for performing repetitions of tasks.
# 4! = 4•3•2•1 = 24
# 4! = 4 •(3•2•1)= 24
# 4! = 4 • 3! = 24
# n! = n•(n-1)!

def fact(n):
    if n == 0: # base case
        return 1

    else:
        return n * fact(n-1)

print(fact(5))

# 1) write a recursive function which takes an integer and computes the cumulative sum of 0 to that integer

def sum(n):
    if n == 0: # base case
        return 0
    else:
        return n + sum(n-1)

print(sum(3))

# 2) Given an integer, create a function which returns the sum of all the individual digits in that integer.

def sum_func(n):
    numstr = str(n)
    # Base case
    if len(numstr) == 1:
        return n

    # Recursion
    else:
        return n%10 + sum_func(n/10)

print(sum_func(41))

# 3) Create a function called word_split() which takes in a string phrase and a set list of words.
# The function will then determine if it is possible to split the string in a way in which words can
# be made from the list of words.

def word_split(phrase,list_of_words, output = None):
    # Checks to see if any output has been initiated.
    # If you default output=[], it would be overwritten for every recursion!
    if output is None:
        output = []

    # For every word in list
    for word in list_of_words:

        # If the current phrase begins with the word, we have a split point!
        if phrase.startswith(word):

            # Add the word to the output
            output.append(word)

            # Recursively call the split function on the remaining portion of the phrase--- phrase[len(word):]
            # Remember to pass along the output and list of words
            return word_split(phrase[len(word):],list_of_words,output)

    # Finally return output if no phrase.startswith(word) returns True
    return output

print(word_split('themanran',['the','ran','man']))
