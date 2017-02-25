# Deque() creates a new deque that is empty.
# addFront(item) adds to the front of the Deque
# addRear(item) adds to the rear of the deque.
# removeFront() removes the front item from the deque.
# removeRear()
# isEmpty()
# size()

################################################
################################################
################################################

class Deque(object):
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def addFront(self, item):
        self.items.append(item)

    def addRear(self, item):
        self.items.insert(0, item)

    def removeFront(self):
        return self.items.pop()

    def removeRear(self):
        return self.items.pop(0)

    def size(self):
        return len(self.items)

d = Deque()
d.addFront('hello')
d.addFront('world')
print(d.size())
print(d.removeFront() + ' ' + d.removeRear())
print(d.isEmpty())
