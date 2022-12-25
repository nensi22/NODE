db.createCollection("client_master")
db.client_master.insertMany([
    {Clientno:"C00001",Name:"Ivan",address1:"A/14 worli",city:"Bombay",pincode:400054,state:"Maharashtra",baldue:15000},
    {Clientno:"C00002",Name:"Vandana",address1:"B-23 vesu",city:"Madras",pincode:780001,state:"Tamilnadu",baldue:0},
    {Clientno:"C00003",Name:"Prmada",address1:"65,nariman",city:"Bombay",pincode:400057,state:"Maharashtra",baldue:5000},
    {Clientno:"C00004",Name:"Basu",address1:"p-7 Bandra",city:"Bombay",pincode:400056,state:"Maharashtra",baldue:0},
    {Clientno:"C00005",Name:"Ravi",address1:"C-42 agra",city:"Delhi",pincode:100001,state:"Delhi",baldue:2000},
    {Clientno:"C00006",Name:"Rukmini",address1:"A/5 Juhu",city:"Bombay",pincode:400050,state:"Maharashtra",baldue:0}
]);

db.createCollection("salesman_master")
db.salesman_master.insertMany([
    {salesman_no:"S00001",salesmanname:"Kiran",address:"A/14 worli'",city:"Bombay",pincode:400002,state:"Mah",salamt:3000,tgttoget:100,ytdsale:50,remark:"Good"},
    {salesman_no:"S00002",salesmanname:"Manish",address:"65,nariman",city:"Bombay",pincode:400001,state:"Mah",salamt:3000,tgttoget:200,ytdsale:100,remark:"Good"},
    {salesman_no:"S00003",salesmanname:"Ravi",address:"p-7 Bandra",city:"Bombay",pincode:400032,state:"Mah",salamt:3000,tgttoget:200,ytdsale:100,remark:"Good"},
    {salesman_no:"S00004",salesmanname:"Ashish",address:"A/5 Juhu",city:"Bombay",pincode:400044,state:"Mah",salamt:3500,tgttoget:200,ytdsale:150,remark:"Good"}
]);

db.createCollection("product_master")
db.product_master.insertMany([
    {productno:"p00001",description:"1.44floppies",profitpercent:"5.00",unitmeasured:"piece",qtyonhand:"100",recorderlvl:"20",sellprice:"525",costprice:"500",new_price:"604"},
    {productno:"p03453",description:"monitor",profitpercent:"6.00",unitmeasured:"piece",qtyonhand:"10",recorderlvl:"3",sellprice:"12000",costprice:"11200",new_price:"13800 "},
    {productno:"p06734",description:"mouse",profitpercent:"5.00",unitmeasured:"piece",qtyonhand:"100",recorderlvl:"20",sellprice:"525",costprice:"500",new_price:"604"},
    {productno:"p07865",description:"1.22 floppies",profitpercent:"5.00",unitmeasured:"piece",qtyonhand:"100",recorderlvl:"20",sellprice:"525",costprice:"500",new_price:"604"},
    {productno:"p07868",description:"keyboards",profitpercent:"2.00",unitmeasured:"piece",qtyonhand:"10",recorderlvl:"3",sellprice:"3150",costprice:"3050",new_price:"3623"},
    {productno:"p07885",description:"CD Drive",profitpercent:"2.50",unitmeasured:"piece",qtyonhand:"10",recorderlvl:"3",sellprice:" 5250",costprice:"5100",new_price:"6038"},
    {productno:"p07965",description:"540 HDD",profitpercent:"4.00",unitmeasured:"piece",qtyonhand:"10",recorderlvl:"3",sellprice:"8400",costprice:"8000",new_price:"9660"},
    {productno:"p07975",description:"1.44 Drive",profitpercent:"5.00",unitmeasured:"piece",qtyonhand:"10",recorderlvl:"3",sellprice:"1050",costprice:"1000",new_price:"1208"},
    {productno:"p08865",description:"1.22 Drive",profitpercent:"5.00",unitmeasured:"piece",qtyonhand:"2",recorderlvl:"3",sellprice:"1050",costprice:"1000",new_price:"1208"}
]);
