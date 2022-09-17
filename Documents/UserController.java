package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class UserController {
	@Autowired
	UserRepo urepo;
	//LOGIN
	//http://localhost:8080/customer/verify
	@PostMapping("/verify")
	public Message verify(@RequestBody UserInfo ui) {
		List<UserEntity>li=urepo.findAll();
		int id=0;
		System.err.println(ui.getUname());
		int flag=0 ;
		for(UserEntity u:li) {
			if(u.getEmailId().equals(ui.getUname())&& u.getPassword().equals(ui.getPassword())) {
				System.out.println(u.getEmailId()+" "+ui.getUname());
				System.out.println(u.getPassword()+" "+ui.getPassword());
				id=u.getCustomerId();
				flag=1; break;
			}
			else {
				System.out.println("else..");
				flag=0;
			}
		}
		if(flag==1) {
			System.err.println("Ok");
			return new Message("ok",id);
		}
		else {
			System.err.println("Not Ok");
			return new Message("Not Ok",id);
		}
	}
	//REGISTRATION
	//http://localhost:8080/customer/registration
	
	@PostMapping("/registration")
	public String saveUser(@RequestBody RegistrationPojo ue1) {
		System.err.println("Registrartion");
		UserEntity ue=new UserEntity(ue1.getFirst_name(),ue1.getLast_name(),ue1.getMobile_no(),ue1.getEmail_Id(),ue1.getPassword(),ue1.getGender().charAt(0));
		urepo.save(ue);
		return "OK";
	}
	//http://localhost:8080/customer/forgotPassword
	@PutMapping("/forgotPassword/{email}/{password}")
	public String updatePassword(@PathVariable("email") String email,@PathVariable("password") String newpwd) {
		System.err.println(email+" "+newpwd);
	UserEntity u=urepo.findByEmail(email);
	System.err.println("Forgot pwd");
	if(u!=null) {
		u.setPassword(newpwd);
		System.out.println(u.getPassword());
		urepo.save(u);
		return "Ok";
	}
	else {
		return "Not Ok";
	}
	}
}
