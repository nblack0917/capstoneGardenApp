const express = require('express');
const bodyParser = require('body-parser');
const plantsRouter = require('./server/routes/plants')
const gardenRouter = require('./server/routes/gardens')
const bedsRouter = require('./server/routes/beds')
const { logger } = require('./server/middleware')

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(logger);
app.use('/plants', plantsRouter);
app.use('/gardens', gardenRouter)
app.use('/beds', bedsRouter)


app.get('/', (req, res) => {
    res.send('Welcome to my UPDATED Garden App!')
  })
  
  app.listen(port, () => {
   console.log(`Web server is listening on port ${port}!`);
  });
  