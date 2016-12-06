# x = [4,6,1,3,5,7,25]
# b = "*"
# def draw_stars(arr, b):
#     for i in range(len(arr)):
#         star_num = arr[i]*b
#         print star_num
# draw_stars(x, b)

y = [4,'Tom','Michael',5,7,'Jimmy Smith']

def draw_stars(my_list):
    for item in my_list:
        output = ''
        if type(item) is int:
            output = output + '*'
        elif type(item) is str:
            first_letter = item[0].lower()

            for i in range(len(item)):
                output = output + first_letter
        print output

draw_stars(y)
