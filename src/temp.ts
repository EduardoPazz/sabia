// import { useEffect } from "react";
//
// useEffect(() => {
//   const word = result.split(" ")[0].trim();
//
//   console.log("starting to process syllables for ", word);
//
//   if (word.length == 0) {
//     return;
//   }
//
//   console.log("fetching syllables for", word);
//
//   fetch(`/api/${result}`)
//     .then((res) => res.json())
//     .then((res) => {
//       console.log({ res });
//       setSyllables(res["syllables"]);
//     });
// }, [result]);
