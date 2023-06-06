import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from "react-router-dom";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        // console.log(response);

        if (!response.payload.isAuth) {
          if (option) {
            Navigate("/login");
          }
        } else {
          if (adminRoute && !response.payload.isAuth) {
            Navigate("/");
          } else {
            if (option === false) {
              Navigate("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
