const exportWebToPdf = require("export-web-to-pdf");
const fs = require('fs');

exportWebToPdf("http://localhost:3000/").then((data) => {
    fs.writeFile('./report.pdf', data, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
});
