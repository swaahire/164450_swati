package com.Shophub2.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.Shophub2.Bean.User;
import com.Shophub2.DAO.UserDAO;

public class UserService {
	@Autowired
	UserDAO userdao;

	
	public UserDAO getUserdao() {
		return userdao;
	}

	public void setUserdao(UserDAO userdao) {
		this.userdao = userdao;
	}

	public boolean isValid(String userName, String password) {
		List<User> user = userdao.getAll();
		boolean status = false;
		for (User u : user) {
			if (u.getUserName().equals(userName)
					&& u.getPassword().equals(password)) {
				status = true;
			}
		}
		return status;
	}

	public String addUser() {

		return "user added";
	}

}
