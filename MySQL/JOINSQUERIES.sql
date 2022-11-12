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
| productno | description  | sum(sos.qtydisp) |
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
    select cm.clientno,cm.name,avg(sod.qtydisp)
       from SALES_ORDER_DETAILS  sod,CLIENT_MASTER  cm,SALES_ORDER so
          where cm.clientno=so.clientno and so.orderno=sod.orderno
             group by cm.clientno
                having max(sod.QTYOREDERD * sod.productrate)>15000;
                    having max(sod.QTYORDERED * sod.productrate)>15000;
+----------+---------+------------------+
| clientno | name    | avg(sod.qtydisp) |
+----------+---------+------------------+
| C00001   | Ivan    |           1.8000 |
| C00003   | Pramada |           4.6667 |
+----------+---------+------------------+

    select cm.clientno,cm.name,avg(sod.qtydisp),max(sod.QTYORDERED*sod.PRODUCTRATE)
       from SALES_ORDER_DETAILS  sod,CLIENT_MASTER  cm,SALES_ORDER so
          where cm.clientno=so.clientno and so.orderno=sod.orderno
             group by cm.clientno
                having max(sod.QTYOREDERD * sod.productrate)>15000;
+----------+---------+------------------+-------------------------------------+
| clientno | name    | avg(sod.qtydisp) | max(sod.QTYORDERED*sod.PRODUCTRATE) |
+----------+---------+------------------+-------------------------------------+
| C00001   | Ivan    |           1.8000 |                            16800.00 |
| C00003   | Pramada |           4.6667 |                            15750.00 |
+----------+---------+------------------+-------------------------------------+


-- D. Find out the total of all the billed orders for the month of june.
     select clientno,SALESMANNO,BILLYN,DELYDATE,ORDERSTATUS
        from  SALES_ORDER
           where BILLYN="Y" and month(ORDERDATE)=10;
+----------+------------+--------+------------+-------------+
| clientno | SALESMANNO | BILLYN | DELYDATE   | ORDERSTATUS |
+----------+------------+--------+------------+-------------+
| C00001   | S00001     | Y      | 2007-12-02 | Fulfilled   |
| C00003   | S00003     | Y      | 2020-09-02 | Fulfilled   |
+----------+------------+--------+------------+-------------+

     select so.ORDERDATE,sum(sod.QTYORDERED) 
        from  client_master cm , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master pm
           where pm.productno=sod.productno 
              and so.orderno=sod.orderno 
                 and so.Clientno = cm.Clientno
                    and 10=(MONTH(so.ORDERDATE))
                       group by so.ORDERDATE;
+------------+---------------------+
| ORDERDATE  | sum(sod.QTYORDERED) |
+------------+---------------------+
| 2022-10-12 |                  54 |
+------------+---------------------+


--2.EXERCISE ON JOIN AND CORRELATION:
-- A.Find out the products , which have been sold to "Ivan Bayross". 
    select  cm.Clientno,cm.Name,sod.orderno,sod.PRODUCTNO,pm.Description
       from SALES_ORDER_DETAILS sod,product_master pm, SALES_ORDER so,CLIENT_MASTER cm
          where pm.productno=sod.productno
            and so.ORDERNO=sod.ORDERNO
               and cm.CLIENTNO=so.CLIENTNO
                  and cm.name="Ivan";
+----------+------+---------+-----------+--------------+
| Clientno | Name | orderno | PRODUCTNO | Description  |
+----------+------+---------+-----------+--------------+
| C00001   | Ivan | 019001  | P00001    | 1.44floppies |
| C00001   | Ivan | 019001  | P07965    | 540 HDD      |
| C00001   | Ivan | 019001  | P07885    | CD Drive     |
| C00001   | Ivan | 019003  | P03453    | monitors     |
| C00001   | Ivan | 019003  | P06734    | mouse        |
+----------+------+---------+-----------+--------------+

    select client_master.Clientno,client_master.Name,SALES_ORDER_DETAILS.orderno,SALES_ORDER_DETAILS.PRODUCTNO
       from  ((client_master 
          inner join SALES_ORDER on  client_master.Clientno= SALES_ORDER.Clientno)
          inner join SALES_ORDER_DETAILS on SALES_ORDER.ORDERNO = SALES_ORDER_DETAILS.ORDERNO)
             where client_master.name =  "Ivan"  ; 
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
    select product_master.productno,product_master.Description ,SALES_ORDER_DETAILS.QTYORDERED,SALES_ORDER_DETAILS.QTYDISP,sales_order.DELYDATE 
       from  ((product_master 
          inner join SALES_ORDER_DETAILS on product_master.productno=SALES_ORDER_DETAILS.PRODUCTNO)
          inner join sales_order on SALES_ORDER.orderno=SALES_ORDER_DETAILS.orderno)
             where 10=(MONTH(DELYDATE)) ;
