-- CREATE TABLE MANUFACTURERS(
--     Code INT,
--     Name text,
--     CONSTRAINT pk_Category PRIMARY KEY(Code)
-- );

-- INSERT INTO MANUFACTURERS VALUES(1,'sony');
-- INSERT INTO MANUFACTURERS VALUES(2,'Creative Labs');
-- INSERT INTO MANUFACTURERS VALUES(3,'Hewlwtt-packard');
-- INSERT INTO MANUFACTURERS VALUES(4,'Lomega');
-- INSERT INTO MANUFACTURERS VALUES(5,'Fujitsu');
-- INSERT INTO MANUFACTURERS VALUES(6,'winchester');





-- CREATE TABLE PRODUCTS(
--     Code INT ,
--     Name text ,
--     Price Real ,
--     Manufacturers int ,
--     CONSTRAINT pk_Category PRIMARY KEY(Code) ,
--     CONSTRAINT fk_products FOREIGN KEY(Manufacturers) references MANUFACTURERS(Code)
-- );

-- INSERT INTO PRODUCTS VALUES(1,'Hard drive',240,5);
-- INSERT INTO PRODUCTS VALUES(2,'Memory',120,6);
-- INSERT INTO PRODUCTS VALUES(3,'ZIP drive',150,4);
-- INSERT INTO PRODUCTS VALUES(4,'Floopy disk',5,6);
-- INSERT INTO PRODUCTS VALUES(5,'Monitor',240,1);
-- INSERT INTO PRODUCTS VALUES(6,'DVD drive',180,2);
-- INSERT INTO PRODUCTS VALUES(7,'CD drive',90,2);
-- INSERT INTO PRODUCTS VALUES(8,'Printer',270,3);
-- INSERT INTO PRODUCTS VALUES(9,'Toner cartridge',66,3);
-- INSERT INTO PRODUCTS VALUES(10,'DVD burner',180,2);


-- QEURIES--
-- 1.1  select name from products;
-- 1.2  select name,price from products;
-- 1.3  select name from products where price<=200;
-- 1.4  select name from products where price between 60 and 120;
-- 1.5  alter table products add column cents real;
     -- update products set cents=price*100;
-- 1.6  select avg(price) from products;
-- 1.7  select avg(price) from products where manufacturers=2;
-- 1.8  select count(name) from products where price>=180;
-- 1.9  select name,price from products where price>=180 order by name asc,price desc;

-- 1.15  select name ,price from products  order by price limit 1;
-- 1.16
-- 1.17  insert into products values(11,'Loudspeaker',70,2);
-- 1.18  update products set name='Laser printer' where name='printer';
-- 1.19  update products set price=(price-(price*10)/100);
-- 1.20  update products set price=(price-(price*10)/100) where price>=120;