import React from "react";

export const Input = ({ label, validasi, ...rest }) => {
  return (
    <React.Fragment>
      <div>
        <label htmlFor="exampleInputEmail1" className="form-label">
          {label}
        </label>
        <input {...rest} />
        <div id="emailHelp" className="form-text">
          {validasi}
        </div>
      </div>
    </React.Fragment>
  );
};

export const Button = ({ label, ...rest }) => {
  return (
    <div>
      <button {...rest}>{label}</button>
    </div>
  );
};

// export const Form = ({ formContent, ...rest }) => {
//   console.log(...rest)
//   return (
//     <form {...rest}>
//       {formContent}
//     </form>
//   );
// };
