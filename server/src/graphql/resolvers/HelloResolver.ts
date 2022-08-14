import { Query, Resolver } from "type-graphql";

@Resolver() 
export class HelloResolver {

    @Query(() => String) 
    hello() {
        return "Welcome to BAT-Admin Graphql Service";
    }
}