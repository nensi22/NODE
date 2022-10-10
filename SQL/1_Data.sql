-- create table client_master(
--    Clientno varchar(50) ,
--    Name varchar(50),
--    city varchar(50),
--    pincode numeric(38),
--    state varchar(50),
--    baldue numeric(38)
-- );
-- insert into client_master values('C00001', 'Ivan', 'Bombay', 400054, 'Maharashtra', 15000);
-- insert into client_master values('C00002', 'Vandana', 'Madras', 780001, 'Tamilnadu', 0);
-- insert into client_master values('C00003', 'Pramada', 'Bombay', 400057, 'Maharashtra', 5000);
-- insert into client_master values('C00004', 'Basu', 'Bombay', 400056, 'Maharashtra', 0);
-- insert into client_master values('C00005', 'Ravi', 'Delhi', 100001, '', 2000);
-- insert into client_master values('C00006', 'Rukmini', 'Bombay', 400050, 'Maharashtra', 0);
-- select * from client_master;

-- create table salesman_master(
--     salesman_no varchar(50) ,
--     salesmanname varchar(50) ,
--     address varchar(50) ,
--     city  varchar(50) ,
--     pincode numeric(38) ,
--     state varchar(50) ,
--     salamt numeric(50) ,
--     tgttoget numeric(50) ,
--     ytdsale numeric(50) ,
--     remark varchar(50)
-- );
-- insert into salesman_master values('S00001','Kiran','A/14 worli','Bombay',400002,'Mah',3000,100,50,'Good');
-- insert into salesman_master values('S00002','Manish','65,nariman','Bombay',400001,'Mah',3000,200,100,'Good');
-- insert into salesman_master values('S00003','Ravi','p-7 Bandra','Bombay',400032,'Mah',3000,200,100,'Good');
-- insert into salesman_master values('S00004','Ashish','A/5 Juhu','Bombay',400044,'Mah',3500,200,150,'Good');
-- select * from salesman_master;

create table product_master(
    productno varchar(50),
    description  varchar(50),
    profitpercent numeric(38,2),
    unitmeasured varchar(50),
    qtyonhand numeric(38),
    recorderlvl numeric(38),
    sellprice numeric(38),
    costprice numeric(38)
);
insert into product_master values('p00001','1.44floppies',5,'piece',100,20,525,500);
insert into product_master values('p03453','monitors',6,'piece',10,3,12000,11200);
insert into product_master values('p06734','mouse',5,'piece',100,20,525,500);
insert into product_master values('p07865','1.22 floppies',5,'piece',100,20,525,500);
insert into product_master values('p07868','keyboards',2,'piece',10,3,3150,3050);
insert into product_master values('p07885','CD Drive',2.50,'piece',10,3,5250,5100);
insert into product_master values('p07965','540 HDD',4,'piece',10,3,8400,8000);
insert into product_master values('p07975','1.44 Drive',5,'piece',10,3,1050,1000);
insert into product_master values('p08865','1.22 Drive',5,'piece',2,3,1050,1000);
select * from product_master;
