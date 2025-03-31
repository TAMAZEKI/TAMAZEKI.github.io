const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// ดึง IP ของผู้ใช้
app.get('/log-ip', (req, res) => {
    const userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const logData = `${new Date().toISOString()} - IP: ${userIP}\n`;

    // บันทึกลงไฟล์
    fs.appendFile('logs.txt', logData, (err) => {
        if (err) {
            console.error('Error logging IP:', err);
            return res.status(500).send('Error logging IP');
        }
        res.send(`Your IP: ${userIP} has been logged.`);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
