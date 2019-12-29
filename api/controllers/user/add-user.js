module.exports = {


  friendlyName: 'Add user',


  description: 'Add new user',


  inputs: {
    email: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
      minLength:6,
    },
    username: {
      type: 'string',
      required: true,
      unique: true,
      minLength:4,
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    let emails=await User.find({
      where: {email:inputs.email},
      select: ['id','username']
    });
    let usernames=await User.find({
      where: {username:inputs.username},
      select: ['id','username']
    });
    sails.log('email',emails.length);
    sails.log('usernames',usernames.length);
    if(emails.length>0)  return{
        statusCode: 409,
        description: 'Email not uniq',
    };
    if(usernames.length>0)  return{
      statusCode: 409,
      description: 'Username not uniq',
    };
   let newUser= await User.create(inputs).fetch();
   if (newUser){
    return {
      statusCode: 200,
      description: 'User create',
      id:newUser.id,
    };} else return {
     statusCode: 409,
     description: 'Could not create User. Check parameters',
    };
  }


};
