db.createCollection("student")
db.student.insertMany([
    {_id:1,name:"Ram",marks:[82,35,99]},
    {_id:2,name:"Heer",marks:[77,67,89]},
    {_id:3,name:"Moni",marks:[89,76,54]},
    {_id:4,name:"Neha",marks:[45,66,90]},
    {_id:5,name:"Rush",marks:[98,45,56]}
]);