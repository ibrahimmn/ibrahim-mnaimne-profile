const express = require('express');
const cors = require('cors');
const path =require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(express.json());


    app.get('/*', function (req, res) {
       res.sendFile(path.join(__dirname, 'build', 'index.html'));
     });

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});




app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});