09/11/22

QUERIES:-

-- 1.EXERCISE ON USING HAVING AND GROUP BY CLAUESES:
-- A. Print the description and total qty for each product.
    create or replace view 1_A as
    select pm.productno,pm.description ,sum(sod.QTYORDERED)
       from product_master pm,SALES_ORDER_DETAILS sod
          where pm.productno=sod.productno
             group by pm.productno;
      
    select * from 1_A;
+-----------+--------------+---------------------+
| productno | description  | sum(sod.QTYORDERED) |
+-----------+--------------+---------------------+
| p00001    | 1.44floppies |                  34 |
| p07965    | 540 HDD      |                   3 |
| p07885    | CD Drive     |                   5 |
| p07868    | keyboards    |                   3 |
| p03453    | monitors     |                   2 |
| p06734    | mouse        |                   1 |
| p07975    | 1.44 Drive   |                   6 |
+-----------+--------------+---------------------+


-- B. Find the value of each product sold.
    create or replace view 1_B as
    select  pm.productno,pm.description,sum(sod.qtydisp)
       from sales_order_details sod,product_master pm
          where pm.productno=sod.productno
             group by pm.productno;

    select * from 1_B;
+-----------+--------------+------------------+
| productno | description  | sum(sod.qtydisp) |
+-----------+--------------+------------------+
| p00001    | 1.44floppies |               19 |
| p07965    | 540 HDD      |                1 |
| p07885    | CD Drive     |                2 |
| p07868    | keyboards    |                3 |
| p03453    | monitors     |                2 |
| p06734    | mouse        |                1 |
| p07975    | 1.44 Drive   |                3 |
+-----------+--------------+------------------+


-- C. Calculate the average qty sold for each client that has a maximum order value of 15000.00.
    create or replace view 1_C as
    select cm.clientno,cm.name,avg(sod.qtydisp),max(sod.QTYORDERED*sod.PRODUCTRATE)
       from SALES_ORDER_DETAILS  sod,CLIENT_MASTER  cm,SALES_ORDER so,product_master pm
          where pm.productno=sod.productno and cm.clientno=so.clientno and so.orderno=sod.orderno
             group by cm.clientno
                having max(sod.QTYORDERED * sod.productrate)>15000;

    select * from 1_C;
+----------+---------+------------------+-------------------------------------+
| clientno | name    | avg(sod.qtydisp) | max(sod.QTYORDERED*sod.PRODUCTRATE) |
+----------+---------+------------------+-------------------------------------+
| C00001   | Ivan    |           1.8000 |                            16800.00 |
| C00003   | Pramada |           4.6667 |                            15750.00 |
+----------+---------+------------------+-------------------------------------+


-- D. Find out the total of all the billed orders for the month of june.
     create or replace view 1_D as
     select MONTH(so.ORDERDATE) as "octomber",sum(sod.QTYORDERED) as "Total"
        from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
           where pm.productno=sod.productno 
              and so.orderno=sod.orderno 
                 and so.Clientno = cm.Clientno
                    group by so.ORDERDATE
                       having  10=(MONTH(so.ORDERDATE));

     select * from 1_D;
+----------+-------+
| octomber | Total |
+----------+-------+
|       10 |    54 |
+----------+-------+


--2.EXERCISE ON JOIN AND CORRELATION:
-- A.Find out the products , which have been sold to "Ivan Bayross". 
    create or replace view 091122_2_A as
    select  cm.Clientno,cm.Name,sod.orderno,sod.PRODUCTNO
       from SALES_ORDER_DETAILS sod,product_master pm, SALES_ORDER so,CLIENT_MASTER cm
          where pm.productno=sod.productno
            and so.ORDERNO=sod.ORDERNO
               and cm.CLIENTNO=so.CLIENTNO
                  and cm.name="Ivan";

    select * from 091122_2_A;
+----------+------+---------+-----------+
| Clientno | Name | orderno | PRODUCTNO |
+----------+------+---------+-----------+
| C00001   | Ivan | 019001  | P00001    |
| C00001   | Ivan | 019001  | P07965    |
| C00001   | Ivan | 019001  | P07885    |
| C00001   | Ivan | 019003  | P03453    |
| C00001   | Ivan | 019003  | P06734    |
+----------+------+---------+-----------+


