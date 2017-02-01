# create a program that prints all the odd numbers from 1 to 1000. Use the for loop and don't use
# any arrays to do this exercise

# Part I
for i in range(1,1001):
    if(i % 2 == 1):
        print i

# Part II
for i in range(5, 1000001):
    if(i % 5 == 0):
        print i

# Create a program that prints the sum of all the values in the list a = [1,2,5,10,255,3]

a = [1,2,5,10,255,3]
sum = 0
for num in a:
    sum += num

print sum

# Create a program that prints the average of the values in the list a = [1,2,5,10,255,3]

a = [1,2,5,10,255,3]
sum = 0

for num in a:
    sum += num

avg = sum/len(a)
print avg

# Create a program that counts from 1 to 2000. As it loops through each number, have your program
# generate the number and whether it's an odd number or whether it's an even number

for i in range(1,2001):
    if i % 2 == 0:
        print 'Number is ' + str(i) + '. This is an odd number.'
    else:
        print 'Number is ' + str(i) + '. This is an even number.'


# Create a function called 'multiply()' that reads each value in a list and returns a list where
# each value has been multiplied by 5

# Part I
a = [2,4,10,16]
def multiply(arr):
    for i in range(len(arr)):
        arr[i] = arr[i] * 5
    return arr

b = multiply(a)
print b

#Scores and Grades

from random import randint
print "Scores and Grades"

def printgrade():
    final_grade = int(raw_input("Enter your grade:"))
for count in range(10):
	score = randint(70, 100)

	if(score <= 70):
		grade = "D"
	elif(score <= 80):
		grade = "C"
	elif(score <= 90):
		grade = "B"
	else:
		grade = "A"

	print "Score: %d; Your grade is %s" %(score, grade)

print "End of program. Bye!"


#Stars. Create a function called draw_stars() that takes a list of numbers and print out *.

def draw_stars(arr, b):
    for i in range(len(arr)):
        star_num = arr[i]*b
        print star_num
draw_stars([1,2,3,4,5,4,3,2,20,1,2,3,4,5,4,3,2,20,1,2,3,4,5,4,3,2,20,1,2,3,4,5,4,3,2,20,1,2,3,4,5,4,3,2,20,1,2,3], "*")

#Modify the function above. Allow a list containing integers and strings to be passed to the  draw_stars() function. When a string is passed, instead of  displaying *, display the first letter of the string according to the example below. You may use the .lower() string method for this part.

def draw_stuff(my_list):
    for item in my_list:
        output = ''
        if type(item) is int:
            output += "*"
        elif type(item) is str:
            lower_first = item[0].lower()

            for i in range(len(item)):
                output = output + lower_first
        print output
draw_stuff([1,2,"buckle my shoes", 3, 4, "open the door"])
