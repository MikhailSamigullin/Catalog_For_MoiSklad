const express = require('express');
const pool = require('../db');
const cors = require('cors');

const app = express();
// TODO вынести порт в файл
const port = 3001;

app.use(cors({origin: '*'}));


// Передаем все товары из БД по запросу
app.get('/api', (req, res) => {
    pool.query('SELECT * FROM product', (error, results) => {
        if (error) {
        throw error;
      }
      res.status(200).json({
        status: 'success',
        requestTime: req.requestTime,
        data: results.rows,
      });
     });
})

app.listen(port, () => {
    console.log(`Server starting at port ${port}`);
})