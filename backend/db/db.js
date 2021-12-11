const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://eliot:eliot@covac.ensjk.mongodb.net/covac?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log("db is connected");
}).catch((err) => console.log(err))

  