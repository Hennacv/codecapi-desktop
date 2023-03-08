import { useQuery } from 'react-query';
import api from 'renderer/utils/api';

function UserList() {
  const { data = [] } = useQuery('users', async () => {
    const res = await api.get('users');
    return res.data;
  });

  return (
    <div className="">
      {data.map((user: any) => (
        <div className="">{user.name}</div>
      ))}
    </div>
  );
}

export default UserList;
