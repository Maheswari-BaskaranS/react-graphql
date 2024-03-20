import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
query GetCharacter($id: ID!){
character (id:$id){
    name
    gender
    id
    image
  episode{
    name
    episode
  }
  }
}
`;

export const useCharacter = (id)=> {
    const {error, loading, data} = useQuery(GET_CHARACTERS,{
        variables: {
            id,
        }
    });
    console.log({error, loading, data});
  return{
    error,
    data,
    loading
  };
}
