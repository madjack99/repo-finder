import { createEvent, createStore } from 'effector';

export interface IStore {
  title: string;
  body: string;
  created_at: string;
  closed_at: string;
}

export const updateStore = createEvent<IStore[] | string>();

export const $store = createStore<IStore[] | string>(
  'Please fill username and repo title'
);

$store.on(updateStore, (state, newState) => newState);
