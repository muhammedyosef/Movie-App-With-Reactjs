import { useState } from "react";

export default function Login() {
    const mailreg=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const pwreg=/^[0-9]{8,20}$/;
    const [passwordShown, setPasswordShown] = useState(false);
  const [user, setUser] = useState({
    emailAddress: "",
    password: "",
  });
  const [userErrors, setUserErrors] = useState({
    emailAddress: null,
    password: null,
  });

const handleInputChange=(e)=>{

   if (e.target.name === "emailAddress") {
      setUser({
        ...user,
        emailAddress: e.target.value,
      });
      if (mailreg.test(user.emailAddress)) {
        
        
        setUserErrors({
          ...userErrors,emailAddress:null
        })
      } else {
        
        setUserErrors({
          ...userErrors,
          emailAddress: "please enter valid Mail",
        });
      }
    }
      if (e.target.name === "password") {
      setUser({
        ...user,
        password: e.target.value,
      });
      if (pwreg.test(e.target.value)) {
        setUserErrors({
          ...userErrors,
          password: null,
        });
      } else {
        setUserErrors({
          ...userErrors,
          password: "please enter 8 digits",
        });
      }

    }

    };

    const submitLogin = (e) => {
        e.preventDefault();
      };

      const shownPassword = () => {
        setPasswordShown(!passwordShown);
      };
  
    
  return (
    <>
      <h2> Login</h2>
      <br />
      <form onSubmit={(e) => submitLogin(e)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            // id="exampleInputEmail1"
           
            name="emailAddress"
            value={user.emailAddress}
            onChange={(e) => handleInputChange(e)}
          />
          <small className="text-danger">{userErrors.emailAddress}</small>
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type={passwordShown ? "text" : "password"} 
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleInputChange(e)}
            name="password"
            value={user.password}
          />
          <small className="text-danger">{userErrors.password}</small>

        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button type="button" className="btn btn-danger" onClick={shownPassword}>
            show 
        </button>
      </form>
      <br/><br/>
    
      
    </>
  );
}