-- B.Find out the products and their quantities that will have to delivered in the current month.
    create or replace view 091122_2_B as
    select pm.productno,pm.Description ,sod.QTYORDERED,sod.QTYDISP,so.DELYDATE 
       from SALES_ORDER_DETAILS sod,product_master pm, SALES_ORDER so,CLIENT_MASTER cm
          where pm.productno=sod.productno and so.ORDERNO=sod.ORDERNO and cm.CLIENTNO=so.CLIENTNO
             and 10=(MONTH(DELYDATE)) ;

    select * from 091122_2_B;
+-----------+--------------+------------+---------+------------+
| productno | Description  | QTYORDERED | QTYDISP | DELYDATE   |
+-----------+--------------+------------+---------+------------+
| p00001    | 1.44floppies |          4 |       4 | 2020-10-02 |
| p07965    | 540 HDD      |          2 |       1 | 2020-10-02 |
| p07885    | CD Drive     |          2 |       1 | 2020-10-02 |
+-----------+--------------+------------+---------+------------+

    create or replace view 091122_2_B as
    select pm.productno,pm.Description ,sod.QTYORDERED,sod.QTYDISP,so.DELYDATE 
       from SALES_ORDER_DETAILS sod,product_master pm, SALES_ORDER so,CLIENT_MASTER cm
          where pm.productno=sod.productno and so.ORDERNO=sod.ORDERNO and cm.CLIENTNO=so.CLIENTNO
             and SO.ORDERDATE < "2022-10-15" ;

    select * from 091122_2_B;
+-----------+--------------+------------+---------+------------+
| productno | Description  | QTYORDERED | QTYDISP | DELYDATE   |
+-----------+--------------+------------+---------+------------+
| p00001    | 1.44floppies |          4 |       4 | 2020-10-02 |
| p07965    | 540 HDD      |          2 |       1 | 2020-10-02 |
| p07885    | CD Drive     |          2 |       1 | 2020-10-02 |
| p00001    | 1.44floppies |         10 |       0 | 2027-12-02 |
| p03453    | monitors     |          2 |       2 | 2007-12-02 |
| p06734    | mouse        |          1 |       1 | 2007-12-02 |
| p00001    | 1.44floppies |         10 |       5 | 2026-09-02 |
| p07975    | 1.44 Drive   |          5 |       3 | 2026-09-02 |
| p07868    | keyboards    |          3 |       3 | 2020-09-02 |
| p07885    | CD Drive     |          3 |       1 | 2020-09-02 |
| p00001    | 1.44floppies |         10 |      10 | 2020-09-02 |
| p07965    | 540 HDD      |          1 |       0 | 2022-06-02 |
| p07975    | 1.44 Drive   |          1 |       0 | 2022-06-02 |
+-----------+--------------+------------+---------+------------+

    create or replace view 091122_2_B as
    select Pm.productno,Pm.Description ,SOD.QTYORDERED,SOD.QTYDISP,SO.ORDERDATE
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
          where pm.productno=sod.productno and so.ORDERNO=sod.ORDERNO and so.Clientno = cm.Clientno
             and MONTH(CURDATE())=(MONTH(SO.ORDERDATE)) ;

    select * from 091122_2_B;

Empty set (0.00 sec)


-- C.List the productNo and description of constantly sold (i.e..rapidly moving)products.
    create or replace view 091122_2_C as
    select  pm.productno,pm.description,sum(sod.qtyordered)  as "sum"
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
           where pm.productno=sod.productno and so.ORDERNO=sod.ORDERNO and cm.CLIENTNO=so.CLIENTNO
             group by SOD.productno
                order by sum(SOD.QTYORDERED) desc limit 1;

    select * from 091122_2_C;
+-----------+--------------+---------------------+
| productno | description  | sum(sod.qtyordered) |
+-----------+--------------+---------------------+
| p00001    | 1.44floppies |                  34 |
+-----------+--------------+---------------------+


