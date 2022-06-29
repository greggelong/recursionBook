# recursionBook

a place to put some code in javaScript and python

while going through Al Sweigart's book on recursion

The java script code will be in separate hmtl files called from links in the index

like an old school web site

you can reach the live site

[https://greggelong.github.io/recursionBook/](https://greggelong.github.io/recursionBook/)

--------

Firefox doesn't seem to like relative paths in the index html when hosted on GitHub pages.  

The but relative path will work for the local host.  So as I am coding 

and deploying at the same time I will use the whole path name.

however you must be careful as you will be viewing the deployed page linked in the index even when you are using your local host 

so go live on each page 


UPDATE

see the discussion

https://stackoverflow.com/questions/16316311/github-pages-and-relative-paths

I tried using the setting a base url that worked to make the code a little cleaner

but the same problem with local host testing

****

but then I tried just waiting and that worked too

I just use relative links and after a few minutes I did not get the 404

error

GitHub pages just needs some time to update to modifications 

this seems to be the case with any modification to the repo

so you really need to be patient after each commit

which is also discussed in the thread

Waiting was just too hard

I have gone back to hard coding the absolute link

and just test each page locally


## chapter 1

1. In general, what is a recursive thing?
    
    - is a thing whose definition includes itself (not a tautology)

2. In programming, what is a recursive function?
    
    - a function that calls itself

3. What four features do functions have?
    
    - code that runs when called

    - arguments that are passed (can be zero)

    - return value (can be null)

    - program stack remembers where it was called from

4. What is a stack?

    - LIFO data structure and and can be execution call stack

5. What are the terms for adding and removing values to the top of a
stack?

    - push(), pop()

6. Say you push the letter J to a stack, then push the letter Q, then pop the
stack, then push the letter K, then pop the stack again. What does the
stack look like?

    - JK

7. What is pushed and popped onto the call stack?

  - frames

8. What causes a stack overflow to happen?

    - too many function calls without return, using up stack memory

9. What is a base case?

    - a case where the function stops calling itself

10. What is a recursive case?

    - a case in which the function calls itself

11. How many base cases and recursive cases do recursive functions have?

    - at least one of each, to be recursive and not cause an overflow.

12. What happens if a recursive function has zero base cases?

    - stack overflow

13. What happens if a recursive function has zero recursive cases?

    - it is not recursive

## The turtle as a data structure

This review of the call stack and recursion has highlighted how a turtle

acts as a very helpful data structure.  

I have added a version of koch in python using the turtle

the koch function is really simple as the 

turtle is keeping track of its heading and position in each frame.

This version shows python turtle.  but I have another version

with a homemade turtle in processing and p5.js:

https://github.com/greggelong/truf

It is possible to make the koch curve with some graphic primitives and rotation

I have a version here: https://github.com/greggelong/koch-recursive

the only problem is keeping track of where each position and heading 

(which is created by rotating the canvas not the graphic object itself)


## python turtle no animation

python```
turtle.tracer(0,0)  # wn.tracer if you have set up a window

turtle.update()   # if you don't use this it will not finish the plot


```