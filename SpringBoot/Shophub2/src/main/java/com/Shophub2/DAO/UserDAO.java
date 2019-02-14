package com.Shophub2.DAO;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;

import com.Shophub2.Bean.User;


public class UserDAO implements IUserDAO {
	private JdbcTemplate jdbcTemplate;

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public List<User> get(long userId) {
		String sql="select from customer where userId='" + userId + "' ";
		List <User> user = jdbcTemplate.query(sql, new UserMapper());
		return user;
	}

	public List<User> getAll() {
		String sql="select * from customer";
		List<User> user=jdbcTemplate.query(sql, new UserMapper());
		return user;
	}

	public int add(User user) {
		String query = "insert into customer values('" + user.getUserId() + "','" + user.getUserName() + "','"
				+ user.getEmail() + "','" + user.getContact() + "','" + user.getPassword() + "')";
		return jdbcTemplate.update(query);
	}

	public long remove(long userId) {
		String query = "delete from customer where userId='" + userId + "' ";
		return jdbcTemplate.update(query);
	}

	public boolean contains(long userId, String userName) {

		return false;
	}

	public long update(long userId, String password) {

		String query = "update customer set password ='"+password+"' where userId="+userId;
		//System.out.println("Updated Record with userId = " + userId);
		return jdbcTemplate.update(query);
	}
	@Override
	public String toString() {
		return "UserDAO [jdbcTemplate=" + jdbcTemplate + "]";
	}

}
