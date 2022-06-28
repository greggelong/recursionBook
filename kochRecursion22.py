import turtle

wn = turtle.Screen()
wn.colormode(255)
wn.screensize(800,800)

greg = turtle.Turtle()
wn.bgcolor((0,0,0))
greg.speed(0)
greg.color("green")
greg.penup()
greg.goto(-400,0)
greg.pendown()


def koch(t, order, size):
    #base case
    if order<1:
        t.forward(size)
        
    else:
        koch(t, order-1, size/3)   # Go 1/3 of the way
        t.left(60)
        koch(t, order-1, size/3)
        t.right(120)
        koch(t, order-1, size/3)
        t.left(60)
        koch(t, order-1, size/3)



koch(greg,3,600)
turtle.exitonclick()