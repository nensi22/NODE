DATE:11/10/2022
* EXERCISE ON RETRIEVING RECORDS FROM A TABLE
    --[A] Find out the names of all the clients.
        select name from client_master;  
    --[B] Retrive the entire contents of the client_master table.
        select * from client_master;
    --[C] Retrive the list of names ,city the state of the all clients.
        select name,city,state from client_master;
    --[D] List the various products available from the Product_Master table.
        select description from product_master;
    --[E] List all clients who are located in Mumbai.
        select name,city from client_master where city='Bombay';
    --[F] Find the names of salesman who have a salary equal to Rs.3000.
        select name from  salesman_master where salamt='3000';

* EXERCISE ON UPDATING RECORDS IN A TABLE
    --[A] Change the city of ClientNo'C00005' to 'Bangalore'.
        update client_master set city='Banglore' where clientno='C00005';   
        select * from client_master;
    --[B] Change the BalDue of ClientNo'C00001' to Rs.1000.
        update client_master set baldue='1000' where clientno='C00001';
        select * from client_master;

*drop table client_master;
*drop table salesman_master;
*drop table product_master;