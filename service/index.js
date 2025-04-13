const express = require('express');
var app = express();
const path = require('path');


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'ยินดีต้อนรับ', message: 'Hello from Express + EJS!' });
}
);

app.post('/', (req, res) => {
    res.send('Hello poom');
}
);

app.put('/', (req, res) => {
    res.send('Hello put');
}
);
app.delete('/', (req, res) => {
    res.send('Hello delete');
}
);
app.patch('/', (req, res) => {
    res.send('Hello patch');
}
);