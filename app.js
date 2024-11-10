const express = require("express");
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5001;

app.use(express.static("dist"));

app.get('/version', (req, res) => {
  res.send('new feature skipped') // change this string to ensure a new version deployed
})
app.get('/test', (req, res) => {
  res.send('this should not be allowed to be pushed directly to main') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw ('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});


