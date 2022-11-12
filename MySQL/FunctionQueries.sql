18/10/22

QUERIES:-

-- [a] List the name of all client having 'a' as the second letter in their names.
    select * from client_master 
       where name like '_a%';
+----------+---------+----------+---------+-------------+--------+---------------+
| Clientno | Name    | city     | pincode | state       | baldue | Address       |
+----------+---------+----------+---------+-------------+--------+---------------+
| C00002   | Vandana | Madras   |  780001 | Tamilnadu   |      0 | Powder gali   |
| C00004   | Basu    | Bombay   |  400056 | Maharashtra |      0 | Gokuldham so. |
| C00005   | Ravi    | Banglore |  100001 |             |   2000 | Gokuldham so. |
+----------+---------+----------+---------+-------------+--------+---------------+


-- [b] list the clients who stays in a city whose first letter is 'M'.
    select * from client_master 
       where city like 'm%';
+----------+---------+--------+---------+-----------+--------+-------------+
| Clientno | Name    | city   | pincode | state     | baldue | Address     |
+----------+---------+--------+---------+-----------+--------+-------------+
| C00002   | Vandana | Madras |  780001 | Tamilnadu |      0 | Powder gali |
+----------+---------+--------+---------+-----------+--------+-------------+


-- [c] list the client who stay in 'bangalore' or 'Mangalore'.   
    select * from client_master 
       where city="Bangalore" or "Mangalore";

Empty set, 1 warning (0.00 sec)


-- [d] list all client whose baldue is greater than value 10000.
    select * from client_master 
       where baldue>10000;


-- [e] list the all information from the sales_order table for orders placed in the month of june.
    select * from sales_order 
       where month(DELYDATE)=10;

Empty set (0.00 sec)


-- [f] list the order information for ClientNo 'C00001' and 'C00002'.
    select * from SALES_ORDER 
       where CLIENTNO="C00001" or CLIENTNO="C00002";
+---------+----------+------------+-------------+------------+----------+--------+------------+-------------+
| ORDERNO | CLIENTNO | ORDERDATE  | DELYADDR    | SALESMANNO | DALYTYPE | BILLYN | DELYDATE   | ORDERSTATUS |
+---------+----------+------------+-------------+------------+----------+--------+------------+-------------+
| 019001  | C00001   | 2022-10-12 | A-2 malhar  | S00001     | F        | N      | 2020-10-02 | In Process  |
| 019003  | C00001   | 2022-10-12 | D-35 delhi  | S00001     | F        | Y      | 2007-12-02 | Fulfilled   |
| 019002  | C00002   | 2022-10-12 | B-34 Bombay | S00002     | P        | N      | 2027-12-02 | Cancelled   |
+---------+----------+------------+-------------+------------+----------+--------+------------+-------------+


-- [g] list products whose selling price is greater than 500 and less than or equal to 750.
    select * from product_master 
       where sellprice>500 and sellprice<=750;
+-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
| productno | description   | profitpercent | unitmeasured | qtyonhand | recorderlvl | sellprice | costprice | new_price |
+-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
| p00001    | 1.44floppies  |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
| p06734    | mouse         |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
| p07865    | 1.22 floppies |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
+-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+


-- [h] list products whose selling price is more than 500. Calculate a new selling price as, original selling price*.15.Rename the new column in the output of the above query as new-price.
    alter table product_master add column new_price INT;
       update product_master set new_price=((sellprice*0.15)+sellprice);

        select * from product_master;
+-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
| productno | description   | profitpercent | unitmeasured | qtyonhand | recorderlvl | sellprice | costprice | new_price |
+-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
| p00001    | 1.44floppies  |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
| p03453    | monitors      |          6.00 | piece        |        10 |           3 |     12000 |     11200 |     13800 |
| p06734    | mouse         |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
| p07865    | 1.22 floppies |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
| p07868    | keyboards     |          2.00 | piece        |        10 |           3 |      3150 |      3050 |      3623 |
| p07885    | CD Drive      |          2.50 | piece        |        10 |           3 |      5250 |      5100 |      6038 |
| p07965    | 540 HDD       |          4.00 | piece        |        10 |           3 |      8400 |      8000 |      9660 |
| p07975    | 1.44 Drive    |          5.00 | piece        |        10 |           3 |      1050 |      1000 |      1208 |
| p08865    | 1.22 Drive    |          5.00 | piece        |         2 |           3 |      1050 |      1000 |      1208 |
+-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+

-- [i] list the names,city and state of client who are not in the state of 'Maharashtra'.
    select name,city,state 
       from client_master where state<>"Maharashtra";
+---------+----------+-----------+
| name    | city     | state     |
+---------+----------+-----------+
| Vandana | Madras   | Tamilnadu |
| Ravi    | Banglore |           |
+---------+----------+-----------+


-- [j] count the total number of orders.
    select count(orderno) from sales_order;
+----------------+
| count(orderno) |
+----------------+
|              6 |
+----------------+

-- [k] calculate the average of all products.
    select AVG(sellprice) from product_master;
+----------------+
| AVG(sellprice) |
+----------------+
|      3608.3333 |
+----------------+


-- [l] Determind the maximum and minimum products price.Rename the output as max_price and min_price respectively
    select max(sellprice) as Max_price ,min(sellprice) as min_price 
       from product_master;
+-----------+-----------+
| Max_price | min_price |
+-----------+-----------+
|     12000 |       525 |
+-----------+-----------+


-- [m] count the number of products having price less than or equal to 500.
    select count(sellprice) 
       from product_master where sellprice<=500;
+------------------+
| count(sellprice) |
+------------------+
|                0 |
+------------------+


-- [n] list all the products whose QtyOnHand is less than reorder level.
    select * from product_master 
        where qtyonhand<recorderlvl;
+-----------+-------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
| productno | description | profitpercent | unitmeasured | qtyonhand | recorderlvl | sellprice | costprice | new_price |
+-----------+-------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
| p08865    | 1.22 Drive  |          5.00 | piece        |         2 |           3 |      1050 |      1000 |      1208 |
+-----------+-------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+

