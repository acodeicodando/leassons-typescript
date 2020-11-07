

interface TechsInterface {
  title: String;
  experience: Number;
}

interface CreateUserInterface {
  name: String;
  email: String;
  password: String;
  techs: Array<String | TechsInterface>
}

export default function createUser({ name, email, password, techs }: CreateUserInterface) {
  const user = {
    name,
    email,
    password,
    techs
  }

  return user;
}