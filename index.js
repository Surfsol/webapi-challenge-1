/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/
const express = require('express');

//creates instant of express server - object
//create server that can listen 
const server = express()  

const actionRouter = require('./data/routers/actionRouter')
const projectRouter = require('./data/routers/projectRouter')

//middleware that hides headers
const helmet = require('helmet')


server.use(helmet())

//allows express to read json from body of request
//takes json coming from body
server.use(express.json())

server.use('/project', projectRouter)
server.use('/action', actionRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Its alive!</h2>`)
})


server.listen(5000, () => {
    console.log('\n* Server Running on http://localhost:5000 *\n')
})