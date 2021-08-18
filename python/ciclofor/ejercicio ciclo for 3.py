# ejercicio 3: calcular el salario de un obrero

print("checking the salary of a worker")

workers = int(input("enter the number of workers: "))

basic_salary = 20

for i in range(workers):
	while True:
		time_work = int(input(f"enter the time of work {i+1}: "))
		if time_work <= 0:
			print("Enter error. Write again.")
		else:
			break;

	if time_work <= 40:
		print(f"salary of the {i + 1} worker is $ {basic_salary * time_work}")
	else:
		extra_time = time_work - 40
		print(f"Salary of the {i + 1} worker is $ {(basic_salary * 40) + (extra_time * 25)}")		


print("Thank you for using")