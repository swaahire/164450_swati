package Assignment;

import java.util.Scanner;

public class Question5a {
	public static void main(String args[])
	{
int salary;
	Scanner scanner= new Scanner(System.in);
	System.out.println("Enter your salary to calculate tax");
	salary=scanner.nextInt();
		
	if(salary==0 && salary<180000)
	{
		System.out.println("No Tax");
	}
	else if(salary>18000 && salary<300000)
	{
		salary= salary*10/100;
		System.out.println("Salary"+salary);
	}
	else if(salary>300000 && salary<500000)
	{
		salary=salary*20/100;
		System.out.println("Salary"+salary);
	}
	else
	{
		salary=salary*30/100;
		System.out.println("Salary"+salary);
	}
	}
}

