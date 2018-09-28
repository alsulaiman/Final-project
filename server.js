const app = require('express')();
const port = 5000; 

require("./modules/db")(app);
require("./routes/api-routes")(app);

app.listen(port, () => console.log(`Server started on port ${port}`));