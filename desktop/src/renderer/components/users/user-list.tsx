import { useQuery } from 'react-query';
import api from 'renderer/utils/api';

function UserList() {
  const { data = [] } = useQuery('users', async () => {
    const res = await api.get('users');
    return res.data;
  });

  return (
    <div className="items-center flex flex-wrap justify-start mb-3.5">
      {data.map((user: any) => (
        <div className="align-middle mb-2">{user.name}</div>
      ))}
    </div>
  );
}

export default UserList;
