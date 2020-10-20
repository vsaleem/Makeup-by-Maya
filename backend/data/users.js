import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@permanentmakeupbymaya.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Victoria Saleem',
        email: 'developer@permanentmakeupbymaya.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users