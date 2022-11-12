-- CREATE TABLE STUDENT(
--         GR_NO varchar(6),
--         NAME varchar(50),
--         BIRTHDATE DATE,
--         CONSTRAINT pk_Category PRIMARY KEY(GR_NO)
-- );
-- insert into student values("V0001","Satasiya Vrushabh","2001-08-14");
-- insert into student values("V0002","ghinaiya dipali","2002-04-18");
-- insert into student values("V0003","thummar kinjal","2001-02-15");
-- insert into student values("V0004","padmani keyur","2003-02-16");
-- insert into student values("V0005","Thummar Kinjal","2001-10-13");
-- insert into student values("V0006","Kumbhani Nency","2003-12-22");


-- QUERY;-
--     alter table student add column Age varchar(50);
--     update student set Age= date_format(from_days(datediff(now(),BIRTHDATE)),"%y Year %m Month %d Day");
--     select * from student;


+-------+-------------------+------------+-------------------------+
| GR_NO | NAME              | BIRTHDATE  | Age                     |
+-------+-------------------+------------+-------------------------+
| V0001 | Satasiya Vrushabh | 2001-08-14 | 21 Year 03 Month 08 Day |
| V0002 | ghinaiya dipali   | 2002-04-18 | 20 Year 07 Month 04 Day |
| V0003 | thummar kinjal    | 2001-02-15 | 21 Year 09 Month 04 Day |
| V0004 | padmani keyur     | 2003-02-16 | 19 Year 09 Month 04 Day |
| V0005 | Thummar Kinjal    | 2001-10-13 | 21 Year 01 Month 07 Day |
| V0006 | Kumbhani Nency    | 2003-12-22 | 18 Year 10 Month 30 Day |
+-------+-------------------+------------+-------------------------+