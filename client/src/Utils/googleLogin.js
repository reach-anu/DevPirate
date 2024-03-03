import axios from "axios";

export const googleLogin = async (accessToken) => {
  const response = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/json",
      },
    }
  );
  return response.data;
};