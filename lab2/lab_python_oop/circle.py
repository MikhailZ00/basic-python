from lab_python_oop.figure import Figure
from lab_python_oop.color import Color
from math import pi


class Circle(Figure):
    TYPE = 'Круг'

    def getType(self):
        return self.TYPE

    def __init__(self, color_prop, radius_prop):
        self.radius = radius_prop
        self.color = Color()
        self.color.setColor(color_prop)

    def square(self):
        return pi*(self.radius**2)

    def __repr__(self):
        return '{} {} цвета радиусом {} площадью {}.'.format(
            self.getType(),
            self.color.getColor(),
            self.radius,
            self.square()
        )
