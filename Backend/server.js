
import http from 'http'
import app from './app.js'

const port=process.env.PORT || 3000;

const server = http.createServer(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});