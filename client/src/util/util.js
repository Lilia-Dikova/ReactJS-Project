 const blog = {};
 const register = {};
 const login = {};

blog.fields = {
    name: 'name',
    nickName: 'nickName',
    age: 'age',
    title: 'title',
    imageUrl: 'imageUrl',
    content: 'content'
}

 blog.form = {
    [blog.fields.name]: '',
    [blog.fields.nickName]: '',
    [blog.fields.age]: '',
    [blog.fields.title]: '',
    [blog.fields.imageUrl]: '',
    [blog.fields.content]: '',
}

register.fields = {
    username: 'username',
    email: 'email',
    password: 'password',
    rePassword: 'rePassword'
}

register.form = {
    [register.fields.username]: '',
    [register.fields.email]: '',
    [register.fields.password]: '',
    [register.fields.rePassword]: ''
}


login.fields = {
    email: 'email',
    password: 'password'
}

login.form = {
    [login.fields.email]: '',
    [login.fields.password]: ''
}

export {
    blog,
    register,
    login
}