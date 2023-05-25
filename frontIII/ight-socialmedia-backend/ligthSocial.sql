
CREATE SCHEMA IF NOT EXISTS `ligthSocialDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ligthSocialDB` ;


create table users (
  id int not null auto_increment PRIMARY KEY,
  name varchar(255) not null,
  surname varchar(255) null,
  email varchar(255) not null,
  picture_profile varchar(255) null,
  date_created datetime not null,
  last_login datetime null
);

create table posts (
  id int not null auto_increment PRIMARY KEY,
  user_id int not null,
  title varchar(255) not null,
  content text not null,
  date_created datetime not null,
  date_modified datetime null,
  FOREIGN KEY (user_id) REFERENCES users(id),
  typePost_id int not null,
  category_id int not null,
  FOREIGN KEY (typePost_id) REFERENCES typePosts(id),
  FOREIGN KEY (category_id) REFERENCES categorys(id)
);

create table typePosts (
  id int not null auto_increment PRIMARY KEY,
  name varchar(255) not null
);


create table categorys (
  id int not null auto_increment PRIMARY KEY,
  name varchar(255) not null,
  description varchar(255) not null
);


create table comments (
  id int not null auto_increment PRIMARY KEY,
  user_id int not null,
  post_id int not null,
  content text not null,
  date_created datetime not null,
  date_modified datetime null,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

create table likes (
  id int not null auto_increment PRIMARY KEY,
  user_id int not null,
  post_id int not null,
  comment_id int not null,
  date_created datetime not null,
  date_modified datetime null,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id),
  FOREIGN KEY (comment_id) REFERENCES comments(id)
);


create table likes_has_users(
  user_id int not null,
  like_id int not null,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (like_id) REFERENCES likes(id)
);

create table users_has_posts(
  user_id int not null,
  post_id int not null,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

create table user_has_comments(
  user_id int not null,
  comment_id int not null,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (comment_id) REFERENCES comments(id)
);

