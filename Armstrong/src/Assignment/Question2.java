package Assignment;

public class Question2 {
public static void main(String args[])
{
	int i,original,remainder;
	int result=0;
	
	for(i=100;i<=999;i++)
	{
	
    original=i;
	while(original>0)
	{
		remainder=original%10;
		original=original/10;
		result=(int) (Math.pow(remainder,3)+result);
	}
	
	if(i==result)
	{
		System.out.println(i);
	}
	
	}
}
}

