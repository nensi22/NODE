08/11/22

REVISE QUERIES :-

-- 1.1 Select the names of all the products in the store.
        select name from products;
+-----------------+
| name            |
+-----------------+
| Hard Drive      |
| Memory          |
| Zip drive       |
| Floppy disk     |
| Monitor         |
| DVD drive       |
| CD drive        |
| Printer         |
| Toner cartridge |
| DVD burner      |
+-----------------+




-- 1.2 Select the names and the prices of all the products in the store.
        select name,price from products;
+-----------------+-------+
| name            | price |
+-----------------+-------+
| Hard Drive      |   240 |
| Memory          |   120 |
| Zip drive       |   150 |
| Floppy disk     |     5 |
| Monitor         |   240 |
| DVD drive       |   180 |
| CD drive        |    90 |
| Printer         |   270 |
| Toner cartridge |    66 |
| DVD burner      |   180 |
+-----------------+-------+


-- 1.3 Select the name of the products with a price less than or equal to $200.
        select name from products where price<=200;
+-----------------+-------+
| name            | price |
+-----------------+-------+
| Memory          |   120 |
| Zip drive       |   150 |
| Floppy disk     |     5 |
| DVD drive       |   180 |
| CD drive        |    90 |
| Toner cartridge |    66 |
| DVD burner      |   180 |
+-----------------+-------+

-- 1.4 Select all the products with a price between $60 and $120.
        select * from products where price between 60 and 120;
+------+-----------------+-------+--------------+
| Code | NAME            | Price | Manufacturer |
+------+-----------------+-------+--------------+
|    2 | Memory          |   120 |            6 |
|    7 | CD drive        |    90 |            2 |
|    9 | Toner cartridge |    66 |            3 |
+------+-----------------+-------+--------------+



-- 1.5 Select the name and price in cents (i.e., the price must be multiplied by 100).
        alter table products add column cents real;
           update products set cents=price*100;

        select name,price*100 "Cents" from products;
+-----------------+--------+
| name            | Cents  |
+-----------------+--------+
| Hard Drive      |  24000 |
| Memory          |  12000 |
| Zip drive       |  15000 |
| Floppy disk     |    500 |
| Monitor         |  24000 |
| DVD drive       |  18000 |
| CD drive        |   9000 |
| Printer         |  27000 |
| Toner cartridge |   6600 |
| DVD burner      |  18000 |
+-----------------+--------+



-- 1.6 Compute the average price of all the products.
        select avg(price) from products;
+------------+
| avg(Price) |
+------------+
|      154.1 |
+------------+


-- 1.7 Compute the average price of all products with manufacturer code equal to 2.
        select avg(price) from products 
           where manufacturers=2;
+------------+
| avg(Price) |
+------------+
|        150 |
+------------+
 

-- 1.8 Compute the number of products with a price larger than or equal to $180.
        select count(name) from products 
           where price>=180;
+-------------+
| count(name) |
+-------------+
|           5 |
+-------------+


-- 1.9 Select the name and price of all products with a price larger than or equal to $180, and sort first by price (in descending order), and then by name (in ascending order).
        select name,price from products 
           where price>=180 order by price ;
+------------+-------+
| name       | price |
+------------+-------+
| DVD drive  |   180 |
| DVD burner |   180 |
| Hard Drive |   240 |
| Monitor    |   240 |
| Printer    |   270 |
+------------+-------+

      select name,price from products where price>=180 order by price desc;
+------------+-------+
| name       | price |
+------------+-------+
| Printer    |   270 |
| Hard Drive |   240 |
| Monitor    |   240 |
| DVD drive  |   180 |
| DVD burner |   180 |
+------------+-------+


-- 1.10 Select all the data from the products, including all the data for each product's manufacturer.
        select * from products
           inner join manufacturers
              on products.manufacturers = manufacturers.code;
