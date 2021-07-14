const mongoose = require('mongoose')

mongoose.connect(
    process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            throw new Error(err)
        }
        console.log('DB connected...')
    }
)
