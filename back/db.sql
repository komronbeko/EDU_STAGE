CREATE TABLE courses (
  course_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  teacher_id uuid not null,
  course_title varchar(65) not null,
  course_description text,
  course_price character(18) not null,
  course_image varchar(10),
  course_max_students integer not null,
  course_available_seats integer,
  course_schedule_from varchar(10) not null,
  course_schedule_to varchar(10) not null,
  course_objectives text not null,
  course_eligibility text not null
);


CREATE TABLE teachers (
  teacher_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  teacher_name varchar(65) not null,
  teacher_image varchar(128) 
);

CREATE TABLE likes (
  likes_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id uuid not null,
  liked_by varchar(65) not null
);

CREATE TABLE students (
  students_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id uuid not null,
  students_name varchar(65) not null,
  students_image varchar(128),
  students_age integer
);

CREATE TABLE reviews (
  review_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id uuid not null,
  review_author varchar(65) not null,
  review_image varchar(128),
  review_comment text not null,
  review_rate_star integer
);

CREATE TABLE lessons (
  lesson_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  course_id uuid,
  lesson_title varchar(128) not null,
  lesson_description text
);


CREATE TABLE learners_no_money (
  id uuid DEFAULT uuid_generate_v4(),
  name varchar(65) not null,
  phone_number varchar(65) not null,
  email varchar(65) not null
);

CREATE TABLE trainers (
  id uuid DEFAULT uuid_generate_v4(),
  name varchar(65) not null,
  image varchar(128),
  job varchar(65) not null,
  quote text,
  facebook_link text,
  twitter_link text,
  linkedin_link text,
  pinterest_link text
);

CREATE TABLE events (
  id uuid DEFAULT uuid_generate_v4(),
  title varchar(65) not null,
  description varchar(256),
  image varchar(128),
  date varchar(65) not null,
  time_from varchar(10) not null,
  time_to varchar(10) not null,
  location varchar(65) not null
);

CREATE TABLE clients (
  id uuid DEFAULT uuid_generate_v4(),
  name varchar(65) not null,
  image varchar(128),
  text text
);

CREATE TABLE posts (
  post_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  admin_id uuid not null,
  post_category varchar(65) not null,
  post_title varchar(65) not null,
  post_text text,
  post_date timestamptz DEFAULT CURRENT_TIMESTAMP,
  post_views_count integer DEFAULT 0,
  post_comments_count integer DEFAULT 0,
  post_image varchar(128) not null,
  post_facebook_link varchar(128),
  post_twitter_link varchar(128),
  post_linkedin_link varchar(128),
  post_pinterest_link varchar(128)
);

CREATE TABLE categories (
  category_id uuid DEFAULT uuid_generate_v4(),
  category_name varchar(65) not null,
  post_id uuid not null
);

CREATE TABLE admins (
  admin_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  admin_name varchar(65) not null,
  admin_password varchar(65) not null
  admin_image varchar(128),
  admin_job varchar(65),
  admin_description text,
  admin_facebook_link varchar(128),
  admin_twitter_link varchar(128),
  admin_linkedin_link varchar(128),
  admin_pinterest_link varchar(128)
);

CREATE TABLE comments (
  comment_id uuid DEFAULT uuid_generate_v4(),
  post_id uuid not null,
  comment_name varchar(65) not null,
  comment_image varchar(128),
  comment_email varchar(65) not null,
  comment_subject varchar(128),
  comment_message text not null,
  comment_created_at timestamptz DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contacts (
  id uuid DEFAULT uuid_generate_v4(),
  name varchar(65) not null,
  email varchar(65) not null,
  subject varchar(128),
  message text not null
);
 
ALTER TABLE courses ADD FOREIGN KEY (teacher_id) REFERENCES teachers (teacher_id) ON DELETE set null;

ALTER TABLE likes ADD FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE cascade;

ALTER TABLE students ADD FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE cascade;

ALTER TABLE reviews ADD FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE cascade;

ALTER TABLE lessons ADD FOREIGN KEY (course_id) REFERENCES courses (course_id) ON DELETE cascade;

ALTER TABLE comments ADD FOREIGN KEY (post_id) REFERENCES posts (post_id) ON DELETE cascade;

ALTER TABLE posts ADD FOREIGN KEY (admin_id) REFERENCES admins (admin_id) ON DELETE cascade;

ALTER TABLE categories ADD FOREIGN KEY (post_id) REFERENCES posts (post_id) ON DELETE cascade;

ALTER TABLE admins ADD admin_status varchar(10);

update admins set admin_status = 'super' where admin_name = 'Komronbek';

ALTER TABLE posts ALTER COLUMN post_views_count SET DEFAULT 0;

ALTER TABLE posts ALTER COLUMN post_comments_count SET DEFAULT 0;

ALTER TABLE comments DROP COLUMN comment_image;

ALTER TABLE comments RENAME COLUMN comment_name TO comment_author;

select DISTINCT p.post_title, c.comment_subject, c.comment_author  from 
posts p
right join 
comments c
on p.post_id = c.post_id where p.post_id = '1f58e97f-104e-46fe-b0fb-7b73e5f5284b';


SELECT
  json_build_object(
    'post_id', p.post_id,
    'author', (
      SELECT json_build_object(
        'author_name', a.admin_name,
        'author_image', a.admin_image,
         'author_job', a.admin_job,
         'author_description', a.admin_description,
         'author_facebook_link', a.admin_facebook_link,
         'author_twitter_link', a.admin_twitter_link,
         'author_linkedin_link', a.admin_linkedin_link,
         'author_pinterest_link', a.admin_pinterest_link
      )
      FROM admins a
      WHERE a.admin_id = p.admin_id
    ),
    'title', p.post_title,
    'description', p.post_text,
    'comments', (
      SELECT JSON_AGG(json_build_object(
        'comment_id', c.comment_id,
        'comment_author', c.comment_author,
        'comment_email', c.comment_email,
        'comment_subject', c.comment_subject,
        'comment_message', c.comment_message,
        'comment_created_at', c.comment_created_at
      ))
      FROM comments c
      WHERE c.post_id = p.post_id
    )
  ) AS post
FROM posts p where p.post_id = '1f58e97f-104e-46fe-b0fb-7b73e5f5284b';

update posts set post_views_count = COALESCE(null, post_views_count) where post_id = '1f58e97f-104e-46fe-b0fb-7b73e5f5284b';

select * from posts where post_id = '1f58e97f-104e-46fe-b0fb-7b73e5f5284b';

select MAX(post_views_count) from posts;

SELECT * FROM posts
WHERE post_views_count = (
   SELECT MAX (post_views_count)
   FROM posts
);

select * from posts order by post_views_count desc OFFSET 0 LIMIT 4;
