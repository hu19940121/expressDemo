const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
// app.get("/", (req, res) => {
//   res.send(`
//     <html>
//       <head>
//         <title>哈哈哈哈</title>
//       </head>
//       <body>
//         <h1>213213</h1>
//         <p>恭喜</p>
//       </body>
//     </html>
//   `);
// });
// app.listen(80, () => console.log("Server ready on port 80."));
app.listen(process.env.PORT || 3000);
module.exports = app;