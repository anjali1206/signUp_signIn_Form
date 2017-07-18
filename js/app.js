/*
Write and deploy a small web app(preferably using javascript &/ python) to store a list of persons, containing the following fields: 
firstname, lastname, date of birth and zipcode. We’re looking for basic CRUD functionality. Any bells and whistles are welcome. 
Send the link to the deployed web-app and the source code.
*/
/* 1) create global variables like 
    elm = for div element
    users = for user (fn, ln, dob, zipcode) rows in an array
    count = to count number of users
    
    2) create global CRUD functions like
      viewAll(FetchAll) = to select/view all rows(users)
      AddUser = to create/add new row(user)
      EditUser = to edit/update a row(user info.)
      DeleteUser = to remove/delete a row(user)
*/ 
/* Declare a global function “app()”  //all logics will go inside app function*/
var app = new function(){

/*--- Logic of Create Operation ---*/