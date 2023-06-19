import { useState } from 'react';
import { User } from 'renderer/utils/types';
import { useGetUsers } from './use-get-users';

export function useSelectedUsers(currentUsers: User[]) {
  const { data: users = [] } = useGetUsers();
  const [selectedUsers, setSeletectUsers] = useState<User[]>(currentUsers);
  
  const addUser = (addedUser: User) => {
    setSeletectUsers([...selectedUsers, addedUser]);
  };

  const deleteUser = (removedUser: User) => {
    setSeletectUsers(selectedUsers.filter((user) => user.id !== removedUser.id));
  };

  return {
    users: users
      .filter(
        (user) => !selectedUsers.some((selectedUser) => selectedUser.id === user.id)
      )
      .sort((a, b) => a.id - b.id),
    selectedUsers,
    addUser,
    deleteUser,
  };
}
