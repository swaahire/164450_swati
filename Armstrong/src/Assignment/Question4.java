package Assignment;

import java.util.Scanner;

public class Question4 {
	public static void main(String args[])
	{
		Scanner scanner=new Scanner(System.in);
		int mark1,mark2,mark3;
		mark1=scanner.nextInt();
		mark2=scanner.nextInt();
		mark3=scanner.nextInt();
		if(mark1>=60 && mark2>=60 &&mark3>=60)
		{
			System.out.println("Passed");
		}
		else if (mark1>60&& mark2>60 ||mark1>60&& mark3>60||mark2>60&& mark3>60)
		{
			System.out.println("promoted");
		}
		else
		{
			System.out.println("Failed");
		}
	}

}
