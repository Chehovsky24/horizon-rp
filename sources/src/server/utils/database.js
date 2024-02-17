import mysql from 'mysql';

const database = mysql.createConnection({
    host: mp.config.database.host,
    user: mp.config.database.user,
    password: mp.config.database.password,
    database: mp.config.database.name
});

database.connect((err) => {
    if(err) {
        console.log('Ошибка:', err);
    } else {
        console.log('База данных успешно подключена.');
    }
});