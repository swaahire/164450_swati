package Assignment;

import java.util.Scanner;

public class Armstrong {
	public static void main(String args[])
	{
		int number,original,remainder;
		int result=0;
	
		
		Scanner scanner = new Scanner(System.in);
		number=scanner.nextInt();
		System.out.println("Enter Number="+number);
		
	original=number;
		while(original>0)
		{
			remainder=original%10;
			original=original/10;
			result=(int) (Math.pow(remainder,3)+result);
		}
		if(number==result)
		{
			System.out.println("Number is armstrong number");
		}
		else
		{
			System.out.println("number is not armstrong number");
		}
	}
	}

