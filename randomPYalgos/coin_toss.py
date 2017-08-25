import random

def coinToss():
    print "Starting the Program..."
    head_count = 0
    tail_count = 0
    for i in range(5001):
        random_num = round(random.random())
        if(random_num == 1):
            face = 'head'
            head_count = head_count+1
        else:
            face = 'tail'
            tail_count = tail_count+1
        print "Attempt #"+str(i)+": Throwing a coin...It's a "+face+"!...Got "+str(head_count)+" head(s) and "+str(tail_count)+" tail(s) so far"
    print "End of Program. Good day!"

coinToss()
