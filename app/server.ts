import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import cors from "cors";
// resolvers
import { UserResolver } from "./resolvers/User";
import { DonationResolver } from "./resolvers/Donation";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver, DonationResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const server = new ApolloServer({ schema });
  const app = Express();

  app.use(cors());

  //@ts-ignore
  server.applyMiddleware({ app });

  app.listen({ port: 3333 }, () =>
    console.log(
      `🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`
    )
  );
};

main().catch((error) => {
  console.log(error, "error");
});
