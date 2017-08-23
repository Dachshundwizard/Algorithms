# have the function CheckNums(num1,num2)take both parameters being passed and return the string true if num2 is greater than num1, otherwise return false. If they are the same, return -1
def CheckNums(num1, num2):

  if (num1 == num2):
    return '-1'
  elif (num2 > num1):
    return 'true'
  else:
   return 'false'

print CheckNums(3, 122)  
