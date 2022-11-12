DATE:11/10/2022

* EXERCISE ON RETRIEVING RECORDS FROM A TABLE
--[A] Find out the names of all the clients.
        select name from client_master;  
+---------+
| name    |
+---------+
| Ivan    |
| Vandana |
| Pramada |
| Basu    |
| Ravi    |
| Rukmini |
+---------+


--[B] Retrive the entire contents of the client_master table.
        select * from client_master;
+----------+---------+--------+---------+-------------+--------+---------------+
| Clientno | Name    | city   | pincode | state       | baldue | Address       |
+----------+---------+--------+---------+-------------+--------+---------------+
| C00001   | Ivan    | Bombay |  400054 | Maharashtra |  15000 | Gokuldham so. |
| C00002   | Vandana | Madras |  780001 | Tamilnadu   |      0 | Powder gali   |
| C00003   | Pramada | Bombay |  400057 | Maharashtra |   5000 | Gokuldham so. |
| C00004   | Basu    | Bombay |  400056 | Maharashtra |      0 | Gokuldham so. |
| C00005   | Ravi    | Delhi  |  100001 |             |   2000 | Gokuldham so. |
| C00006   | Rukmini | Bombay |  400050 | Maharashtra |      0 | Gokuldham so. |
+----------+---------+--------+---------+-------------+--------+---------------+


--[C] Retrive the list of names ,city the state of the all clients.
        select name,city,state from client_master;
+---------+--------+-------------+
| name    | city   | state       |
+---------+--------+-------------+
| Ivan    | Bombay | Maharashtra |
| Vandana | Madras | Tamilnadu   |
| Pramada | Bombay | Maharashtra |
| Basu    | Bombay | Maharashtra |
| Ravi    | Delhi  |             |
| Rukmini | Bombay | Maharashtra |
+---------+--------+-------------+


--[D] List the various products available from the Product_Master table.
        select description from product_master;
+---------------+
| description   |
+---------------+
| 1.44floppies  |
| monitors      |
| mouse         |
| 1.22 floppies |
| keyboards     |
| CD Drive      |
| 540 HDD       |
| 1.44 Drive    |
| 1.22 Drive    |
+---------------+


--[E] List all clients who are located in Mumbai.
        select name,city from client_master where city='Bombay';
+---------+--------+
| name    | city   |
+---------+--------+
| Ivan    | Bombay |
| Pramada | Bombay |
| Basu    | Bombay |
| Rukmini | Bombay |
+---------+--------+


--[F] Find the names of salesman who have a salary equal to Rs.3000.
        select salesmanname from  salesman_master where salamt='3000';
+--------------+
| salesmanname |
+--------------+
| Kiran        |
| Manish       |
| Ravi         |
+--------------+


* EXERCISE ON UPDATING RECORDS IN A TABLE
--[A] Change the city of ClientNo'C00005' to 'Bangalore'.
        update client_master set city='Banglore' where clientno='C00005';   
        select * from client_master;
+----------+---------+----------+---------+-------------+--------+---------------+
| Clientno | Name    | city     | pincode | state       | baldue | Address       |
+----------+---------+----------+---------+-------------+--------+---------------+
| C00001   | Ivan    | Bombay   |  400054 | Maharashtra |  15000 | Gokuldham so. |
| C00002   | Vandana | Madras   |  780001 | Tamilnadu   |      0 | Powder gali   |
| C00003   | Pramada | Bombay   |  400057 | Maharashtra |   5000 | Gokuldham so. |
| C00004   | Basu    | Bombay   |  400056 | Maharashtra |      0 | Gokuldham so. |
| C00005   | Ravi    | Banglore |  100001 |             |   2000 | Gokuldham so. |
| C00006   | Rukmini | Bombay   |  400050 | Maharashtra |      0 | Gokuldham so. |
+----------+---------+----------+---------+-------------+--------+---------------+


--[B] Change the BalDue of ClientNo'C00001' to Rs.1000.
        update client_master set baldue='1000' where clientno='C00001';
        select * from client_master;
+----------+---------+----------+---------+-------------+--------+---------------+
| Clientno | Name    | city     | pincode | state       | baldue | Address       |
+----------+---------+----------+---------+-------------+--------+---------------+
| C00001   | Ivan    | Bombay   |  400054 | Maharashtra |   1000 | Gokuldham so. |
| C00002   | Vandana | Madras   |  780001 | Tamilnadu   |      0 | Powder gali   |
| C00003   | Pramada | Bombay   |  400057 | Maharashtra |   5000 | Gokuldham so. |
| C00004   | Basu    | Bombay   |  400056 | Maharashtra |      0 | Gokuldham so. |
| C00005   | Ravi    | Banglore |  100001 |             |   2000 | Gokuldham so. |
| C00006   | Rukmini | Bombay   |  400050 | Maharashtra |      0 | Gokuldham so. |
+----------+---------+----------+---------+-------------+--------+---------------+


*drop table client_master;
*drop table salesman_master;
*drop table product_master;

