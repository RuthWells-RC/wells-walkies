// ======================= MOBILE MENU =======================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ======================= SMOOTH SCROLL =======================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});

// ======================= BOOKING FORM =======================
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  const name = bookingForm.name.value.trim();
  const email = bookingForm.email.value.trim();
  const phone = bookingForm.phone.value.trim();
  const service = bookingForm.service.value;
  const details = bookingForm.details.value.trim();

  // Simple validation
  if (!name || !email || !phone || !service) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all required fields.";
    return;
  }

  // Simulate form submission
  formMessage.style.color = "green";
  formMessage.textContent = `Thank you, ${name}! Your booking for "${service}" has been received. We will contact you at ${email} or ${phone}.`;

  // Reset the form
  bookingForm.reset();
});
