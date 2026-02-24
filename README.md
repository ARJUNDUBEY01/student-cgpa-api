# 🎓 Student CGPA API

A RESTful API built with **Express.js** to manage student CGPA records using an in-memory JSON database.

---

## 📌 Objective

Build a REST API that manages student academic performance records. The API uses only **GET routes** (static + dynamic), follows REST principles, returns proper HTTP status codes, and stores data in an in-memory JSON array — **no database required**.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Middleware**: CORS, express.json()
- **Data Storage**: In-memory JSON array (10 student records)

---

## 📂 Project Structure

```
student-cgpa-api/
├── data/
│   └── students.js      # In-memory student records (JSON array)
├── index.js              # Main server file with all routes
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Routes Implemented

### Static Routes (4)

| #  | Method | Endpoint            | Description                        |
|----|--------|---------------------|------------------------------------|
| 1  | GET    | `/students`         | Returns all student records        |
| 2  | GET    | `/students/topper`  | Returns student with highest CGPA  |
| 3  | GET    | `/students/average` | Returns average CGPA of all students |
| 4  | GET    | `/students/count`   | Returns total number of students   |

### Dynamic Routes (2)

| #  | Method | Endpoint                        | Description                          |
|----|--------|---------------------------------|--------------------------------------|
| 5  | GET    | `/students/:id`                 | Returns a student by their ID        |
| 6  | GET    | `/students/branch/:branchName`  | Returns students from a specific branch |

---

## 📡 Sample API URLs

Assuming the API is running at `http://localhost:3000`:

| Route                              | URL                                            |
|------------------------------------|-------------------------------------------------|
| All Students                       | `http://localhost:3000/students`                |
| Topper                             | `http://localhost:3000/students/topper`          |
| Average CGPA                       | `http://localhost:3000/students/average`         |
| Student Count                      | `http://localhost:3000/students/count`           |
| Student by ID (e.g., ID 3)        | `http://localhost:3000/students/3`               |
| Students by Branch (e.g., CSE)    | `http://localhost:3000/students/branch/CSE`      |

---

## 🖥️ Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ARJUNDUBEY01/student-cgpa-api.git
   cd student-cgpa-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   node index.js
   ```

4. **Test in browser or Postman**
   Open `http://localhost:3000` to see the welcome message and all available endpoints.

---

## 🌐 Deployed Link

> **Render**: [https://student-cgpa-api-1nx1.onrender.com](https://student-cgpa-api-1nx1.onrender.com)

---

## 📬 Postman Documentation

> **Postman Docs**: [https://documenter.getpostman.com/view/xxxxxx](https://documenter.getpostman.com/view/xxxxxx)
> *(Update this link after publishing)*

---

## 📝 Sample Responses

### `GET /students/topper`
```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

### `GET /students/average`
```json
{
  "averageCGPA": 8.51
}
```

### `GET /students/count`
```json
{
  "totalStudents": 10
}
```

### `GET /students/3`
```json
{
  "id": 3,
  "name": "Rohan Kulkarni",
  "branch": "ECE",
  "semester": 6,
  "cgpa": 8.4
}
```

### `GET /students/branch/CSE`
```json
[
  { "id": 1, "name": "Aarav Sharma", "branch": "CSE", "semester": 8, "cgpa": 9.3 },
  { "id": 4, "name": "Meera Iyer", "branch": "CSE", "semester": 8, "cgpa": 9.1 },
  { "id": 6, "name": "Ananya Reddy", "branch": "CSE", "semester": 6, "cgpa": 8.7 },
  { "id": 10, "name": "Neha Gupta", "branch": "CSE", "semester": 6, "cgpa": 7.9 }
]
```

---

## 📚 Learning Outcomes

- Designed RESTful GET routes (static & dynamic)
- Handled dynamic route parameters with `req.params`
- Performed server-side filtering and aggregation
- Returned structured JSON responses with proper HTTP status codes
- Deployed backend API professionally on Render

---

## 👤 Author

**Arjun Dubey**

---
