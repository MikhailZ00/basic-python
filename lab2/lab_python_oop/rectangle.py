from lab_python_oop.figure import Figure
from lab_python_oop.color import Color


class Rectangle(Figure):
    TYPE = 'Прямоугольник'

    def getType(self):
        return self.TYPE

    def __init__(self, color_prop, width_prop, height_prop):
        self.width = width_prop
        self.height = height_prop
        self.color = Color()
        self.color.setColor(color_prop)

    def square(self):
        return self.width * self.height

    def __repr__(self):
        return '{} {} цвета шириной {} и высотой {} площадью {}.'.format(
            self.getType(),
            self.color.getColor(),
            self.width,
            self.height,
            self.square()
        )
