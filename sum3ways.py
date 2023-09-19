def sum1(lst):
    return sum(lst)

def sum2(lst):
    result =0
    for i in lst:
        result+=i
    return result

def sum3(lst):
    if len(lst)==0:  #base case
        return 0
    else:  #rescursive case
        head = lst[0]
        tail = lst[1:] # a slice of the list from index 1 to end
        
        return head + sum(tail)

nums = [1,2,3,4,5]

print("built in function",sum1(nums))
print("iterative sum",sum2(nums))
print("recursive sum", sum3(nums))
