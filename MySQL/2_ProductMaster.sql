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