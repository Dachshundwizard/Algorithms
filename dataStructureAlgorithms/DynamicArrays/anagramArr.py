# Anagram Check
# Problem:
# Given two strings, check to see if they are anagrams.
# Example: "public relations" is an anagram of "crap built on lies."
# Note: Ignore spaces and capitalization. So "d go" is an anagram of "God" and "dog" and "o d g".

def anagram2(s1,s2):

                                                                                            # Remove spaces and lowercase letters
    s1 = s1.replace(' ','').lower()
    s2 = s2.replace(' ','').lower()

                                                                                            # Edge Case to check if same number of letters
    if len(s1) != len(s2):
        return False
                                                                                            # Create counting dictionary (Note could use DefaultDict from Collections module)
    count = {}

                                                                                            # Fill dictionary for first string (add counts)
    for letter in s1:
        if letter in count:
            print('hi')
            count[letter] += 1
            print('hi')
        else:
            count[letter] = 1
    print('hi')
                                                                                            # Fill dictionary for second string (subtract counts)
    for letter in s2:
        print('hi')
        if letter in count:
            count[letter] -= 1
        else:
            count[letter] = 1
            print('hi')
    print('hi')
                                                                                            # Check that all counts are 0
    for k in count:
        if count[k] != 0:
            return False

                                                                                            # Otherwise they're anagrams
    return True

print(anagram2('gogggg','asdf'))
