const express = require('express');

const app = express();
const PORT = 8080 || process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`ARRR App be listenin' on this here ${PORT}`);
});