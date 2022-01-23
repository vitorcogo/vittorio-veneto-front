const express = require('express');
const app = express();
const appName = 'vittorio-veneto';

const outputPath = `${__dirname}/dist/${appName}`;

// set build directory to get angular content
app.use(express.static(outputPath));
// Redirect requests to index.html
app.get('/*', (req, res) => {
    res.sendFile(`${outputPath}/index.html`);
});

// listen heroku port
app.listen(process.env.PORT);