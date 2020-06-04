create table user
(
	id int auto_increment,
	username varchar2,
	password varchar2,
	enabled varchar2,
	role varchar2,
	constraint user_pk
		primary key (id)
);

create table budget
(
	id int auto_increment,
	user_id varchar2,
	title varchar2,
	description varchar2,
	income int,
	outcome int,
	category varchar2,
	place varchar2,
	status varchar,
	created_at timestamp,
	updated_at timestamp,
	constraint budget_pk
		primary key (id)
);

create table message
(
	id int auto_increment,
	budget_id varchar2,
	text varchar2,
	created_at timestamp,
	updated_at timestamp,
	constraint message_pk
		primary key (id)
);

create table label
(
	id int auto_increment,
	text varchar2,
	created_at timestamp,
	updated_at timestamp,
	constraint label_pk
		primary key (id)
);

create table budget_labels
(
	id int auto_increment,
	budgets_id varchar2,
	labels_id varchar2,
	constraint budget_labels_pk
		primary key (id)
);


