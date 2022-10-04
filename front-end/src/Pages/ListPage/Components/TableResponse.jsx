import React from "react";
import { useState } from "react";

const TableResponse = ({ peoples }) => {
  const [number, setNumber] = useState(0);  

  return(
    <div id="tableListResponse">
      <div id="numbersTableResponse">
        {peoples.map((_people, index) => (
          <>
            <h2
              onClick={() => setNumber(index)}
              style={{ borderColor: number === index ? '#29abe2' : '#808080',
                color: number === index ? '#29abe2' : '#808080' }}
            >{ index + 1 }</h2>
          </>
        ))}
      </div>
      <div id="peoplesTableResponse">
        <div className="peopleTableResponse" style={{ marginTop: '15px' }}>
          <h2>NOME</h2>
          <h2 className="secondPosition">{ peoples[number].name }</h2>
        </div>
        <hr></hr>
        <div className="peopleTableResponse">
          <h2>E-MAIL</h2>
          <h2 className="secondPosition">{ peoples[number].email }</h2>
        </div>
        <hr></hr>
        <div className="peopleTableResponse">
          <h2>NASC.</h2>
          <h2 className="secondPosition">{ peoples[number].birthDate }</h2>
        </div>
        <hr></hr>
        <div className="peopleTableResponse">
          <h2>TEL.</h2>
          <h2 className="secondPosition">{ peoples[number].telephone }</h2>
        </div>
        <hr style={{ marginBottom: '30px' }}></hr>
      </div>
    </div>
  );
};

export default TableResponse;