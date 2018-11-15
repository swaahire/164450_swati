package Assignment;

import java.util.Scanner;

public class Assignment3 {
	public static void main(String args[])
	{
		Scanner scanner=new Scanner(System.in);
		int principle,rate,time,si,ci;
		principle=scanner.nextInt();
		rate=scanner.nextInt();
		time=scanner.nextInt();
		si=(principle*rate*time)/100;
		System.out.println(si);
		ci = (int) (principle * (Math.pow((1 + rate / 100), time)));
		System.out.println(ci);
	}
}
