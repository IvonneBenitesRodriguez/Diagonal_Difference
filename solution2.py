def diagonal_difference(arr):
    n  = len(arr)
    diagonal_sum = sum(arr[i][i] for i in range(n))
    counter_diagonal_sum = sum(arr[i][n - i - 1] for i in range(n))
    return abs(diagonal_sum - counter_diagonal_sum)

matrix = [
    [1,8,7],
    [2,9,6],
    [3,4,5]
]

result = diagonal_difference(matrix)
print("Absolute difference:" , result)