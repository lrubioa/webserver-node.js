// Importing required modules
const http = require("http");
const fs = require("fs");

// server configuration
const hostname = "127.0.0.1"
const port = "3200"

// reading the html files
const homePage = fs.readFileSync("index.html")
const showcasePage = fs.readFileSync("showcase.html")
const servicesPage = fs.readFileSync("services.html")
const designersPage = fs.readFileSync("designers.html")
const packagesPage = fs.readFileSync("package.html")
const contactPage = fs.readFileSync("contact.html")

// creating http server
const server = http.createServer((req, res) => {

    // incoming requests
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(homePage);
    } 
    else if(req.url === "/showcase.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(showcasePage);
    }
    else if (req.url === "/services.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(servicesPage);
    }
    else if (req.url === "/designers.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(designersPage);
    }
    else if (req.url === "/package.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(packagesPage);
    }
    else if (req.url === "/contact.html"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(contactPage);
    }

    // sending responses
    else if (req.url.match("\.jpg$")){
        try{
            res.statusCode = 200;
            res.setHeader("Content-Type", "image/jpg");
            imgLoc = req.url.replace("/", "./");
            console.log(imgLoc)
            image = fs.readFileSync(imgLoc);
            res.end(image);
        }
        catch{
            res.statusCode = 404;
            res.write("404");
            console.log(req.url)
        }
    }

        else{
            res.statusCode = 404;
            res.write("404");
            console.log(req.url);
        }
        res.end()
}); 

// starting the server
server.listen(port, hostname, () => {
    console.log("Server is now running")
})