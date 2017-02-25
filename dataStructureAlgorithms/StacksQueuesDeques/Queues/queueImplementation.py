## Queue() creates a new queue that is empty
## Enqueue(item) adds a new item to the rear. (enter)
## Dequeue() removes the front item
## isEmpty() tests to see whether the queue is empty
## size() returns the number of items in the queue.

################################################
################################################
################################################

class Queue(object):
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0,item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)

q=Queue()
print (q.size())
q.enqueue(1)
print(q.isEmpty())
q.enqueue(2)
q.enqueue(3)
q.enqueue(10)
q.enqueue(4)
q.enqueue(12)
print(q.size())
print(q.dequeue())
print(q.size())