-- D.Find the names of clients who have purchased 'Trousery'.
    create or replace view 091122_2_D as
    select cm.name ,pm.productno
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
           where pm.productno=sod.productno and so.ORDERNO=sod.ORDERNO and cm.CLIENTNO=so.CLIENTNO
             and pm.description = "Monitors"; 

    select * from 091122_2_D;
+---------+-----------+
| name    | productno |
+---------+-----------+
| Ivan    | p03453    |
| Pramada | p03453    |
+---------+-----------+

    create or replace view 091122_2_D as
    select cm.name ,pm.productno
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
           where pm.productno=sod.productno and so.ORDERNO=sod.ORDERNO and cm.CLIENTNO=so.CLIENTNO
             and pm.description = "Trousery"; 

    select * from 091122_2_D;

Empty set (0.00 sec)



-- E.list the products and orders from customers who have ordered less then 5 units of 'Keyboards'.
    create or replace view 091122_2_E as
    select pm.Productno ,pm.Description,cm.Clientno,cm.name,sod.QTYORDERED as "Keyboards"
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
         where pm.productno=sod.productno and so.ORDERNO=sod.ORDERNO and cm.CLIENTNO=so.CLIENTNO
            and  sod.QTYORDERED<5 and Pm.description="Keyboards"; 

    select * from 091122_2_E;
+-----------+-------------+----------+---------+---------+
| Productno | Description | Clientno | name    | keybord |
+-----------+-------------+----------+---------+---------+
| p07868    | keyboards   | C00003   | Pramada |       3 |
+-----------+-------------+----------+---------+---------+


-- F.Find the products and their quantities for the orders placed by 'Ivan Bayross' and 'Mamta Muzumdar'.
    create or replace view 091122_2_F as
    select Pm.Productno ,Pm.Description,Cm.Clientno,Cm.name,SOD.QTYORDERED 
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
          where pm.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = cm.Clientno
             and (Cm.name = "Ivan" or Cm.name = "Ravi");

   select * from 091122_2_F;
+-----------+--------------+----------+------+------------+
| Productno | Description  | Clientno | name | QTYORDERED |
+-----------+--------------+----------+------+------------+
| p00001    | 1.44floppies | C00001   | Ivan |          4 |
| p07965    | 540 HDD      | C00001   | Ivan |          2 |
| p07885    | CD Drive     | C00001   | Ivan |          2 |
| p03453    | monitors     | C00001   | Ivan |          2 |
| p06734    | mouse        | C00001   | Ivan |          1 |
| p00001    | 1.44floppies | C00005   | Ravi |         10 |
| p07975    | 1.44 Drive   | C00005   | Ravi |          5 |
+-----------+--------------+----------+------+------------+
   
    create or replace view 091122_2_F as
    select Pm.Productno ,Pm.Description,Cm.Clientno,Cm.name,SOD.QTYORDERED 
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
          where pm.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = cm.Clientno
             and (Cm.name = "Ivan" or Cm.name = "Mamta");

    select * from 091122_2_F;
+-----------+--------------+----------+------+------------+
| Productno | Description  | Clientno | name | QTYORDERED |
+-----------+--------------+----------+------+------------+
| p00001    | 1.44floppies | C00001   | Ivan |          4 |
| p07965    | 540 HDD      | C00001   | Ivan |          2 |
| p07885    | CD Drive     | C00001   | Ivan |          2 |
| p03453    | monitors     | C00001   | Ivan |          2 |
| p06734    | mouse        | C00001   | Ivan |          1 |
+-----------+--------------+----------+------+------------+


-- G.Find the products and their quantities for the orders placed by  ClientNo 'C00001' and 'C00002'.
    create or replace view 091122_2_G as
    select Pm.Productno ,Pm.Description,Cm.Clientno,Cm.name,SOD.QTYORDERED 
       from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
          where pm.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = cm.Clientno
             and (Cm.clientno = "C00001" or Cm.clientno = "C00002");

    select * from 091122_2_G;
