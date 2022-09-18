package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OneToManyController {
@Autowired
PersonRepo prepo;
@GetMapping("/get")
public String Add() {
		Person p=new Person();
		p.setId(1);
		p.setName("Aaysha");
		
		List<Address> list = new ArrayList<Address>();
		list.add(new Address("MP",451556,p));
		list.add(new Address("MH",1234,p));
		p.setLi(list);
		
		prepo.save(p);
		return "inserted";

}
@GetMapping("/show")
public String get()
{
	Person b = prepo.findById(1).get();
	return  b.getName()+"  "+b.getLi().get(0).getState();
}

}
