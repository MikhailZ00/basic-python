import math

print("Введите коэффициенты для уравнения")
print("ax^2 + bx + c = 0:")
a = float(input("a = "))
b = float(input("b = "))
c = float(input("c = "))

Disc = b ** 2 - 4 * a * c
print("Дискриминант D = %.1f" % Disc)

if Disc > 0:
    x1 = (-b + math.sqrt(Disc)) / (2 * a)
    x2 = (-b - math.sqrt(Disc)) / (2 * a)
    print("x1 = %.1f \nx2 = %.1f" % (x1, x2))
elif Disc == 0:
    x = -b / (2 * a)
    print("x = %.1f" % x)
else:
    print("Корней нет")
