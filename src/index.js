import express from 'express'

const app = express();

app.get('/api/:name', (req, res) => {
    
    const username = req.params.name;

    res.end(`<p>welcome, ${username}</p>`);
})

app.listen(8000,() => console.log('server started on port 8000'));