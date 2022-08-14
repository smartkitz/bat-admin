import Express from 'express';
import { PROJ_CNST } from './constants/proj.cnst';

(async () => {
    // Initialize express app
    const app = Express();

    // Heartbeat route.
    app.get('/', (_, res) => {
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