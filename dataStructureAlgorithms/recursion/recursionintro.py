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
    # base case
    if n == 0:
        return 1

    else:
        return n * fact(n-1)

print(fact(5))

def sum(n):
    if n == 0:
        return 0
    else:
        return n + sum(n-1)

print(num(5))
