import axios from "axios";

const client_id = "aiwv2yj9emncbpev02p14orjclc85q";
const secret = "a72778g8nkwoj7a8ceq1jjdsxb6lax";

const redirect_uri = "http://localhost:3000/api/twitch";
const response_type = "authorization_code";
const scopes = ["user:read:email"];

get_token();

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });

  let code = req.query.code;

  get_token(code);
}
async function get_token(code) {
  let response = await axios.post(
    `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&client_secret=${secret}&code=${code}&grant_type=authorization_code&redirect_uri=${redirect_uri}`
  );
  console.log(response.data);
}