+-----------+--------------+----------+---------+------------+
| Productno | Description  | Clientno | name    | QTYORDERED |
+-----------+--------------+----------+---------+------------+
| p00001    | 1.44floppies | C00001   | Ivan    |          4 |
| p07965    | 540 HDD      | C00001   | Ivan    |          2 |
| p07885    | CD Drive     | C00001   | Ivan    |          2 |
| p03453    | monitors     | C00001   | Ivan    |          2 |
| p06734    | mouse        | C00001   | Ivan    |          1 |
| p00001    | 1.44floppies | C00002   | Vandana |         10 |
+-----------+--------------+----------+---------+------------+



-- 3.Exercises On Sub_Queries :
-- A.Find the productno, and description of non-moving products i.e product not being sold.
    create  or replace view 091122_3_A as
    select productno,description
       from product_master
          where productno not in (select PRODUCTNO from SALES_ORDER_DETAILS );

    select * from 091122_3_A;
+-----------+---------------+
| productno | description   |
+-----------+---------------+
| p07865    | 1.22 floppies |
| p08865    | 1.22 Drive    |
+-----------+---------------+


-- B.List the customers name , Address1 ,Address2 , City , PinCode for the client who placed orderno = "019001".
    create or replace view 091122_3_B as
    select clientno,Name,city,pincode,state
       from client_master
          where clientno not in (select CLIENTNO from SALES_ORDER where orderno = "019001");

    select * from 091122_3_B;
+----------+---------+----------+---------+-------------+
| clientno | Name    | city     | pincode | state       |
+----------+---------+----------+---------+-------------+
| C00002   | Vandana | Madras   |  780001 | Tamilnadu   |
| C00003   | Pramada | Bombay   |  400057 | Maharashtra |
| C00004   | Basu    | Bombay   |  400056 | Maharashtra |
| C00005   | Ravi    | Banglore |  100001 |             |
| C00006   | Rukmini | Bombay   |  400050 | Maharashtra |
+----------+---------+----------+---------+-------------+
    
    create or replace view 091122_3_B as
    select clientno,Name,city,pincode,state
       from client_master
          where clientno not in (select CLIENTNO from SALES_ORDER where orderno = "C00001");

    select * from 091122_3_B;         
+----------+---------+--------+---------+-------------+
| clientno | Name    | city   | pincode | state       |
+----------+---------+--------+---------+-------------+
| C00006   | Rukmini | Bombay |  400050 | Maharashtra |
+----------+---------+--------+---------+-------------+


-- C.List the client names that have placed orders before the month of may'02.
    create or replace view 091122_3_C as
    select clientno,Name
       from client_master
          where clientno in (select Clientno from SALES_ORDER where ORDERDATE < "2022-10-14");

    select * from 091122_3_C;
+----------+---------+
| clientno | Name    |
+----------+---------+
| C00001   | Ivan    |
| C00002   | Vandana |
| C00003   | Pramada |
| C00004   | Basu    |
| C00005   | Ravi    |
+----------+---------+


-- D.List if the product "Lycra Top" has been ordered by any client and print clientno,name to whom it was sold.
    create or replace view 091122_3_D as
    select clientno,Name
       from client_master
          where clientno in (select clientno from SALES_ORDER where orderno in (select orderno from SALES_ORDER_DETAILS where productno in  (select Productno from product_master where description = "1.44floppies")));

    select * from 091122_3_D;
+----------+---------+
| clientno | Name    |
+----------+---------+
| C00001   | Ivan    |
| C00002   | Vandana |
| C00003   | Pramada |
| C00005   | Ravi    |
+----------+---------+


-- E.List the names of client who have placed orders wroth Rs. 10000 or more.
    create or replace view 091122_3_E as
    select clientno,name
       from client_master
          where clientno in (select clientno from SALES_ORDER where orderno in (select orderno from SALES_ORDER_DETAILS where productno in  (select Productno from product_master where Sellprice >= 10000)));

    
    select * from 091122_3_E;
+----------+---------+
| clientno | name    |
+----------+---------+
| C00001   | Ivan    |
| C00003   | Pramada |
+----------+---------+