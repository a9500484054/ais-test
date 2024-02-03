// Задание #1:
// 1. Есть массив товаров, надо расположить на странице по три товара в ряд, обернув каждую тройку в родительский тег, причем у последнего родительского тега проставить класс “last”.

function renderGroupProduct(products ,element) {

    const groupedProducts = []; //Массив для групирования товаров
    
    // Разделение товаров по тройкам
    while (products.length > 0) {
        groupedProducts.push(products.splice(0, 3));
    }

    const container = element; // контейнер для вставки группы продуктов
    
    // Создание и добавление группы товаров 
    groupedProducts.forEach((group, index) => {

        const groupElement = document.createElement('div');
        groupElement.classList.add('product-group');

        // Создание и добавление товаров 
        group.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.textContent = product;
            groupElement.appendChild(productElement);
        });

        // Добавление класса "last" последнему элементу
        if (index === groupedProducts.length - 1) {
            groupElement.classList.add('last');
        }

        // Вставляем Группу товаров в контейнер
        container.appendChild(groupElement);
    });

}

// Массив товаров
const products = [
    'Товар 1',
    'Товар 2',
    'Товар 3',
    'Товар 4',
    'Товар 5',
    'Товар 6',
    'Товар 7',
    'Товар 8',
    'Товар 9',
    'Товар 10',
];


//Пример использования (https://codepen.io/i9500484054/pen/XWGqJLe?editors=1111)
renderGroupProduct(products, document.body);



// Задание #2:
// Есть поле в клетку m x n. В каждом столбце снизу вверх подряд закрашено x клеток. Написать функцию, в которой за один цикл определяется количество незакрашенных клеток, находящихся не выше самого высокого x. Функция принимает один параметр: array(‘номер столбца’ => ‘количество закрашенных серых клеток’). На рисунке закрашена желтым область, количество клеток которой надо найти. Не допускается применение стандартных функций которые подразумевают обход массива (map, sort и т.д.)

function findUnshadedCells(columnData) {

    let maxShadedCells = 0;

    // Находим максимальное количество закрашенных клеток в столбцах
    for (const column in columnData) {
        if (columnData.hasOwnProperty(column)) {
            maxShadedCells = Math.max(maxShadedCells, columnData[column]);
        }
    }

    // Находим количество незакрашенных клеток над самым высоким x
    let unshadedCellsCount = 0;

    for (let i = 0; i < maxShadedCells; i++) {
        for (const column in columnData) {
            if (columnData.hasOwnProperty(column) && columnData[column] > i) break;         // Если текущая клетка закрашена, прерываем цикл
            unshadedCellsCount++;                                                           // Если текущая клетка не закрашена, увеличиваем счетчик незакрашенных клеток

        }
    }

    return unshadedCellsCount;
}

// Пример использования функции с переданными данными
// Массив данных
const columnData = {
    1: 3,
    2: 2,
    3: 4,
    4: 1
};

//Пример использования (https://codepen.io/i9500484054/pen/MWxGrjW?editors=0010)
document.body.textContent = `Результат: ${findUnshadedCells(columnData)}`;


// Задание #3:
// Оценить в часах срок выполнения следующей задачи:

Проектирование         ~ 00:30 - 01:00чч
Верстка макета         ~ 01:30 - 02:00чч
Разработка функционала ~ 01:30 - 02:00чч
Тестирование           ~ 00:30 - 01:00чч

Итого:                 ~ 05:00 - 06:00чч