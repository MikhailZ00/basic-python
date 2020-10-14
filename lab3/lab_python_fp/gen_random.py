from random import randint
# Пример:
# gen_random(5, 1, 3) должен выдать выдать 5 случайных чисел
# в диапазоне от 1 до 3, например 2, 2, 3, 2, 1
# Hint: типовая реализация занимает 2 строки
global arr
arr = []


def tmp(num_count, begin, end):
    for index in range(num_count):
        arr.append(randint(begin, end))
        yield index


def gen_random(num_count, begin, end):
    arr.clear()
    gen = tmp(num_count, begin, end)
    for i in gen:
        i
    return arr
