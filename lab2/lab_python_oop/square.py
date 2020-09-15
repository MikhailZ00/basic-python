from lab_python_oop.rectangle import Rectangle


class Square(Rectangle):
    TYPE = 'Квадрат'

    def getType(self):
        return self.TYPE

    def __init__(self, color_prop, side_prop):
        self.side = side_prop
        super().__init__(color_prop, self.side, self.side)

    def __repr__(self):
        return '{} {} цвета со стороной {} площадью {}.'.format(
            self.getType(),
            self.color.getColor(),
            self.side,
            self.square()
        )
