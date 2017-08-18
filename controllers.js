var Docker = require('dockerode');
var docker = new Docker({host: 'http://35.193.23.248', port: 2375})

const listContainers = async function(req, res){
const listContainer = await docker.listContainers();
console.log(listContainer)
    res.json(listContainer);
}

const listImages = async function(req, res){
  const listImage = await docker.listImages();
    res.json(listImage);
} 

exports.images = listImages;
exports.containers = listContainers;