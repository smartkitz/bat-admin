import Express from 'express';
import "reflect-metadata";
import { PROJ_CNST } from './constants/proj.cnst';
import { initGraphql } from './graphql'; 
import { AppDataSource } from './db';

(async () => {
    // Initialize express app
    const app = Express();

    // Initialize postgres db
    // to initialize initial connection with the database, register all entities
    // and "synchronize" database schema, call "initialize()" method of a newly created database
    // once in your application bootstrap
    try {
        await AppDataSource.initialize();
        console.log(`Successfully connected to db`);
    }catch(err) {
        console.error('Error while connecting to db: ', err);
    }

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
    app.listen(PROJ_CNST.PORT, () => {
        console.log(`Server started on PORT: http://localhost:${PROJ_CNST.PORT}`);
    })
})()