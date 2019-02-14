package com.Shophub2.DAO;

import java.util.List;

import com.Shophub2.Bean.User;

public interface IUserDAO {
	public List<User> get(long userId);

	public List<User> getAll();

	public int add(User user);

	public long remove(long userId);

	public long update(long userId,String password);

	public boolean contains(long userId, String userName);
	

}
