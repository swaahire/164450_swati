package com.Shophub2.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.Shophub2.Bean.User;

public class UserMapper implements RowMapper<User>{

	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		User user = new User();
		   user.setUserId(rs.getInt("userId"));
		   user.setUserName(rs.getString("userName"));
		   //email contact password
		   user.setEmail(rs.getString("email"));
		   user.setContact(rs.getLong("contact"));
		   user.setPassword(rs.getString("password"));
		   
		  
	      return user;
	   }
	}


