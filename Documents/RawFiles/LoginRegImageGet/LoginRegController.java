package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginRegController {
	@Autowired
	UserRepo urepo;
	
@GetMapping(value="/l")
	public String hii() {
		return "hii";
	}


@GetMapping("/loginn")
public String login() {
	System.err.println("Login");
	return "login";
}

@GetMapping("/verify")
public String verify(@RequestParam("uname") String username,@RequestParam("pwd") String password) {
	List<UserEntity>li=urepo.findAll();
	int flag=0 ;
	for(UserEntity u:li) {
		if(u.getFirst_name().equals(username) && u.getPassword().equals(password)) {
			flag=1; break;
		}
		else {
			flag=0;
		}
	}
	if(flag==1) {
		return "index";
	}
	else {
		return "login";
	}
}
@GetMapping("/registration")
public String registration() {
	return "regPage";
}

@GetMapping("/saveUser")
public String saveUser(@RequestParam("cid") int id,@RequestParam("fname") String fname,@RequestParam("fname") String lname, @RequestParam("email") String email,@RequestParam("pwd") String pwd,@RequestParam("gender") char gender,@RequestParam("num") Long mob) {
	UserEntity ue=new UserEntity(id,fname,lname,mob,email,pwd,gender);
	urepo.save(ue);
	return "hii";
}
}
