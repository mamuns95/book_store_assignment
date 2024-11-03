import React from "react";
import { Helmet } from "react-helmet";

const Header = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> BD Online Book Store </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>
        <div>
          <div className="flex">
            <table align="center">
              <tr>
                <td>
                  {" "}
                  <a href="/">
                    {" "}
                    <img
                      className="h-20 w-auto"
                      src="/src/assets/logo.png"
                    />{" "}
                  </a>{" "}
                </td>
                <td>
                  <h1
                    className="font-dela text-4xl"
                    style={{ color: "white", padding: "15px 15px 0px 15px" }}
                  >
                    BD Online Book Store
                  </h1>
                </td>
              </tr>
            </table>
          </div>
          <p
            className="font-poppins text-center text-x0"
            style={{ color: "white" }}
          >
            The Best Online Book Shop of Bangladesh 
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;