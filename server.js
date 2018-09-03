const express = require('express');

const app = express();
const PORT = process.env.PORT || 3007;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
}

app.listen(PORT, () => {
    console.log(`App upp on port${PORT}`);
});