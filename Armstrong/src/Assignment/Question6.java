package Assignment;

import java.util.Scanner;

public class Question6 {
	public static void main(String args[]) {
		Scanner scanner = new Scanner(System.in);
		String userlogin;
		int userpassword;
		String loginname = "Swati";
		int password = 1289;
		int count = 0;
		do {
			System.out.println("Enter loginname and password");
			userlogin = scanner.next();
			userpassword = scanner.nextInt();
			if (loginname.equals(userlogin) && password == userpassword) {
				System.out.println("Welcome");
				break;
			} else {
				count++;
			}
		} while (count < 3);
		if (count > 2) {
			System.out.println("Contact Admin");
		}
	}
}