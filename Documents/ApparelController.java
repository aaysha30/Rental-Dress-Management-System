package study.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(path="/apparel")
public class ApparelController {

	@Autowired
	ApparelRepository repo;

	@PostMapping("/insertApparel/{vendorId}/{description}/{category}/{damount}/{ramount}/{size}/{gender}")
	public String insertApparel(@PathVariable String description,@PathVariable String category,
			@PathVariable int damount,@PathVariable int ramount,@PathVariable String size,
			@PathVariable String gender,@PathVariable int vendorId) {
		ApparelEntity2 obj =new ApparelEntity2(vendorId,description,category,damount,ramount,size,gender);
		repo.save(obj);
		return "insert done";
	}
	
	@GetMapping("/getApparel")
	public List<ApparelEntity2> getCollection() {
		List<ApparelEntity2> list = repo.findAll();
		return list;
	}
	
	@GetMapping("/getByVendorId/{vendorId}")
	public List<ApparelEntity2> getById(@PathVariable int vendorId){
		List<ApparelEntity2> list = repo.findbyVendorId(vendorId);
		return list;
	}
	
}





