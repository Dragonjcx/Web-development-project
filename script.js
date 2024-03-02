document.addEventListener('DOMContentLoaded', function () 
{
const contactForm = document.getElementById('contact-form');
if (contactForm)
{
contactForm.addEventListener('submit', function (event)
{
event.preventDefault(); // Prevent form submission
const formData = new FormData(contactForm);
for (const [key, value] of formData.entries())
{
console.log(`${key}: ${value}`);
}
});
}
});
