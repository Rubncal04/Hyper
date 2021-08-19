""" 1. de los elementos n de un vector dado, calcule:
a: la sumatoria
b: la productoria
c: el mayor elemento
d: el menor elemento"""

numbers = []

rounds = 6

higher = int(input("Enter the first number: "))

numbers.append(higher)

smallest = numbers[0]


for i in range(1,rounds):
	number = int(input(f"Enter the {i + 1}° number: "))

	numbers.append(number)

	if numbers[i] < smallest:
		smallest = numbers[i]

	if numbers[i] > higher:
		higher = numbers[i] 

	plus = sum(numbers)

print(f"These are all your list: {numbers[:]}")
print(f"the highest number is: {higher}")
print(f"the smallest number is: {smallest}")
print(f"The plus of all numbers is: {plus}")
