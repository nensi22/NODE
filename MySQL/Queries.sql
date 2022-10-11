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
 select * from client_master;
 select name,city from client_master;
 select *, name from client_master;
 select name 'client_name' from client_master;     --valid
 select name as 'client_name' from client_master;    --valid
 desc client_master;     or      describe  client_master;

where cluese

 select name from client_master
    -> where name='Ivan';

select name,city from client_master
    -> where baldue<1000;

select name,city from client_master
    -> where baldue>1000;

 select name,city from client_master
    -> where baldue>1000 and city!='Bombay';