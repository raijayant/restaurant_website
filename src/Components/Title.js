import React from 'react';

export default function Title({name, title}) {
  return (
    <div className="row">
        <div className="col-10 mx-auto my-2 text-center">
            <h3 className="text-capitalize-font-weight-bold">
               <strong> {name} {title} </strong>
            </h3>
        </div>
    </div>
  );
}
