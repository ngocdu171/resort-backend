const Pool = require('pg').Pool

const connection = new Pool({
  user: 'nucfpujvjcnftr',
  host: 'ec2-54-75-248-49.eu-west-1.compute.amazonaws.com',
  database: 'd7isah8jgcfimg',
  password: 'c2bc49e6f44ea662280669328dafc95c1d0712df2dd871f64f4be380f016001c',
  port: 5432,
})
module.exports = connection;