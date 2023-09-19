const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      console.log(process.env.DATABASE_URL);
        await mongoose.connect(process.env.DATABASE_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB