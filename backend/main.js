import axios from "axios";

const client_id = "aiwv2yj9emncbpev02p14orjclc85q";
const secret = "a72778g8nkwoj7a8ceq1jjdsxb6lax";
const code = "npmyvnmg84svoapvetws75xz59fnih";
const grant_type = "authorization_code"
const redirect_uri = "http://localhost:3000/api/twitch";



async function get_token() {
  let response = await axios.post(
    `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&client_secret=${secret}&code=${code}&grant_type=${grant_type}&redirect_uri=${redirect_uri}`
  );
  console.log(response)
}

get_token()