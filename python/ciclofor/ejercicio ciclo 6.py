# the 6° exercise

first_weight = float(input("Enter the first weight: "))

final_weight = 0

for i in range(1, 3):
	weight = float(input(f"Enter the {i + 1}° weight: "))
	if weight > 0:
		final_weight = final_weight + weight
		

avarage = ((final_weight + first_weight) / 3)

if avarage < first_weight:
	print(f"You´re lost weight: {avarage - first_weight}")
else:
	print(f"You´re got weight: {avarage - first_weight}")