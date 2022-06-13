import { useContext, useState } from "react";

export default function Register(){
    const namereg=/^[a-zA-Z]{3,10}$/;
    const emailRegex = /^[a-zA-Z0-9\.]+\@[a-z]{2,}\.[a-z]{3,}$/;
    const userRegex=/^[A-Za-z]*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const [user, setUser] = useState({
        name: "",
        email: "",
        userName:"",
        password: "",
        confirmPassword:"",
      });
      const [userErrors, setUserErrors] = useState({
        name: null,
        email: null,
        userName:null,
        password: null,
        confirmPassword:null,
      });

      const handleInputChange=(e)=>{
          
          if(e.target.name==="name"){
              setUser({
                  ...user,
                  name:e.target.value,
              })
          }else if(e.target.name==="email"){
            setUser({
                ...user,
                email:e.target.value,
            })
          }else if(e.target.name==="userName"){
            setUser({
                ...user,
                userName:e.target.value,
            })
          }else if(e.target.name==="password"){
            setUser({
                ...user,
                password:e.target.value,
            })
          }else if(e.target.name==="confirmPassword"){
            setUser({
                ...user,
                confirmPassword:e.target.value,
            })
          }

          switch(e.target.name){
            case "name" :
              setUserErrors({
                ...userErrors,
                name: namereg.test(e.target.value)===false ? "please enter your name" :null,
              });
              break;
              case "email" :
                setUserErrors({
                  ...userErrors,
                  email: emailRegex.test(e.target.value)===false ? "please enter valid mail" :null,
                });
                break;
                  case "userName" :
                setUserErrors({
                  ...userErrors,
                  userName: userRegex.test(e.target.value)===false ? "please no spaces" :null,
                });
                break;
                  case "password" :
                setUserErrors({
                  ...userErrors,
                  password: passwordRegex.test(e.target.value)===false ? "please enter upper and low case" :null,
                });
                break;
                  case "confirmPassword" :
                setUserErrors({
                  ...userErrors,
                  confirmPassword: (user.password!==e.target.value) ? "please repeat your password" :null,
                });
                break;
                default:
          break;
          }

      }

      const submitLogin = (e) => {
        e.preventDefault();

      };

      return (
        <>
          <h2> Register</h2>
          <br />
          <form onSubmit={(e) => submitLogin(e)}>
          <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                
               
                name="name"
                value={user.name}
                onChange={(e) => handleInputChange(e)}
              />
              <small className="text-danger">{userErrors.name}</small>
              
            </div><div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
               
               
                name="email"
                value={user.email}
                onChange={(e) => handleInputChange(e)}
              />
              <small className="text-danger">{userErrors.email}</small>
              
            </div><div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                
               
                name="userName"
                value={user.userName}
                onChange={(e) => handleInputChange(e)}
              />
              <small className="text-danger">{userErrors.userName}</small>
              
            </div>

           
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
               
                onChange={(e) => handleInputChange(e)}
                name="password"
                value={user.password}
              />
              <small className="text-danger">{userErrors.password}</small>
    
            </div><div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
               confim Password
              </label>
              <input
                type="password"
                className="form-control"
                
                onChange={(e) => handleInputChange(e)}
                name="confirmPassword"
                value={user.confirmPassword}
              />
              <small className="text-danger">{userErrors.confirmPassword}</small>
    
            </div>
    
    
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
          <br/><br/>
          
        </>
      );
}