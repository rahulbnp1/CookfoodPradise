import './LogOut.css';

export default function LogOut() {
  const logoutConfirm = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      // Example logout logic
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
  };

  return (
    <div className="logout-container">
      <div className="logout-box">
        <h1>Are you sure you want to log out?</h1>
        <button onClick={logoutConfirm}>Log Out</button>
      </div>
    </div>
  );
}
