goods = [
    {'title': 'Ковер', 'price': 2000, 'color': 'green'},
    {'title': 'Диван для отдыха', 'price': 5300, 'color': 'black'},
    {'title': 'Плойка', 'price': 500, 'color': 'white'},
    {'title': 'Мама', 'price': 10000}
]
# field(goods, 'title') #должен выдавать 'Ковер', 'Диван для отдыха'
# field(goods, 'title', 'price') #должен выдавать {'title': 'Ковер', 'price': 2000}, {'title': 'Диван для отдыха', 'price': 5300}


def field(items, *args):
    assert len(args) > 0
    if len(args) == 1:
        index = 0
        arr = []
        for index in range(len(goods)):
            if (args[0] not in goods[index].keys()):
                continue
            arr.append(goods[index][args[0]])
            yield index
        print(", ".join(map(str, arr)))
    else:
        arr = []
        for dicts in goods:
            index = 0
            tmp = dict()
            for index in range(len(args)):
                if (args[index] not in dicts.keys()):
                    continue
                tmp[args[index]] = dicts[args[index]]
                yield index
            arr.append(tmp)
        print(", ".join(map(str, arr)))


gen = field(goods, 'price')
for i in gen:
    i
