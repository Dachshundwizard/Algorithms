from random import randint

def printgrade():
    for i in range(10):
        final_grade = int(raw_input("Enter your grade:"))
    if(score <= 70):
        grade = "D"
    elif(score <= 80):
        grade = "C"
    elif(score <= 90):
        grade = "B"
    else:
        grade = "A"

    print "Score: %d; Your grade is %s" %(score, grade)

# print "End of program. Bye!"

printgrade()