+------+-----------------+-------+--------------+-------+------+-----------------+
| Code | NAME            | Price | Manufacturer | Cents | Code | NAME            |
+------+-----------------+-------+--------------+-------+------+-----------------+
|    1 | Hard Drive      | 194.4 |            5 | 24000 |    5 | Fujitsu         |
|    2 | Memory          |   108 |            6 | 12000 |    6 | winchester      |
|    3 | Zip drive       | 121.5 |            4 | 15000 |    4 | Lomega          |
|    4 | Floppy disk     |   4.5 |            6 |   500 |    6 | winchester      |
|    5 | Monitor         | 194.4 |            1 | 24000 |    1 | Sony            |
|    6 | DVD drive       | 145.8 |            2 | 18000 |    2 | Creative Labs   |
|    7 | CD drive        |    81 |            2 |  9000 |    2 | Creative Labs   |
|    8 | laser-Printer   | 218.7 |            3 | 27000 |    3 | Hewlett-Packard |
|    9 | Toner cartridge |  59.4 |            3 |  6600 |    3 | Hewlett-Packard |
|   10 | DVD burner      | 145.8 |            2 | 18000 |    2 | Creative Labs   |
|   11 | Loudspeakers    |    63 |            2 |   700 |    2 | Creative Labs   |
+------+-----------------+-------+--------------+-------+------+-----------------+


-- 1.11 Select the product name, price, and manufacturer name of all the products.
        select  products.code,products.name, products.price,manufacturers.name
           from products
              inner join manufacturers
                 ON Products.Manufacturers = Manufacturers.Code;
+------+-----------------+-----------------+-------+
| code | name            | name            | price |
+------+-----------------+-----------------+-------+
|    1 | Hard Drive      | Fujitsu         | 194.4 |
|    2 | Memory          | winchester      |   108 |
|    3 | Zip drive       | Lomega          | 121.5 |
|    4 | Floppy disk     | winchester      |   4.5 |
|    5 | Monitor         | Sony            | 194.4 |
|    6 | DVD drive       | Creative Labs   | 145.8 |
|    7 | CD drive        | Creative Labs   |    81 |
|    8 | laser-Printer   | Hewlett-Packard | 218.7 |
|    9 | Toner cartridge | Hewlett-Packard |  59.4 |
|   10 | DVD burner      | Creative Labs   | 145.8 |
|   11 | Loudspeakers    | Creative Labs   |    63 |
+------+-----------------+-----------------+-------+


-- 1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.
        select avg(price),b.code
           from products a,manufacturers b
              where b.code=a.manufacturers
                 group by b.code;
+--------------------+------+
| avg(price)         | code |
+--------------------+------+
|              194.4 |    1 |
|              108.9 |    2 |
| 139.04999999999998 |    3 |
|              121.5 |    4 |
|              194.4 |    5 |
|              56.25 |    6 |
+--------------------+------+


-- 1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.
        select avg(price),b.name
           from products a,manufacturers b
              where b.code=a.manufacturers
                 group by b.name;
+--------------------+-----------------+
| avg(price)         | name            |
+--------------------+-----------------+
|              194.4 | sony            |
|              108.9 | Creative Labs   |
| 139.04999999999998 | Hewlwtt-packard |
|              121.5 | Lomega          |
|              194.4 | Fujitsu         |
|              56.25 | winchester      |
+--------------------+-----------------+


-- 1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.
        select avg(price),b.name
           from products a,manufacturers b
              where b.code=a.manufacturers
                 group by b.name
                    having avg(price)>=150;
+------------+---------+
| avg(price) | name    |
+------------+---------+
|      194.4 | Sony    |
|      194.4 | Fujitsu |
+------------+---------+

        select  manufacturers.name
           from  manufacturers
              inner join products
                 on  manufacturers.code=products.manufacturers
                    where price>(SELECT AVG(price) FROM products)or price =150;
+-----------------+
| name            |
+-----------------+
| Fujitsu         |
| sony            |
| Creative Labs   |
| Hewlwtt-packard |
| Creative Labs   |
+-----------------+


-- 1.15 Select the name and price of the cheapest product.
        select name ,price 
           from products  
              order by price 
                 limit 1;
+-------------+-------+
| name        | price |
+-------------+-------+
| Floopy disk |   4.5 |
+-------------+-------+

        select name,price
           from products 
              where price=(select min(price)from products);
+-------------+-------+
| name        | price |
+-------------+-------+
| Floopy disk |   4.5 |
+-------------+-------+

        select a.name,a.price
           from products a,manufacturers b
              where a.manufacturers=b.code
                 and price=(select min(price)from products);
