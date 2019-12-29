module.exports = {


  friendlyName: 'Put avatar',


  description: 'upload and save avatar user',


  inputs: {
    id: {
      type: 'string',
      required: true,
    },
    file: {
      example: '===',
      required: true,
    },
  },


  exits: {},


  fn: async function (inputs) {
    inputs.file.upload({
      maxBytes: 10000000
    }, async function whenDone(err, uploadedFiles) {
      if (err) {
        return {
          statusCode: 409,
          description: err,
        };
      }

      // If no files were uploaded, respond with an error.
      if (uploadedFiles.length === 0) {
        return {
          statusCode: 409,
          description: 'No file was uploaded',
        };
      }
      // Generate a unique path where the avatar can be downloaded
      let pathImage = sails.config.custom.pathImage + inputs.id + uploadedFiles[0].getExtension();

      // Save the path where the avatar for a user can be accessed
      let updateUser= await User.updateOne({id:inputs.id})
        .set({
          avatar: inputs.pathImage
        });
      // sails.log('upd',updateUser);
      if(updateUser) {
        return this.res.ok();
      } else return {
        statusCode: 409,
        description:"Not update check id",
      };
    });


  }


};
