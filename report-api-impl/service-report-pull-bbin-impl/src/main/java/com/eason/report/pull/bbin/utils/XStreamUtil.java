//package com.eason.report.pull.ds.utils;
//
//
//import com.eason.report.pull.ds.vo.sport.AgSportOrdersExVo;
//import com.thoughtworks.xstream.XStream;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.core.io.Resource;
//
//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//
//
//public class XStreamUtil {
//
//    public static void main(String[] args){
//        try{
//            // 读取XML文件
//            Resource resource = new ClassPathResource("ds.xml");
//            BufferedReader br = new BufferedReader(new InputStreamReader(resource.getInputStream(), "utf-8"));
//            StringBuffer buffer = new StringBuffer();
//            String line = "";
//            while ((line = br.readLine()) !=null) {
//                buffer.append(line);
//            }
//            br.close();
//            // XML转为Java对象
//            AgSportOrdersExVo agList = (AgSportOrdersExVo)xmlStrToOject(AgSportOrdersExVo.class, buffer.toString());
//
//        }catch (Exception e){
//            e.printStackTrace();
//        }
//        System.out.print("");
//    }
//    /**
//     * 将XML转为指定的POJO
//     * @param clazz
//     * @param xmlStr @return
//     * @throws Exception
//     */
//    public static Object xmlStrToOject(Class<?> clazz, String xmlStr) throws Exception {
//        Object xmlObject = null;
//        XStream xstream = new XStream();
//        xstream.processAnnotations(clazz);
//        xstream.autodetectAnnotations(true);
//        xmlObject= xstream.fromXML(xmlStr);
//        return xmlObject;
//    }
//}
