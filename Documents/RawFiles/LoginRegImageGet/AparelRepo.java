package com.example.demo;

import java.util.List;

import javax.management.ConstructorParameters;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
public interface AparelRepo extends JpaRepository<AperalEntity, Integer>{

@Query(value="from com.example.demo.AperalEntity a where a.Cate= :catt")
public List<AperalEntity> findByCate (@Param("catt") String catt);

@Query(value="from com.example.demo.AperalEntity a where a.Description= :desc")
public List<AperalEntity> findByDescription (@Param("desc") String catt);
}
