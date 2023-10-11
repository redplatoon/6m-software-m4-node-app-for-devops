
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello I'm BQ! I have deployed my APP to Heroku");
}

module.exports = print;
