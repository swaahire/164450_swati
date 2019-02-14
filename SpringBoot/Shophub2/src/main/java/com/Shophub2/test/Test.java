package com.Shophub2.test;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.Shophub2.Bean.User;
import com.Shophub2.DAO.UserDAO;


public class Test {
	public static void main(String[] args) {
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");

		UserDAO dao = ctx.getBean(UserDAO.class);
	//	UserService uservice=ctx.getBean(UserService.class);
		
		 /* int status = dao.add(new User(6, "Priti", "priti01@cpg.com", 988989000,
		  "abcd")); System.out.println(status);*/
		 
		/*User user=new User();
		user.setUserId(6);
		long status1 = dao.remove(6);
		System.out.println(status1);*/
		/*List<User> list=dao.getAll();
		for(User user:list){
			System.out.println(user);
		}*/
		// System.out.println(dao.update(6,"1120"));
		/*List<User> list1=dao.get(6);
		for(User user:list1){
			System.out.println(user);
		}*/
		System.out.println(uservice.isValid("priti","abcd"));
		
	}
}