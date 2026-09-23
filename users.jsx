import { useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current page from URL
  const currentPage = Number(searchParams.get("page")) || 1;

  // Number of records per page
  const recordsPerPage = 5;

  // User Data - 20 Objects
  const users = [
    {
      id: 1,
      name: "Srinivas",
      email: "srinivas@gmail.com",
      city: "Hyderabad",
      role: "Developer",
    },
    {
      id: 2,
      name: "Ravi",
      email: "ravi@gmail.com",
      city: "Bangalore",
      role: "Frontend Developer",
    },
    {
      id: 3,
      name: "Suresh",
      email: "suresh@gmail.com",
      city: "Chennai",
      role: "Backend Developer",
    },
    {
      id: 4,
      name: "Kiran",
      email: "kiran@gmail.com",
      city: "Mumbai",
      role: "UI Developer",
    },
    {
      id: 5,
      name: "Mahesh",
      email: "mahesh@gmail.com",
      city: "Pune",
      role: "React Developer",
    },
    {
      id: 6,
      name: "Anil",
      email: "anil@gmail.com",
      city: "Delhi",
      role: "Java Developer",
    },
    {
      id: 7,
      name: "Ramesh",
      email: "ramesh@gmail.com",
      city: "Hyderabad",
      role: "Angular Developer",
    },
    {
      id: 8,
      name: "Vijay",
      email: "vijay@gmail.com",
      city: "Bangalore",
      role: "Full Stack Developer",
    },
    {
      id: 9,
      name: "Arjun",
      email: "arjun@gmail.com",
      city: "Chennai",
      role: "Python Developer",
    },
    {
      id: 10,
      name: "Praveen",
      email: "praveen@gmail.com",
      city: "Mumbai",
      role: "Software Engineer",
    },
    {
      id: 11,
      name: "Naveen",
      email: "naveen@gmail.com",
      city: "Pune",
      role: "DevOps Engineer",
    },
    {
      id: 12,
      name: "Rajesh",
      email: "rajesh@gmail.com",
      city: "Delhi",
      role: "Cloud Engineer",
    },
    {
      id: 13,
      name: "Manoj",
      email: "manoj@gmail.com",
      city: "Hyderabad",
      role: "QA Engineer",
    },
    {
      id: 14,
      name: "Siva",
      email: "siva@gmail.com",
      city: "Bangalore",
      role: "React Developer",
    },
    {
      id: 15,
      name: "Nikhil",
      email: "nikhil@gmail.com",
      city: "Chennai",
      role: "Node.js Developer",
    },
    {
      id: 16,
      name: "Deepak",
      email: "deepak@gmail.com",
      city: "Mumbai",
      role: "Data Engineer",
    },
    {
      id: 17,
      name: "Karthik",
      email: "karthik@gmail.com",
      city: "Pune",
      role: "UI Designer",
    },
    {
      id: 18,
      name: "Ajay",
      email: "ajay@gmail.com",
      city: "Delhi",
      role: "System Engineer",
    },
    {
      id: 19,
      name: "Rahul",
      email: "rahul@gmail.com",
      city: "Hyderabad",
      role: "Frontend Developer",
    },
    {
      id: 20,
      name: "Vamsi",
      email: "vamsi@gmail.com",
      city: "Bangalore",
      role: "Full Stack Developer",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(users.length / recordsPerPage);

  // Calculate records for current page
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;

  const currentUsers = users.slice(startIndex, endIndex);

  // Previous Page Function
  const handlePrevious = () => {
    if (currentPage > 1) {
      setSearchParams({ page: currentPage - 1 });
    }
  };

  // Next Page Function
  const handleNext = () => {
    if (currentPage < totalPages) {
      setSearchParams({ page: currentPage + 1 });
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>User Management</h1>
        <p className="subtitle">
          Pagination using useSearchParams Hook
        </p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.city}</td>
                  <td>
                    <span className="role">{user.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ← Previous
          </button>

          <div className="page-info">
            Page <strong>{currentPage}</strong> of{" "}
            <strong>{totalPages}</strong>
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Users;