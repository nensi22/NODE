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


QUERY;-
    alter table student add column Age varchar(50);
    update student set Age= date_format(from_days(datediff(now(),BOD)),"%y Year %m Month %d Day");
    select * from student;