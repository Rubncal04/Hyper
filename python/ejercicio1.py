mail = input("Enter your E mail: ")

found = mail.find("@hotmail.com")

trying = 0

while found < 0:
	print("E mail incorrect")
	mail = input("Enter your E mail: ")
	found = mail.find("@hotmail.com")

	if trying == 4:
		print("You have used many trying. Have you forget your user?")
		break;

	if found < 0:
		trying += 1
	
	
if trying < 4:

	print("Welcome. This is your interactive site")
