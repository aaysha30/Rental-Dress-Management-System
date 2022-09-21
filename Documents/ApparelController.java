package study.project;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin
@RestController
@RequestMapping(path="/apparel")
public class ApparelController {

	@Autowired
	ApparelRepository repo;

	@PostMapping("/insertApparel")
	public String insertApparel(@RequestParam("vendorId") int vendorId,@RequestParam String description,@RequestParam String category,
			@RequestParam int damount,@RequestParam int ramount,@RequestParam String size,
			@RequestParam String gender,@RequestParam MultipartFile image) {
		ApparelEntity2 obj;
		try {
			obj = new ApparelEntity2(vendorId,description,category,damount,ramount,size,gender,image.getBytes());
			repo.save(obj);
		} catch (IOException e) {
			System.out.println("Exception occured");
		}
		return "insert done";
	}
	
//	@GetMapping("/getApparel")
//	public List<ApparelEntity2> getCollection() {
//		List<ApparelEntity2> list = repo.findAll();
//		return list;
//	}
	
	@GetMapping("/getByVendorId/{vendorId}")
	public List<ApparelEntity2> getById(@PathVariable int vendorId){
		List<ApparelEntity2> list = repo.findbyVendorId(vendorId);
		return list;
	}
	
//	@DeleteMapping("/deleteByApparelId/{apparelId}")
//	public String deleteApparel(@PathVariable int apparelId) {
//		repo.deleteById(apparelId);
//		return "deleted";
//	}
	
}





