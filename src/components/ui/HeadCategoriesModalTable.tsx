import React from "react";

type HeadCategoriesModalTableProps = {
  data: any;
};

const HeadCategoriesModalTable: React.FC<HeadCategoriesModalTableProps> = ({ data }) => {


  return (
    <table>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* {data.links.map((item: any, i: any) => {
          return <tr key={i}>{item.text}</tr>;
        })} */}
      </tbody>
    </table>
  );
};
export default HeadCategoriesModalTable;
