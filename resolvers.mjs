export const resolvers = {
    Query:{
        checkApiStatus: () => {
            return { status: 'API tá rodando' }
        }
    },
    Mutation:{
        testMutation: async () => {
            return { status: 'Mutation rodando certin' }
        }
    }
}