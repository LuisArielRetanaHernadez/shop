// utils
const { db } = require('./utils/databases');


// app
const { app } = require('./app');

require('dotenv').config();

db.authenticate()
.then(() => console.log('DB connected'))
.catch(err => console.log(err));

db.sync({ alter: true })
.then(() => startServer())
.catch(err => console.log(err));

const startServer = () => { 
    const PORT = process.env.PORT || 3333;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}