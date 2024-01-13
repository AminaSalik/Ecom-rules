const express = require("express")
const app = express()
const dotenv = require('dotenv');
const config = require('./Config_Db/Config')
const routerProduct = require("./Routes/ProductRouters")
const ApiError = require("./Utils/apiError")
const cors = require('cors');


dotenv.config();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

//*routes middleware
app.use('/api', routerProduct);

app.all('*', (req, res, next) => {
    next(new ApiError(`can't find this route: ${req.originalUrl}`, 400))
});

const PORT = process.env.PORT || 8000

app.listen(PORT, (err) => {
    if (!err) {
        console.log(`the port ${PORT} is running`)
    } else {
        console.log(err)
    }
})
module.exports = app;