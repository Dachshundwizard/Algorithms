
def comp(list):
    print list[0] # big O(1)

    midpoint = len(list)/2

    for val in list[:midpoint]: # O(1/2 * n)
        print val

    for x in range(10): # O(10)
        print 'Hello World'

list = [1,2,3,4,5,6,7,8,9,10]
comp(list)

# Total = adding up the different components.
# Total = O(1 + n/2 + 10) but as n grows arbritrarily large, the 1 and 10 become insignificant.
# /2 will not have as much of an effect as n goes to infinity so.....
# O(n)

# Lists in Python
def method1():
    l = []
    for n in range(10000):
        l = l + [n]
        print l
method1()

def method2():
    l = []
    for n in range(10000):
        l.append(n)
        print l
method2()

def method3():
    l = list(range(10000))
    print l
method3()
