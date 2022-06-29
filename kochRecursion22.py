import turtle

wn = turtle.Screen()
wn.colormode(255)
wn.screensize(800,800)

greg = turtle.Turtle()
wn.bgcolor((0,0,0))
wn.tracer(False) ## turns animation off
greg.hideturtle() ## need to do this for tracer animation off
greg.speed(0)
greg.color("green")
greg.penup()
greg.goto(-200,100)
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



def snowflake(t,order,size):
    koch(t,order,size)
    t.right(120)
    koch(t,order,size)
    t.right(120)
    koch(t,order,size)

#koch(greg,3,600)

snowflake(greg,2,400)

wn.exitonclick()