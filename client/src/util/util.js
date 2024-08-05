 const blogData = {};
 const registerData = {};
 const loginData = {};

blogData.fields = {
    name: 'name',
    nickName: 'nickName',
    age: 'age',
    title: 'title',
    imageUrl: 'imageUrl',
    content: 'content'
}

 blogData.form = {
    [blogData.fields.name]: '',
    [blogData.fields.nickName]: '',
    [blogData.fields.age]: '',
    [blogData.fields.title]: '',
    [blogData.fields.imageUrl]: '',
    [blogData.fields.content]: '',
}

registerData.fields = {
    username: 'username',
    email: 'email',
    password: 'password',
    rePassword: 'rePassword'
}

registerData.form = {
    [registerData.fields.username]: '',
    [registerData.fields.email]: '',
    [registerData.fields.password]: '',
    [registerData.fields.rePassword]: ''
}


loginData.fields = {
    email: 'email',
    password: 'password'
}

loginData.form = {
    [loginData.fields.email]: '',
    [loginData.fields.password]: ''
}

export {
    blogData,
    registerData,
    loginData
}