+-----------+--------------+------------+---------+------------+
| productno | Description  | QTYORDERED | QTYDISP | DELYDATE   |
+-----------+--------------+------------+---------+------------+
| p00001    | 1.44floppies |          4 |       4 | 2020-10-02 |
| p07965    | 540 HDD      |          2 |       1 | 2020-10-02 |
| p07885    | CD Drive     |          2 |       1 | 2020-10-02 |
+-----------+--------------+------------+---------+------------+

    select product_master.productno,product_master.Description ,SALES_ORDER_DETAILS.QTYORDERED,SALES_ORDER_DETAILS.QTYDISP,sales_order.DELYDATE 
       from  ((product_master 
          inner join SALES_ORDER_DETAILS on product_master.productno=SALES_ORDER_DETAILS.PRODUCTNO)
          inner join sales_order on SALES_ORDER.orderno=SALES_ORDER_DETAILS.orderno)
             where MONTH(CURDATE())=(MONTH(DELYDATE)) ; 
Empty set (0.00 sec)

-- C.List the productNo and description of constantly sold (i.e..rapidly moving)products.
    select product_master.productno,product_master.Description,SALES_ORDER_DETAILS.QTYORDERED
       from product_master
          inner join SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno
              where SALES_ORDER_DETAILS.QTYORDERED =(select max(QTYORDERED) from SALES_ORDER_DETAILS); 
+-----------+--------------+------------+
| productno | Description  | QTYORDERED |
+-----------+--------------+------------+
| p00001    | 1.44floppies |         10 |
| p00001    | 1.44floppies |         10 |
| p00001    | 1.44floppies |         10 |
+-----------+--------------+------------+


-- D.Find the names of clients who have purchased 'Trousery'.
    select client_master.name 
       from (((client_master
          inner join sales_order on  sales_order.Clientno = client_master.Clientno )
          inner join SALES_ORDER_DETAILS on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
          inner join product_master on product_master.productno = SALES_ORDER_DETAILS.productno)
             where product_master.description = "Trousery";
Empty set (0.00 sec)

    select client_master.name ,product_master.productno
       from (((product_master
          inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
          inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
          inner join client_master on  sales_order.Clientno = client_master.Clientno )
             where product_master.description = "Trousery";
Empty set (0.00 sec)

    select c.Name,p.productno
       from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
          where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
             and p.description = "Trousery"; 
Empty set (0.00 sec)


-- E.list the products and orders from customers who have ordered less then 5 units of 'Pull Overs'.
    select product_master.Productno ,product_master.Description,client_master.Clientno,client_master.name,SALES_ORDER_DETAILS.QTYORDERED as "Pull Over"
       from (((product_master
          inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
          inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
          inner join client_master on  sales_order.Clientno = client_master.Clientno )
             where SALES_ORDER_DETAILS.QTYORDERED<5;
+-----------+--------------+----------+---------+-----------+
| Productno | Description  | Clientno | name    | Pull Over |
+-----------+--------------+----------+---------+-----------+
| p00001    | 1.44floppies | C00001   | Ivan    |         4 |
| p07965    | 540 HDD      | C00001   | Ivan    |         2 |
| p07885    | CD Drive     | C00001   | Ivan    |         2 |
| p07868    | keyboards    | C00003   | Pramada |         3 |
| p07885    | CD Drive     | C00003   | Pramada |         3 |
| p03453    | monitors     | C00001   | Ivan    |         2 |
| p06734    | mouse        | C00001   | Ivan    |         1 |
| p07965    | 540 HDD      | C00004   | Basu    |         1 |
| p07975    | 1.44 Drive   | C00004   | Basu    |         1 |
+-----------+--------------+----------+---------+-----------+


-- F.Find the products and their quantities for the orders placed by 'Ivan Bayross' and 'Mamta Muzumdar'.
    select product_master.Productno ,product_master.Description,client_master.Clientno,client_master.name,SALES_ORDER_DETAILS.QTYORDERED 
       from (((product_master
          inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
          inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
          inner join client_master on  sales_order.Clientno = client_master.Clientno )
             where client_master.name = "Ivan" or client_master.name = "Mamta";
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
    select product_master.Productno ,product_master.Description,client_master.Clientno,client_master.name,SALES_ORDER_DETAILS.QTYORDERED 
       from (((product_master
          inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
          inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
          inner join client_master on  sales_order.Clientno = client_master.Clientno )
             where client_master.clientno = "C00001" or client_master.clientno = "C00002";
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



-- B.List the customers name , Address1 ,Address2 , City , PinCode for the client who placed orderno = "019001".


-- C.List the client names that have placed orders before the month of may'02.


-- D.List if the product "Lycra Top" has been ordered by any client and print clientno,name to whom it was sold.


-- E.List the names of client who have placed orders wroth Rs. 10000 or more.


