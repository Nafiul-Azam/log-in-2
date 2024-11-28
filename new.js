// সঠিক ইমেইল এবং পাসওয়ার্ড সংরক্ষণ
const correctEmail = "nafiulazam995@gmail.com";
const correctPassword = "1234";

// Login button এর জন্য ইভেন্ট লিস্টেনার যোগ করা
document.getElementById("loginButton").addEventListener("click", function () {
  // ইউজার ইনপুট সংগ্রহ
  const emailInput = document.getElementById("email").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  // ইমেইল এবং পাসওয়ার্ড যাচাই করা
  if (emailInput === correctEmail && passwordInput === correctPassword) {
    window.location.href = "https://www.facebook.com"; // Facebook এ রিডিরেক্ট
  } else {
    alert("Invalid email or password. Please try again.");
  }
});
