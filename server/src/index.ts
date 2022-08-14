import Express from 'express';
import "reflect-metadata";
import { PROJ_CNST } from './constants/proj.cnst';
import { initGraphql } from './graphql'; 

(async () => {
    // Initialize express app
    const app = Express();

    // Initialize Apollo Graphql Server
    const apolloServer = await initGraphql();

    // Start Graphql Server
    await apolloServer.start();

    // Add apollo graphql server to express as a middleware
    apolloServer.applyMiddleware({
        app,
        path: '/graphql'
    });

    // Heartbeat route.
    app.get('/hb', (_, res) => {
        res.send("Server Alive!");
    })

    // Start express Server.
    app.listen(PROJ_CNST.PORT, (err) => {
        if(err) {
            console.error("Error while starting the server: ", err);
            return;
        }
        console.log(`Server started on PORT: http://localhost:${PROJ_CNST.PORT}`);
    })
})()