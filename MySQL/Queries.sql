 open mysql shell => cli => Command Line Interface

1.\sql											[\\switching to sql mode]
2.\connect root@localhost:3309					[\\your ac]
3.admin@123									[\\password]
4.Y/N											[your pc work (Y) and other pc work (N)]
5.show databases;								[pc in show all databases list]	
6.create database name;							[create  new databases]
7.show databases;								[pc in show all databases list]
8.use databasesname;							[use your select databases]
9.show tables;									[pc in show all tables list]
10.create table table_name(colname datatype, . , . , . , .);	[create new table and columns]
11.insert into table_name values(. , . , .),(. , . , .),(. , . , .);	[insert data in table]
12.select * from table_name;						[show table]
13.describe table_name;							[structur table]
14.\quit										[exit sql]




 use skilldemo
 select * from table_name;
 select col1,col2 from table_name;
 select *, col from table_name;
 select name 'alias_name' from table_name;     --valid
 select name as 'alias_name' from table_name;    --valid
 desc table_name;     or      describe  table_name;

WHERE CLUESE
 select name from client_master where name='Ivan';

 select name,city from client_master where baldue<1000;

 select name,city from client_master where baldue>1000;

 select name,city from client_master where baldue>1000 and city!='Bombay';



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


**drop table client_master;
**drop table salesman_master;
**drop table product_master;