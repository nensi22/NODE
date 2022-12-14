-- CREATE TABLE MANUFACTURERS(
--     Code INT,
--     Name text,
--     CONSTRAINT pk_Category PRIMARY KEY(Code)
-- );

-- INSERT INTO MANUFACTURERS VALUES(1,'sony');
-- INSERT INTO MANUFACTURERS VALUES(2,'Creative Labs');
-- INSERT INTO MANUFACTURERS VALUES(3,'Hewlwtt-packard');
-- INSERT INTO MANUFACTURERS VALUES(4,'Lomega');
-- INSERT INTO MANUFACTURERS VALUES(5,'Fujitsu');
-- INSERT INTO MANUFACTURERS VALUES(6,'winchester');

+------+-----------------+
| Code | Name            |
+------+-----------------+
|    1 | sony            |
|    2 | Creative Labs   |
|    3 | Hewlwtt-packard |
|    4 | Lomega          |
|    5 | Fujitsu         |
|    6 | winchester      |
+------+-----------------+


-- CREATE TABLE PRODUCTS(
--     Code INT ,
--     Name text ,
--     Price Real ,
--     Manufacturers int ,
--     CONSTRAINT pk_Category PRIMARY KEY(Code) ,
--     CONSTRAINT fk_products FOREIGN KEY(Manufacturers) references MANUFACTURERS(Code)
-- );

-- INSERT INTO PRODUCTS VALUES(1,'Hard drive',240,5);
-- INSERT INTO PRODUCTS VALUES(2,'Memory',120,6);
-- INSERT INTO PRODUCTS VALUES(3,'ZIP drive',150,4);
-- INSERT INTO PRODUCTS VALUES(4,'Floopy disk',5,6);
-- INSERT INTO PRODUCTS VALUES(5,'Monitor',240,1);
-- INSERT INTO PRODUCTS VALUES(6,'DVD drive',180,2);
-- INSERT INTO PRODUCTS VALUES(7,'CD drive',90,2);
-- INSERT INTO PRODUCTS VALUES(8,'Printer',270,3);
-- INSERT INTO PRODUCTS VALUES(9,'Toner cartridge',66,3);
-- INSERT INTO PRODUCTS VALUES(10,'DVD burner',180,2);

+------+-----------------+-------+---------------+
| Code | Name            | Price | Manufacturers |
+------+-----------------+-------+---------------+
|    1 | Hard drive      |   240 |             5 |
|    2 | Memory          |   120 |             6 |
|    3 | ZIP drive       |   150 |             4 |
|    4 | Floopy disk     |     5 |             6 |
|    5 | Monitor         |   240 |             1 |
|    6 | DVD drive       |   180 |             2 |
|    7 | CD drive        |    90 |             2 |
|    8 | printer         |   270 |             3 |
|    9 | Toner cartridge |    66 |             3 |
|   10 | DVD burner      |   180 |             2 |
+------+-----------------+-------+---------------+

