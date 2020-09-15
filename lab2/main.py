from lab_python_oop.rectangle import Rectangle
from lab_python_oop.circle import Circle
from lab_python_oop.square import Square
import numpy as np


def main():
    rect = Rectangle("синего", 10, 10)
    circ = Circle("зеленого", 10)
    squar = Square("красного", 10)
    print(rect)
    print(circ)
    print(squar)
    a = np.array([20, 30, 40, 50])
    b = np.arange(4)
    print(a + b)


if __name__ == "__main__":
    main()
