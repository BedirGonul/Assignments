#!/usr/bin/env python
# coding: utf-8

# In[28]:


def cardnum(digits):
    number = str(digits)
    total = 0
    for i in range(len(number)):
        num =  int(number[-(i+1)])
        if (i%2)==0:
            total+=num
        else:
            total += int(str(2 * num)[0])
            if num > 5:
                total += int(str(2 * num)[1])
    if total%10 == 0:
        return True
    else:
        return False


# cardnum(3232575713452346)
# False

#cardnum(2143214214)
#False

#cardnum(8926309448473529)
#True

#cardnum(4111111111111111)
#True