+-------------+-------+
| name        | price |
+-------------+-------+
| Floopy disk |   4.5 |
+-------------+-------+

        select manufacturers.name,products.name,products.price
           from manufacturers
              inner join products
                 on products.manufacturers=manufacturers.code
                    where price=(select min(price)from products);
+------------+-------------+-------+
| name       | name        | price |
+------------+-------------+-------+
| winchester | Floopy disk |   4.5 |
+------------+-------------+-------+


-- 1.16 Select the name of each manufacturer along with the name and price of its most expensive product.
        select  b.name, a.name, a.price
           from products a,manufacturers b
              where b.code=a.manufacturers
                 group by b.name       
                    having price=(SELECT max(price) FROM products);
+-----------------+---------------+-------+
| name            | name          | price |
+-----------------+---------------+-------+
| Hewlwtt-packard | Laser printer | 218.7 |
+-----------------+---------------+-------+


-- 1.17 Add a new product: Loudspeakers, $70, manufacturer 2.
        insert into products values(11,'Loudspeaker',70,2,700)
           select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      |   240 |            5 | 24000 |
|    2 | Memory          |   120 |            6 | 12000 |
|    3 | Zip drive       |   150 |            4 | 15000 |
|    4 | Floppy disk     |     5 |            6 |   500 |
|    5 | Monitor         |   240 |            1 | 24000 |
|    6 | DVD drive       |   180 |            2 | 18000 |
|    7 | CD drive        |    90 |            2 |  9000 |
|    8 | laser-Printer   |   270 |            3 | 27000 |
|    9 | Toner cartridge |    66 |            3 |  6600 |
|   10 | DVD burner      |   180 |            2 | 18000 |
|   11 | Loudspeakers    |    70 |            2 |   700 |
+------+-----------------+-------+--------------+-------+


-- 1.18 Update the name of product 8 to "Laser Printer".
        update products set name='Laser printer' where code=8;
           select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      |   240 |            5 | 24000 |
|    2 | Memory          |   120 |            6 | 12000 |
|    3 | Zip drive       |   150 |            4 | 15000 |
|    4 | Floppy disk     |     5 |            6 |   500 |
|    5 | Monitor         |   240 |            1 | 24000 |
|    6 | DVD drive       |   180 |            2 | 18000 |
|    7 | CD drive        |    90 |            2 |  9000 |
|    8 | laser-Printer   |   270 |            3 | 27000 |
|    9 | Toner cartridge |    66 |            3 |  6600 |
|   10 | DVD burner      |   180 |            2 | 18000 |
|   11 | Loudspeakers    |    70 |            2 |   700 |
+------+-----------------+-------+--------------+-------+


-- 1.19 Apply a 10% discount to all products.
        update products set price=(price-(price*10)/100);
           select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      |   216 |            5 | 24000 |
|    2 | Memory          |   108 |            6 | 12000 |
|    3 | Zip drive       |   135 |            4 | 15000 |
|    4 | Floppy disk     |   4.5 |            6 |   500 |
|    5 | Monitor         |   216 |            1 | 24000 |
|    6 | DVD drive       |   162 |            2 | 18000 |
|    7 | CD drive        |    81 |            2 |  9000 |
|    8 | laser-Printer   |   243 |            3 | 27000 |
|    9 | Toner cartridge |  59.4 |            3 |  6600 |
|   10 | DVD burner      |   162 |            2 | 18000 |
|   11 | Loudspeakers    |    63 |            2 |   700 |
+------+-----------------+-------+--------------+-------+


-- 1.20 Apply a 10% discount to all products with a price larger than or equal to $120.
        update products set price=(price-(price*10)/100) where price>=120;
           select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      |   216 |            5 | 24000 |
|    2 | Memory          |   108 |            6 | 12000 |
|    3 | Zip drive       |   135 |            4 | 15000 |
|    4 | Floppy disk     |   4.5 |            6 |   500 |
|    5 | Monitor         |   216 |            1 | 24000 |
|    6 | DVD drive       |   162 |            2 | 18000 |
|    7 | CD drive        |    81 |            2 |  9000 |
|    8 | laser-Printer   |   243 |            3 | 27000 |
|    9 | Toner cartridge |  59.4 |            3 |  6600 |
|   10 | DVD burner      |   162 |            2 | 18000 |
|   11 | Loudspeakers    |    63 |            2 |   700 |
+------+-----------------+-------+--------------+-------+