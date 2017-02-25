import Users from '../models/users';


export const newUser = (params) => {
  new Users({
    firstname: params.firstname,
    lastname: params.lastname,
    username: params.username,
    password: params.password,
    phone_number: params.phone_number,
    email: params.email,
    birthdate: params.birthdate,
    account_restrictions: params.account_restrictions,
    organization_id: params.organization_id
  })
  .save()
  return params.username
};

export const getUserByUsername = (params) => {
  //may need to modify back to params.username
  return new Users({ 
    username: params

  })
  .fetch()
  .then( function(user) {
    console.log(user, "user from fetch")
    return user;
  })
};

export const getUserById = (params) => {
  return new Users({ id: params.id }).fetch();
}
