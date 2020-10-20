import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Yönetici',
    email: 'yonetici@abidinkumas.com',
    password: bcrypt.hashSync('derdo31', 10),
    isAdmin: true
  },
  {
    name: 'Çatakmiray Nurbişeng Şenşebek',
    email: 'sensebek@abidinkumas.com',
    password: bcrypt.hashSync('derdo31', 10)
  },
  {
    name: 'Kolpaçino Özgür',
    email: 'ozgur@abidinkumas.com',
    password: bcrypt.hashSync('derdo31', 10)
  }
]

export default users;