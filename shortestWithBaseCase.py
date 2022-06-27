def swbc(makeRecursiveCall):
    print('swbc(%s) called.' % makeRecursiveCall)
    if not makeRecursiveCall:
        #Base Case
        print('returning from base case.')
        return
    else:
        #Recursion Case
        swbc(False)
        print('returning from recursive case.')
        return

print("calling from swbc(false):")
swbc(False)
print()

print("calling from swbc(True):")
swbc(True)