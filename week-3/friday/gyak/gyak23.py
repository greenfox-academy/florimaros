w = 123
credits = 100
is_bonus = False
#if credits are at least 50
#but is bonus is false decrement w by 2
#if credits are smaller than 50
#and is bonus is false decrementw by 1
#if is bonus is true w should remain the same
if credits >= 50 and is_bonus == False:
    w = w - 2
elif credits < 50 and is_bonus == False:
    w = w - 1
elif bonus == True:
    w = w

print(w)
