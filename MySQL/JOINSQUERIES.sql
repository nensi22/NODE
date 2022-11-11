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

     select SALES_ORDER.ORDERDATE,sum(SALES_ORDER_DETAILS.QTYORDERED)
        from (((product_master
           inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
           inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
           inner join client_master on  sales_order.Clientno = client_master.Clientno )
              where  sales_order.BILLYN="Y"
                 group by SALES_ORDER.ORDERDATE
                    having 10=(MONTH(SALES_ORDER.DELYDATE));

--2.EXERCISE ON JOIN AND CORRELATION:
-- A.Find out the products , which have been sold to "Ivan Bayross". 
    select  cm.Clientno,cm.Name,sod.orderno,sod.PRODUCTNO,pm.Description
       from SALES_ORDER_DETAILS sod,product_master pm, SALES_ORDER so,CLIENT_MASTER cm
          where pm.productno=sod.productno
            and so.ORDERNO=sod.ORDERNO
               and cm.CLIENTNO=so.CLIENTNO
                  and sm.name="Ivan";

-- B.Find out the products and their quantities that will have to delivered in the current month.
-- C.List the productNo and description of constantly sold (i.e..rapidly moving)products.
-- D.Find the names of clients who have purchased 'Trousery'.
-- E.list the products and orders from customers who have ordered less then 5 units of 'Pull Overs'.
-- F.Find the products and their quantities for the orders placed by 'Ivan Bayross' and 'Mamta Muzumdar'.
    select
-- G.Find the products and their quantities for the orders placed by  ClientNo 'C00001' and 'C00002'.