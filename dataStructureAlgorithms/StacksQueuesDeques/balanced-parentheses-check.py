def balance_check(s):
    # Check is even number of brackets
    if len(s)%2 != 0:
        return False

    # Set of opening brackets
    opening = set('([{')

    # Matching Pairs
    matches = set([ ('(',')'), ('[',']'), ('{','}') ])

    # Use a list as a "Stack"
    stack = []

    # Check every parenthesis in string/scanning the str left to right
    for paren in s:

        # If its an opening, append it to list/everytime we see an opening parentheses we push it to the stack
        if paren in opening:
            stack.append(paren) # we do this because we want the last opening parentheses to be closed first

        else:

            # Check that there are parentheses in Stack
            if len(stack) == 0:
                return False

            # Check the last open parenthesis/check whether the last opened one is the corresponding closing match
            last_open = stack.pop()

            # Check if it has a closing match
            if (last_open,paren) not in matches:
                return False

    return len(stack) == 0 #check if the stack is empty


print(balance_check('[](){([[[]]])}'))

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

def balance_check(s):
    if len(s) % 2 != 0:
        return False

    opening = set('([{')
    matches = set([ ('(',')'), ('[',']'), ('{','}') ])

    stack = []

    for paren in s:
        if paren in opening:
            stack.append(paren)
        else:
            if len(stack) == 0:
                return False

            last_open = stack.pop()

            if(last_open,paren) not in matches:
                return False
    return len(stack) == 0

print(balance_check('[[[[]]]]'))
