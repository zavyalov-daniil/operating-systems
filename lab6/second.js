/* Создаём матрицу */
function createMatrix(n) {
	var matrix = [];
	for (var i = 0; i < n; i++) {
		matrix[i] = [];
		for (var j = 0; j < n; j++) {
			if (i == j) {
				matrix[i][j] = 1;
			} else if (i < j) {
				matrix[i][j] = 7;
			} else {
				matrix[i][j] = 4;
			}
		}
	}
	return matrix;
}

/* Выводим матрицу */
function printMatrix(matrix) {
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			WScript.StdOut.Write(matrix[i][j] + " ");
		}
		WScript.StdOut.WriteLine();
	}
}

/* Вычисляем число элементов, кратных 7 */
function countMultiples(matrix) {
	var count = 0;
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] % 7 == 0) {
				count++;
			}
		}
	}
	return count;
}

/* Вычисляем сумму элементов в каждой нечётной строке */
function sumOddRows(matrix) {
	var sum = 0;
	for (var i = 0; i < matrix.length; i += 2) {
		for (var j = 0; j < matrix[i].length; j++) {
			sum += matrix[i][j];
		}
	}
	return sum;
}

/* Вычисляем произведение чётных элементов в каждом нечётном столбце */
function productEvenColumns(matrix) {
	var product = 1;
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 1; j < matrix[i].length; j += 2) {
			if (i % 2 != 0) {
				product *= matrix[i][j];
			}
		}
	}
	return product;
}

/* Вычисляем сумму элементов выше побочной диагонали */
function sumAboveSecondaryDiagonal(matrix) {
	var sum = 0;
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < i; j++) {
			sum += matrix[i][j];
		}
	}
	return sum;
}

/* Сортируем каждую четную строку матрицы по возрастанию, каждую нечетную - по убыванию */
function sortRows(matrix) {
	for (var i = 0; i < matrix.length; i++) {
		if (i % 2 == 0) {
			matrix[i].sort(function(a, b) {return a - b});
		} else {
			matrix[i].sort(function(a, b) {return b - a});
		}
	}
	return matrix;
}

/* Находим произевдение исходной и сортированной матрицы */
function multiplyMatrices(matrix1, matrix2) {
	if (matrix1[0].length != matrix2.length) {
		return null;
	}
	var result = [];
	for (var i = 0; i < matrix1.length; i++) {
		result[i] = [];
		for (var j = 0; j < matrix2[0].length; j++) {
			var sum = 0;
			for (var k = 0; k < matrix1[0].length; k++) {
				sum += matrix1[i][k] * matrix2[k][j];
			}
			result[i][j] = sum;
		}
	}
	return result;
}

var x = parseFloat(WScript.Arguments.Item(0));

var matrix = createMatrix(x);
WScript.StdOut.WriteLine("Матрица:");
printMatrix(matrix);

var count = countMultiples(matrix);
WScript.StdOut.WriteLine("Количество элементов, кратных 7: " + count);

var sum = sumOddRows(matrix);
WScript.StdOut.WriteLine("Сумма элементов матрицы в каждой нечетной строке: " + sum);

var product = productEvenColumns(matrix);
WScript.StdOut.WriteLine("Произведение четных элементов в каждом нечетном столбце: " + product);

var sumAbove = sumAboveSecondaryDiagonal(matrix);
WScript.StdOut.WriteLine("Сумма элементов выше побочной диагонали: " + sumAbove);

var sortedMatrix = sortRows(matrix);
WScript.StdOut.WriteLine("Отсортированная матрица:");
printMatrix(sortedMatrix);

var multMatrix = multiplyMatrices(matrix, sortedMatrix);
WScript.StdOut.WriteLine("Результат умножения:");
printMatrix(multMatrix);
