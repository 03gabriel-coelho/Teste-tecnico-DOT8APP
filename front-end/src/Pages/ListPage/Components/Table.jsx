import React from "react";

const Table = ({ peoples }) => {
  return (
    <table id="tableList">
      <thead>
        <th></th>
        <th>NOME</th>
        <th>E-MAIL</th>
        <th>NASCIMENTO</th>
        <th className="lastColumn">TELEFONE</th>
      </thead>
      {peoples.map((people, index) => {
        return (
          <tbody key={people.id}>
            <td
              className={
                index === peoples.length - 1
                  ? "lastLine numberList"
                  : "numberList"
              }
            >
              {people.id}
            </td>
            <td className={index === peoples.length - 1 ? "lastLine" : ""}>
              {people.name}
            </td>
            <td className={index === peoples.length - 1 ? "lastLine" : ""}>
              {people.email}
            </td>
            <td className={index === peoples.length - 1 ? "lastLine" : ""}>
              {people.birthDate}
            </td>
            <td
              className={
                index === peoples.length - 1
                  ? "lastColumn lastLine"
                  : "lastColumn"
              }
            >
              {people.telephone}
            </td>
          </tbody>
        );
      })}
    </table>
  );
};

export default Table;
