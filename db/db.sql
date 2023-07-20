-- Creación de base de datos
CREATE DATABASE books_corner;

-- Usar la base de datos creada
use books_corner;

-- Creacion de  cada una de las tablas
CREATE TABLE administrator(
    id_User INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_User VARCHAR(50) NOT NULL,
    tel_User VARCHAR(20)NOT NULL,
    email_User VARCHAR(30) NOT NULL,
    direccion_User VARCHAR(50) NOT NULL
);

CREATE TABLE clients(
    id_Client INT NOT NULL PRIMARY KEY,
    id_User_fk INT NOT NULL,
    name_Client VARCHAR(50) NOT NULL,
    tel_Client VARCHAR(20) NOT NULL,
    email_Client VARCHAR(30) NOT NULL,
    direccion_Client VARCHAR(50) NOT NULL
);
CREATE TABLE categories_books(
    id_Categorie INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_Categorie VARCHAR(20) NOT NULL
);

CREATE TABLE books_description(
    id_Book INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_Categorie_fk INT NOT NULL,
    name_Book VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    name_Author VARCHAR(50)
);

CREATE TABLE status_inventory(
    id_Status INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_Status VARCHAR(20) NOT NULL
);

CREATE TABLE inventory(
    id_Inventory INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_Book_fk INT NOT NULL,
    id_Status_Inventory INT NOT NULL,
    quantity_Book INT NOT NULL,
    creation_Date_Inventory TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE status_loan(
    id_Status INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_Status VARCHAR(20) NOT NULL
);

CREATE TABLE loan(
    id_Loan INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_Client_fk INT NOT NULL,
    start_Loan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_Loan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_Status_Loan_fk INT NOT NULL,
    id_Inventory_fk INT NOT NULL,
    description VARCHAR(200) NOT NULL,
    penalthy_Cost INT NOT NULL
);
-- Cracion de FOREIGN KEY
ALTER TABLE clients ADD CONSTRAINT fk_clients_administrator FOREIGN KEY (id_User_fk) REFERENCES administrator (id_User) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE loan ADD CONSTRAINT fk_loan_clients FOREIGN KEY (id_Client_fk) REFERENCES clients (id_Client) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE loan ADD CONSTRAINT fk_loan_status FOREIGN KEY (id_Status_Loan_fk) REFERENCES status_loan (id_Status) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE loan ADD CONSTRAINT fk_loan_inventory FOREIGN KEY (id_Inventory_fk) REFERENCES inventory (id_Inventory) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE inventory ADD CONSTRAINT fk_inventory_books FOREIGN KEY (id_Book_fk) REFERENCES books_description (id_Book) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE inventory ADD CONSTRAINT fk_inventory_status FOREIGN KEY (id_Status_Inventory) REFERENCES status_inventory (id_Status) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE books_description ADD CONSTRAINT fk_books_categories FOREIGN KEY (id_Categorie_fk) REFERENCES categories_books (id_Categorie) ON DELETE CASCADE ON UPDATE CASCADE;


-- Inserting data into the administrator table
INSERT INTO administrator (name_User, tel_User, email_User, direccion_User)
VALUES
    ('John Doe', '+123456789', 'john.doe@email.com', '123 Main Street'),
    ('Jane Smith', '+987654321', 'jane.smith@email.com', '456 Park Avenue'),
    ('Michael Johnson', '+555555555', 'michael.johnson@email.com', '789 Oak Drive');

-- Inserting data into the clients table
INSERT INTO clients (id_Client, id_User_fk, name_Client, tel_Client, email_Client, direccion_Client)
VALUES
    (1102312312, 1, 'Alice Johnson', '+111111111', 'alice.johnson@email.com', '111 Elm Street'),
    (1021231232, 2, 'Bob Williams', '+222222222', 'bob.williams@email.com', '222 Maple Avenue'),
    (1041566753, 3, 'Eva Martinez', '+333333333', 'eva.martinez@email.com', '333 Pine Road');

-- Inserting data into the categories_books table
INSERT INTO categories_books (name_Categorie)
VALUES
    ('Fiction'),
    ('Science Fiction'),
    ('Mystery'),
    ('Romance'),
    ('Horror');

-- Inserting data into the books_description table
INSERT INTO books_description (id_Categorie_fk, name_Book, description, name_Author)
VALUES
    (1, 'The Great Gatsby', 'A classic novel set in the Jazz Age.', 'F. Scott Fitzgerald'),
    (2, 'Dune', 'An epic science fiction novel.', 'Frank Herbert'),
    (3, 'Murder on the Orient Express', 'A famous detective novel by Agatha Christie.', 'Agatha Christie'),
    (4, 'Pride and Prejudice', 'A romantic novel by Jane Austen.', 'Jane Austen'),
    (5, 'Gone Girl', 'A psychological thriller by Gillian Flynn.', 'Gillian Flynn');

-- Inserting data into the status_inventory table
INSERT INTO status_inventory (name_Status)
VALUES
    ('In Stock'),
    ('Out of Stock');

-- Inserting data into the inventory table
INSERT INTO inventory (id_Book_fk, id_Status_Inventory, quantity_Book)
VALUES
    (1, 1, 10),
    (2, 2, 5),
    (3, 1, 8),
    (4, 2, 0),
    (5, 1, 12);

-- Inserting data into the status_loan table
INSERT INTO status_loan (name_Status)
VALUES
    ('On Loan'),
    ('overdue'),
    ('Returned');

-- Inserting data into the loan table
INSERT INTO loan (id_Client_fk, start_Loan, end_Loan, id_Status_Loan_fk, id_Inventory_fk, description, penalthy_Cost)
VALUES
    (1021231232, '2023-07-01', '2023-07-15', 1, 1, 'The Great Gatsby', 0),
    (1041566753, '2023-07-05', '2023-07-19', 1, 2, 'Dune', 0),
    (1102312312, '2023-07-10', '2023-07-24', 1, 3, 'Murder on the Orient Express', 0);