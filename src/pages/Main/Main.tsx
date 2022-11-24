import React from 'react';

import { AddTask } from '../../components';
import { TodosList } from '../../features';

export const Main = () => (
  <>
    <AddTask />
    <TodosList />
  </>
);
