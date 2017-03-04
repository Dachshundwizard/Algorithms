#making each head point to the previous Node
#this will also take place in cosntant place
#Linear time 0(n)
#Changing the direction of where the nodes are pointing

class Node(object):
    def __init__(self,value):
        self.value = value
        self.next_node = None

def reverse(head):
    current = head
    previous = None
    next_node = None



    while current: #Let us know until weve gone through the end of the list
        next_node = current.next_node #Make sure to copy current.next_node into next_node before setting current.next_node to previous
        current.next_node = previous
        previous = current # previous is now equal to the current Node
        current = next_node
    return previous

a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)

a.next_node = b
b.next_node = c
c.next_node = d

print(a.value)
print(a.next_node.value)
print(b.next_node.value)
print(c.next_node.value)

reverse(a)
print(d.next_node.value)
print(c.next_node.value)
print(b.next_node.value)


#*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@
#*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@
#*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@*@
