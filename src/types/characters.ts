export type Characters = {
  id: number;
  name: string;
  gender: string;
  image: string;
  status: string;
  species: string;
  type: string;
  created: string;
};

// {
//   characters(page:1,filter:{}){
//     info {
//       count
//       pages
//       next
//       prev
//     }
//     results {
//       image
//       name
//       species
//     }
//   }
// }

// export const GetCharactersDocument = gql`
//   query GetCharacters($page: Int, $filter: FilterCharacter) {
//     characters(page: $page, filter: $filter) {
//       results {
//         ...CharacterGridList_character
//       }
//       info {
//         ...pageInfo
//       }
//     }
//   }
// `;
