const express = require("express");
const cors = require("cors");
const students = require("./data/students");

const app = express();
const PORT = process.env.PORT || 3000;

// ========================
// Middleware
// ========================
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON payloads

// ========================
// Root Route
// ========================
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Student CGPA API 🎓",
    endpoints: [
      "GET /students            — Get all students",
      "GET /students/topper     — Get student with highest CGPA",
      "GET /students/average    — Get average CGPA of all students",
      "GET /students/count      — Get total student count",
      "GET /students/:id        — Get student by ID (dynamic)",
      "GET /students/branch/:branchName — Get students by branch (dynamic)",
    ],
  });
});

// ========================
// 1. GET /students — Return all students
// ========================
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// ========================
// 2. GET /students/topper — Return the student with the highest CGPA
// ========================
app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  // Use reduce to find the student with the maximum CGPA
  const topper = students.reduce((best, current) =>
    current.cgpa > best.cgpa ? current : best
  );

  res.status(200).json(topper);
});

// ========================
// 3. GET /students/average — Return the average CGPA of all students
// ========================
app.get("/students/average", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const totalCGPA = students.reduce((sum, student) => sum + student.cgpa, 0);
  const averageCGPA = parseFloat((totalCGPA / students.length).toFixed(2));

  res.status(200).json({ averageCGPA });
});

// ========================
// 4. GET /students/count — Return total number of students
// ========================
app.get("/students/count", (req, res) => {
  res.status(200).json({ totalStudents: students.length });
});

// ========================
// 5. GET /students/:id — Return student by ID (Dynamic Route)
// ========================
// NOTE: This route is placed AFTER the static routes (/topper, /average, /count)
// to prevent those paths from being interpreted as an :id parameter.
app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);

  // Validate that the id is a valid number
  if (isNaN(studentId)) {
    return res.status(400).json({ message: "Invalid student ID. ID must be a number." });
  }

  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res
      .status(404)
      .json({ message: `Student with ID ${studentId} not found` });
  }

  res.status(200).json(student);
});

// ========================
// 6. GET /students/branch/:branchName — Return students by branch (Dynamic Route)
// ========================
// Filtering is case-insensitive so that /branch/cse and /branch/CSE both work.
// Design choice: If no students are found for a branch, we return an empty array
// with a 200 status. This is because the request itself is valid — the branch
// simply has no students. Returning 404 would imply the route doesn't exist.
app.get("/students/branch/:branchName", (req, res) => {
  const branchName = req.params.branchName.toLowerCase();

  const filteredStudents = students.filter(
    (s) => s.branch.toLowerCase() === branchName
  );

  // Returning an empty array with 200 if no students found for the given branch.
  // Rationale: The route is valid; the branch simply has no records.
  res.status(200).json(filteredStudents);
});

// ========================
// 404 Handler — Catch-all for undefined routes
// ========================
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ========================
// Start Server
// ========================
app.listen(PORT, () => {
  console.log(`🚀 Student CGPA API is running on http://localhost:${PORT}`);
});
