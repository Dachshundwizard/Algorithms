# Given an integer array, output all the unique pairs that sum up t a specific value K.
# So the input:
# pair_sum([1,3,2,2],4)
# would return 2 pairs:
#  (1,3)
#  (2,2)

def pair_sum(arr,k):

    if len(arr)<2:
        return 'Array is too short.'
                                                                                                                        # Sets for tracking
    seen = set()
    output = set()
                                                                                                                        # For every number in array
    for num in arr:
                                                                                                                        # Set target difference
        target = k-num
                                                                                                                        # Add it to set if target hasn't been seen
        if target not in seen:
            seen.add(num)
        else:
                                                                                                                         # Add a tuple with the corresponding pair
            output.add( (min(num,target),  max(num,target)) )
                                                                                                                        # FOR TESTING
    # return len(output)

                                                                                                                        # Nice one-liner for printing output
    return '\n'.join(map(str,list(output)))


print(pair_sum([4,3,2,1], 5))

################################################################################################
################################################################################################
################################################################################################
################################################################################################

def pair_sum(arr,k):

    if len(arr)<2:
        return 'Array is too short.'

    seen = set()
    output = set()

    for num in arr:
        target = k-num
        if target not in seen:
            seen.add(num)
        else:
            output.add( (min(num,target), max(num,target)) )

    return "The resulting unique pair that adds up to the k value of " + `{k}` + " is "  + '\n'.join(map(str,list(output)))

print(pair_sum([4,1,2,3], 4))


################################################################################################
################################################################################################
################################################################################################
################################################################################################



def pair_sum(arr,k):
    if len(arr)<2:
        return 'Array is too short.'
    seen = set()
    output = set()

    for num in arr:
        target = k-num
        if target not in seen:
            seen.add(num)
        else:
            output.add( (min(num,target), max(num,target)) )
    return "The resulting unique pair(s) that add up to the k value of %s " % k + "is " + '\n'.join(map(str,list(output)))

print(pair_sum([4,3,2,1], 5))
