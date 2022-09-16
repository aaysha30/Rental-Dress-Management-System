package study.project;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ApparelRepository extends JpaRepository<ApparelEntity2,Integer> {

	@Query(value="from study.project.ApparelEntity2 a where a.vendorId= :vendorId")
	List<ApparelEntity2> findbyVendorId(int vendorId);

}
