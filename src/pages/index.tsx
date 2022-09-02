import * as React    from "react";
import type {HeadFC} from "gatsby";


const IndexPage = () => {
  return (
    <p>Hello gatsby homepage</p>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Klimfix | Strona główna</title>;
