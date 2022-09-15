package study.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import study.entity.VendorEntity;
import study.repo.VendorRepo;

@RestController
@RequestMapping(path="/vendor")
public class VendorController {

	@Autowired
	VendorRepo vRepo;
	
	@PostMapping("/addvendor")
	public String addVendor(@RequestParam int id, @RequestParam String fname, @RequestParam String lname
			, @RequestParam String mobile_no, @RequestParam String email, @RequestParam String password, @RequestParam String address) {
		VendorEntity vendor = new VendorEntity(id,fname,lname,mobile_no,email,password,address);
		vRepo.save(vendor);
		return "vendor login";
	}
	
	@PutMapping("/forgotpassword/{uname}/{newpwd}")
	public String forgotPassword(@PathVariable("uname") String uname, @PathVariable("newpwd") String newpwd) {
		Optional<VendorEntity> obj = vRepo.findByEmailId(uname);
		if(obj.isPresent()){
			VendorEntity vendor = obj.get();
			vendor.setPassword(newpwd);
			vRepo.save(vendor);
			return "vendor login";
		}
		else
			return "Invalid credentials";
	}
	
	
}
