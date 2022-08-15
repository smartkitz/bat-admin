import { ApolloServer } from 'apollo-server-express';
import { getBatSchema } from './schema';

export const initGraphql = async () => {
    const apolloServer = new ApolloServer({
        schema: await getBatSchema()
    })

    return apolloServer;
}