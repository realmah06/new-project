CREATE DATABASE IF NOT EXISTS shop_management;
USE shop_management;

-- Users Table
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(100),
  role ENUM('SUPER_ADMIN', 'SALES') NOT NULL,
  store_id INT,
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (store_id) REFERENCES stores(id)
);

-- Stores Table
CREATE TABLE stores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  store_name VARCHAR(100) NOT NULL,
  address TEXT,
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  store_id INT,
  cost_price DECIMAL(10, 2),
  unit_price DECIMAL(10, 2),
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (store_id) REFERENCES stores(id)
);

-- Customers Table
CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  customer_name VARCHAR(100) NOT NULL,
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(100),
  balance DECIMAL(12, 2) DEFAULT 0,
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Suppliers Table
CREATE TABLE suppliers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  supplier_name VARCHAR(100) NOT NULL,
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(100),
  balance DECIMAL(12, 2) DEFAULT 0,
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Expenses Table
CREATE TABLE expenses (
  id INT PRIMARY KEY AUTO_INCREMENT,
  expense_name VARCHAR(100) NOT NULL,
  address TEXT,
  phone VARCHAR(20),
  email VARCHAR(100),
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Banks Table
CREATE TABLE banks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  bank_name VARCHAR(100) NOT NULL,
  account_number VARCHAR(50),
  balance DECIMAL(12, 2) DEFAULT 0,
  status ENUM('Active', 'Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Stock Table
CREATE TABLE stock (
  id INT PRIMARY KEY AUTO_INCREMENT,
  store_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT DEFAULT 0,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (store_id) REFERENCES stores(id),
  FOREIGN KEY (product_id) REFERENCES products(id),
  UNIQUE KEY unique_store_product (store_id, product_id)
);

-- Sales Table
CREATE TABLE sales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  customer_id INT,
  payment_method ENUM('Bank', 'Credit') NOT NULL,
  bank_id INT,
  store_id INT NOT NULL,
  total_amount DECIMAL(12, 2),
  status ENUM('Confirmed', 'Pending', 'Discarded') DEFAULT 'Confirmed',
  created_by INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (bank_id) REFERENCES banks(id),
  FOREIGN KEY (store_id) REFERENCES stores(id),
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Sales Items Table
CREATE TABLE sales_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  sale_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  unit_price DECIMAL(10, 2),
  total_price DECIMAL(12, 2),
  FOREIGN KEY (sale_id) REFERENCES sales(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Waybill Pending Table
CREATE TABLE waybill_pending (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  supplier_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  truck_number VARCHAR(50),
  driver_phone VARCHAR(20),
  status ENUM('Pending', 'Confirmed', 'Discarded') DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (supplier_id) REFERENCES suppliers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Adjustment Pending Table
CREATE TABLE adjustment_pending (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  adjustment_type ENUM('Inward', 'Outward') NOT NULL,
  store_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  reason VARCHAR(255),
  status ENUM('Pending', 'Confirmed', 'Discarded') DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (store_id) REFERENCES stores(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Bank Pending Table
CREATE TABLE bank_pending (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  action VARCHAR(50) NOT NULL,
  source_bank_id INT,
  source_customer_id INT,
  target_bank_id INT,
  target_customer_id INT,
  target_expense_id INT,
  amount DECIMAL(12, 2) NOT NULL,
  description TEXT,
  status ENUM('Pending', 'Confirmed', 'Discarded') DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (source_bank_id) REFERENCES banks(id),
  FOREIGN KEY (source_customer_id) REFERENCES customers(id),
  FOREIGN KEY (target_bank_id) REFERENCES banks(id),
  FOREIGN KEY (target_customer_id) REFERENCES customers(id),
  FOREIGN KEY (target_expense_id) REFERENCES expenses(id)
);

-- Expenses Pending Table
CREATE TABLE expenses_pending (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE NOT NULL,
  store_id INT NOT NULL,
  expense_id INT NOT NULL,
  description TEXT,
  amount DECIMAL(12, 2) NOT NULL,
  status ENUM('Pending', 'Confirmed', 'Discarded') DEFAULT 'Pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (store_id) REFERENCES stores(id),
  FOREIGN KEY (expense_id) REFERENCES expenses(id)
);

-- Confirmations Log Table
CREATE TABLE confirmations_log (
  id INT PRIMARY KEY AUTO_INCREMENT,
  transaction_type VARCHAR(50),
  transaction_id INT,
  confirmed_by INT,
  confirmed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (confirmed_by) REFERENCES users(id)
);

-- Create Indexes for Performance
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_store ON users(store_id);
CREATE INDEX idx_stock_store ON stock(store_id);
CREATE INDEX idx_stock_product ON stock(product_id);
CREATE INDEX idx_sales_date ON sales(date);
CREATE INDEX idx_sales_status ON sales(status);
CREATE INDEX idx_waybill_pending_status ON waybill_pending(status);
CREATE INDEX idx_adjustment_pending_status ON adjustment_pending(status);
CREATE INDEX idx_bank_pending_status ON bank_pending(status);
CREATE INDEX idx_expenses_pending_status ON expenses_pending(status);