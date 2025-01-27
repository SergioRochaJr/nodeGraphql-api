import 'colors'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.mjs'
import { resolvers } from './resolvers.mjs'

const API_PORT = 4000;

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

server
    .listen({port: API_PORT || 4000})
    .then(({ url }) => {
        console.log('Server rodando em: '.green + `${url}`.yellow)
        console.log(
            'Endereço da query:'.magenta + ' https://studio.apollographql.com/dev'.yellow
        )
}).catch(error => {
    console.log(error)
})