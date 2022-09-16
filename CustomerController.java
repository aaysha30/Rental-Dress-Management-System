package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/category")
public class CustomerController {
	
	@Autowired
	AparelRepo arepo;
	//http://localhost:8080/category/searchByCategory/Sherwani
	
	@GetMapping("/searchByCategory/{category}")
	public List<AperalEntity> searchByCategory(@PathVariable("category") String cat) {
	List<AperalEntity>li=arepo.findByCate(cat);
	return li;
	}
	
	
	//example ->selected anyone sherwani from above list
	//http://localhost:8080/category/searchByDescription/Mehroon%20Sherwani
	
	@GetMapping("/searchByDescription/{desc}")
	public List<AperalEntity> getParticularInfo(@PathVariable("desc") String descc) {
		System.err.println("Hii");
		ArrayList<AperalEntity> selectedList=new ArrayList<AperalEntity>();
		List<AperalEntity>li=arepo.findByDescription(descc);
		for(AperalEntity a:li) {
			int damnt=a.getDeposit_amount();
			String status=a.getStatus();
			String size=a.getSize();
			int ramount=a.getRent_amount();
			String desc=a.getDescription();
			byte[] image=a.getImage();
		
			int imgId=a.getImageid();
			System.err.println(status+" "+size+" "+"image : "+image+" "+imgId);
			AperalEntity ae=new AperalEntity(size,desc,ramount,damnt,status,image,imgId);
			
			selectedList.add(ae);
		}
		return selectedList;
	}
	
}
