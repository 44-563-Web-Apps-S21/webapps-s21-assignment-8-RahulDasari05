const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML
      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table style="width:100%">')
      res.write('<tr><th>Location</th><th>Hours</th><th>Estimate Budget</th></tr>')
      res.write('<tr><td>Paris</td><td>10</td><td>500$</td></tr>')    
      res.write('<tr><td>London</td><td>12</td><td>1200$</td></tr>')
      res.write('<tr><td>NewYork</td><td>22</td><td>900$</td></tr>')
      res.write('<tr><td>Delhi</td><td>48</td><td>200$</td></tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
     }                           
)
server.listen(port, hostname, () => {   //Start the server
console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})