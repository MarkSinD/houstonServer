create table test_db.customer (
id INT NOT NULL AUTO_INCREMENT,
customer_name VARCHAR(100) NOT NULL,
customer_surname VARCHAR(100) NOT NULL,
customer_age INT NOT NULL,
customer_gender BOOLEAN NOT NULL,
PRIMARY KEY(id)
);

INSERT INTO customer SET  customer_name='Jonas',
customer_surname='dark',customer_age=18,customer_gender=1