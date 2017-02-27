# Implement a Queue - Using Two Stacks - SOLUTION
# Given the Stack class below, implement a Queue class using two stacks!
# Note, this is a "classic" interview problem. Use a Python list data
# structure as your Stack.


class Queue2Stacks(object):

    def __init__(self):

        # Two Stacks
        self.instack = []
        self.outstack = []

    def enqueue(self,element):

        # Add an enqueue with the "IN" stack
        self.instack.append(element)

    def dequeue(self):
        if not self.outstack:
            while self.instack:
                # Add the elements to the outstack to reverse the order when called
                self.outstack.append(self.instack.pop())
        return self.outstack.pop()
