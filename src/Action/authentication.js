import axios from "axios";
import {
  SIGNUP,
  FANSIGNUP_SUCCESS,
  FANSIGNUP_FALL,
  TALENTSIGNUP_FALL,
  TALENTSIGNUP_SUCCESS,
} from "./action-type";

export const FanPage =
  ({ firstname, lastname, username, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      firstname,
      lastname,
      username,
      email,
      password,
    });

    try {
      const result = await axios.post(
        "http://wren.in:3200/api/sign-up/fan",
        body,
        config
      );
      console.log(result);
      dispatch({
        type: FANSIGNUP_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: FANSIGNUP_FALL,
      });
    }
  };

export const TalentPage =
  ({ firstname, lastname, username, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      firstname,
      lastname,
      username,
      email,
      password,
    });

    try {
      const result = await axios.post(
        "http://wren.in:3200/api/sign-up/talent",
        body,
        config
      );

      dispatch({
        type: TALENTSIGNUP_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      dispatch({
        type: TALENTSIGNUP_FALL,
      });
    }
  };

export const SignUp = () => (dispatch) => {
  dispatch({
    type: SIGNUP,
  });
};
