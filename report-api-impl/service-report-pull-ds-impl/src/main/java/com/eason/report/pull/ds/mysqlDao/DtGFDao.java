package com.eason.report.pull.ds.mysqlDao;


import com.eason.report.pull.ds.po.DtGuangfangLotteryPo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

@Repository
public interface DtGFDao extends JpaRepository<DtGuangfangLotteryPo, String>{

  @Query(value = "select COALESCE(max(id),0) from dt_guangfang_lottery",nativeQuery = true)
  Long getMaxId();

  DtGuangfangLotteryPo findByNid(String nid);

  @Procedure(procedureName = "ds_gf_site_pull")
  Integer sitePull(Integer siteId,Long startId,Long endId);

  @Procedure(procedureName = "ds_gf_audit_report")
  String createAuditAndReport(Integer siteId, String prex, Integer type, Long startId, Long endId);

}
