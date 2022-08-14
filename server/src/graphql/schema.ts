import { buildSchema } from 'type-graphql'
// import { join } from 'path';
import { HelloResolver } from './resolvers';

export const getBatSchema = async () => {
    const schema = await buildSchema({
        resolvers: [
            HelloResolver
        ]
    })

    return schema;
}