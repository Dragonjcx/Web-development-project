const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html')); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    console.log('Submitted Form Data');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Add validation logic here
    res.send(`Form Submitted`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
