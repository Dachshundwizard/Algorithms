users = {
 'students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Trey', 'last_name' : 'Villafane'}
  ]
 }

for key, data in users.items():#for key, data in users.items print the key title.
	print "\n%s" %key.upper() #the /n adds a new line
	counter = 0 #Also set the counter to zero
        for value in data:
		counter = counter +1
		full_name = value["first_name"] + " " + value["last_name"]
		full_name_upper = full_name.upper()
		name_count = len(value["first_name"]) + len(value["last_name"])

		print "%d - %s - %d" %(counter, full_name_upper, name_count)

# users = {
#  'Students': [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
#   ],
#  'Instructors': [
#      {'first_name' : 'Michael', 'last_name' : 'Choi'},
#      {'first_name' : 'Martin', 'last_name' : 'Puryear'}
#   ]
#  }
# for title, students in users.items():
#     print title
#     for index, value in enumerate(students):
#         print index+1, value['first_name'], value['last_name'] , len(value['first_name']) + len(value['last_name'])
