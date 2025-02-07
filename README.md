Login-Singup_Validation
🔐 React Authentication System (AuthContext API)
📌 Overview
This project implements a user authentication system using React Context API. It provides Login, Signup, and Logout functionalities while maintaining authentication state globally.

🔧 Technologies Used
React.js – Frontend library for building UI components.
React Context API – For state management and sharing authentication data.
useState & useEffect – Managing user state and checking authentication on mount.
Custom API Functions (userLogin, userSignup, checkLogin, userLogout) – Simulating authentication operations.

📜 Workflow of Authentication System
1️⃣ Understanding the Authentication Context
The application uses the Context API to create an AuthContext that holds:
✅ User data
✅ Login function
✅ Signup function
✅ Logout function
✅ Error handling

📌 Conclusion
This authentication system follows a context-based approach, making it scalable and easy to manage. By using React Context API, authentication state is shared globally without prop drilling.

✅ Supports Login, Signup, and Logout
✅ Uses State Management (useState)
✅ Persists User Sessions (useEffect)
✅ Handles Authentication Errors (setError)

This structure ensures a smooth and secure authentication flow for any React application. 🚀
