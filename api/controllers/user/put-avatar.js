module.exports = {


  friendlyName: 'Put avatar',


  description: 'upload and save avatar user',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
  },


  exits: {},


  fn: async function (inputs) {
    let getUser= await User.findOne({id:inputs.id});
    if(!getUser) return {
      statusCode: 409,
      description:"Dont find user",
    };
    let reqFiles = this.req.file('file');
    //Error and crash???
   /* if (!reqFiles.hasOwnProperty('stream')) return {
      statusCode: 409,
      description: 'No file was uploaded',
    };*/
    let fileExt=reqFiles._files[0].stream.filename.split(".");

    fileExt = fileExt.length > 1 ? fileExt.pop() : "";
    let dirFile = require('path').resolve(sails.config.appPath, sails.config.custom.pathImage);
    let pathImage = sails.config.custom.pathImage + inputs.id + '.' + fileExt;
    let uploadedFiles = reqFiles.upload({
      dirname:dirFile,
      saveAs: inputs.id + '.' + fileExt,
      maxBytes: 10000000,
    });

    let updateUser = await User.updateOne({id: inputs.id})
      .set({
        avatar: pathImage,
      });
    if (updateUser) {
      return this.res.ok();
    } else return {
      statusCode: 409,
      description: "Not update check id",
    };

  }


};
