## User Management API

### Setup
npm install
npm run dev

### Features
- JWT Authentication
- Admin/User roles
- CRUD operations
- CSV import/export (streaming)
- PostgreSQL + Sequelize

### How to use postman collection
- Import into Postman
- Open Postman
- Import → File → Select JSON

### Usage Flow (IMPORTANT)
- Register
- Promote user to admin in DB using SQL query (eg.: UPDATE users SET role='admin' WHERE email='admin@test.com';)
- Login → token auto-saved
- Use all other APIs

### Brief Note on Module Selection

1. User Management Module

The User Management module is responsible for authentication, authorization, and user lifecycle management. It uses JWT-based authentication to maintain stateless sessions and role-based access control to separate admin and user privileges.

Key design considerations:
1. Passwords are securely hashed using bcrypt
2. JWT tokens contain minimal user identity and role information
3. Soft delete is used to preserve data integrity
4. Pagination is applied for scalability
5. Sequelize ORM ensures database abstraction and consistency with PostgreSQL

This module forms the security backbone of the application.

2. Task Management Module

The Task Management module is designed to support collaborative workflows with clear ownership and accountability.

Key design considerations:

Tasks are linked to both creator and assigned user via foreign keys

Status transitions are controlled through business rules

Only assigned users can mark tasks as completed

Completed tasks become immutable to preserve auditability

Comments are stored in a separate entity to maintain normalization

Sequelize associations enforce relational integrity at the database level

This module demonstrates business-rule enforcement, relational modeling, and real-world workflow handling.