import axios from "axios";

const fid = 2;
const server = "http://127.0.0.1:2281";
const response = await axios.get(`${server}/v1/castsByFid?fid=${fid}`);
try {
  console.log(`API Returned HTTP status ${response.status}`);
  console.log(
    `First Cast's text is ${response.messages[0].data.castAddBody.text}`
  );
} catch (e) {
  // Handle errors
  console.log(response);
}
