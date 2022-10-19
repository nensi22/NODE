18/10/22

QUERIES:-

-- [a] List the name of all client having 'a' as the second letter in their names.
    select * from client_master where name like '_a%';
-- [b] list the clients who stays in a city whose first letter is 'M'.
    select * from client_master where city like 'm%';
-- [c] list the client who stay in 'bangalore' or 'Mangalore'.   
    select * from client_master where city="Bangalore" or "Mangalore";
-- [d] list all client whose baldue is greater than value 10000.
    select * from client_master where baldue>10000;
-- [e] list the all information from the sales_order table for orders placed in the month of june.

-- [f] list the order information for ClientNo 'C00001' and 'C00002'.
    select * from SALES_ORDER where CLIENTNO="C00001" or CLIENTNO="C00002";
-- [g] list products whose selling price is greater than 500 and less than or equal to 750.
    select * from product_master where sellprice>500 and sellprice<=750;
-- [h] list products whose selling price is more than 500. Calculate a new selling price as, original selling price*.15.Rename the new column in the output of the above query as new-price.
    alter table product_master add column new_price INT;
    update product_master set new_price=((sellprice*0.15)+sellprice);
-- [i] list the names,city and state of client who are not in the state of 'Maharashtra'.
    select name,city,state from client_master where state<>"Maharashtra";
-- [j] count the total number of orders.
    select count(orderno) from sales_order;
-- [k] calculate the average of all products.
    select AVG(sellprice) from product_master;
-- [l] Determind the maximum and minimum products price.Rename the output as max_price and min_price respectively
    select max(sellprice) as Max_price ,min(sellprice) as min_price from product_master;
-- [m] count the number of products having price less than or equal to 500.
    select count(sellprice) from product_master where sellprice<=500;
-- [n] list all the products whose QtyOnHand is less than reorder level.
    select * from product_master where qtyonhand<recorderlvl;