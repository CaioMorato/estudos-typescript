import axios from 'axios';

const URL = 'https://api.github.com/users/caiomorato';

axios.get(URL).then((response) => {
  const { data } = response;
  const { id, name, hireable } = data;

  console.log(
    `ID do usuário: ${id}`,
    `Nome do usuário: ${name}`,
    `Usuário disponível pra contratação: ${hireable}`
  );
});
