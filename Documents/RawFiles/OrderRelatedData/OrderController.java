package com.example.demo;



import java.sql.Date;
import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("http://localhost:3000")
@RestController
public class OrderController {
@Autowired
OrderRepo orepo;
//			@GetMapping("/getOrderr/{cid}")
//			public List<OrderEntity> order(@PathVariable("cid") int cid) {
//				System.err.println(cid);
//				CustomerEntity customer=orepo.findById(cid).get();
//			
//				int oid=customer.getOrderlist().get(0).getOrder_id();
//				Date dod=customer.getOrderlist().get(0).getDate_of_dispatch();
//				int total=customer.getOrderlist().get(0).getTotal_amount();
//				Date dor=customer.getOrderlist().get(0).getDate_of_return();
//				String status=customer.getOrderlist().get(0).getStatus();
//				System.err.println(oid+" "+dod);
//				System.out.println(dod.getDate()+"-"+dod.getMonth()+"-"+dod.getYear());
//			
//				//dod=dod.getDate()+"-"+dod.getMonth()+"-"+dod.getYear();
//				List<OrderEntity> li=new ArrayList<OrderEntity>();
//				OrderEntity o=new OrderEntity(oid,total,dod,dor,status);
//				li.add(o);
//				return li;
//			}
		@GetMapping("/getOrder/{order_id}")
		public List<OrderEntity> getOrderDetails(@PathVariable("order_id") int order_id) {
			Optional<OrderEntity> o=orepo.findById(order_id);
			if(o.isEmpty()) {
				System.err.println("Ok");
			}
			else {
				System.err.println("not ok");
			}
			int cid=o.get().getCid();
			Date dod=o.get().getDate_of_dispatch();
			Date dor=o.get().getDate_of_return();
			int totalamount=o.get().getTotal_amount();
			String address=o.get().getDelievery_address();
		
			List<OrderEntity> li=new ArrayList<OrderEntity>();
			OrderEntity oe=new OrderEntity(cid,totalamount,dor,dod,address);
			li.add(oe);
			System.out.println(order_id);
			return li;
		}
		

}
