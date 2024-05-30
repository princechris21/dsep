// script.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signUpForm = document.getElementById("signUpForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  
    const login = document.getElementById("login");
    const signUp = document.getElementById("signUp");
    const forgotPassword = document.getElementById("forgotPassword");
    const dashboard = document.getElementById("dashboard");
  
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const signUpLink = document.getElementById("signUpLink");
    const loginLink = document.getElementById("loginLink");
    const backToLoginLink = document.getElementById("backToLoginLink");
    const logoutButton = document.getElementById("logoutButton");
  
    // Switch to sign up form
    signUpLink.addEventListener("click", (e) => {
      e.preventDefault();
      login.classList.add("hidden");
      signUp.classList.remove("hidden");
    });
  
    // Switch to login form from sign up
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      signUp.classList.add("hidden");
      login.classList.remove("hidden");
    });
  
    // Switch to forgot password form
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault();
      login.classList.add("hidden");
      forgotPassword.classList.remove("hidden");
    });
  
    // Switch back to login form from forgot password
    backToLoginLink.addEventListener("click", (e) => {
      e.preventDefault();
      forgotPassword.classList.add("hidden");
      login.classList.remove("hidden");
    });
  
    // Login form submission
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Handle login logic here
      login.classList.add("hidden");
      dashboard.classList.remove("hidden");
    });
  
    // Sign up form submission
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Handle sign up logic here
      signUp.classList.add("hidden");
      dashboard.classList.remove("hidden");
    });
  
    // Forgot password form submission
    forgotPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // Handle password reset logic here
      alert("Password reset link has been sent to your email.");
      forgotPassword.classList.add("hidden");
      login.classList.remove("hidden");
    });
  
    // Logout button
    logoutButton.addEventListener("click", () => {
      dashboard.classList.add("hidden");
      login.classList.remove("hidden");
    });
  });
  