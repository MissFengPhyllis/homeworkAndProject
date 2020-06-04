insert into user (username, password, enabled, role) values ('user1', 'password', true, 'ROLE_ADMIN');
insert into user (username, password, enabled, role) values ('user2', 'password', true, 'ROLE_USER');

insert into issue (user_id, title, description, income,outcome,category,place, status, created_at, updated_at) values (1, 'budget1', 'description1', 20,-10, 'category1', 'place1', 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (user_id, title, description, income,outcome,category,place, status, created_at, updated_at) values (1, 'budget2',  'description2', 8990,-1000, 'category2',  'place2', 'DOING', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (user_id, title, description, income,outcome,category,place, status, created_at, updated_at) values (1, 'budget3',  'description3',2450,-100, 'category3',  'place3', 'DOING', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue (user_id, title, description, income,outcome,category,place, status, created_at, updated_at) values (2, 'budget4',  'description4', 200,-50, 'category4', 'place4', 'DONE', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (1, 'message1', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (1, 'message2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (2, 'message3', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into message (issue_id, text, created_at, updated_at) values (3, 'message4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into label (text, created_at, updated_at) values ('label1', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label3', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into issue_labels (issues_id, labels_id) values (1, 1);
insert into issue_labels (issues_id, labels_id) values (1, 2);
insert into issue_labels (issues_id, labels_id) values (2, 1);
insert into issue_labels (issues_id, labels_id) values (2, 4);
insert into issue_labels (issues_id, labels_id) values (3, 3);
insert into issue_labels (issues_id, labels_id) values (3, 4);

insert into issue ( title, income,outcome,category, created_at, updated_at) values ( 'budget1',  20,-10, 'category1',  CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue ( title, income,outcome,category, created_at, updated_at) values ( 'budget2',   8990,-1000, 'category2',   CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue ( title, income,outcome,category, created_at, updated_at) values ( 'budget3',  2450,-100, 'category3',  CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into issue ( title, income,outcome,category, created_at, updated_at) values ( 'budget4',   200,-50, 'category4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
