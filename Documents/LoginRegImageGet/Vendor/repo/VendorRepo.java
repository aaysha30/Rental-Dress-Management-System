package study.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.entity.VendorEntity;

@Repository
public interface VendorRepo extends JpaRepository<VendorEntity, Integer>{
	public Optional<VendorEntity> findByEmailId(String uname);
}
