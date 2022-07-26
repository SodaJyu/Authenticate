const express = require('express');

const app = express();
const PORT = 8080 || process.env.PORT;
const authRoutes = require('./routes/authRoute');

app.use(express.json());
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`ARRR App be listenin' on this here ${PORT}`);
});