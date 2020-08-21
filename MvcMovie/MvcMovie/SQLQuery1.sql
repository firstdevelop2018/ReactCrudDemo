create table student( 
  id int not null 
  , name varchar 
  , birthday datetime
  , age int
  , score int 
  , classid int
  ,index id_index (id)
  , constraint pk_student primary key (id)
); 
