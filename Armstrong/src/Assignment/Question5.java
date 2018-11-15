package Assignment;

import java.util.Arrays;
import java.util.Scanner;

public class Question5 {
	
		int numbers[]=new int[5];
		int temp;
		Scanner scanner= new Scanner(System.in);
		
	public void getValue()
		{
		System.out.println("Enter all the elements:");
		for(int i=0;i<5;i++)
		{
		numbers[i]=scanner.nextInt();
		}
	}
	public void asc()
	{
		for(int i=0;i<5;i++)
		{
			for(int j=i+1;j<5;j++)
			{
				if(numbers[i]>numbers[j])
				{
					temp=numbers[i];
					numbers[i]=numbers[j];
					numbers[j]=temp;
					
				}
			}
	    }
		for(int i=0;i<5;i++)
		{
			System.out.println("Sorted Array in ascending:"+numbers[i]);
			
		}
	}
		public void dsc()
		{
		for(int i=0;i<5;i++)
		{
			for(int j=i+1;j<5;j++)
			{
				if(numbers[i]<numbers[j])
				{
					temp=numbers[i];
					numbers[i]=numbers[j];
					numbers[j]=temp;
					
				}
			}
	    }
		for(int i=0;i<5;i++)
		{
			System.out.println("Sorted Array in descending:"+numbers[i]);
			
		}
	}
}

	
