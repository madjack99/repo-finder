import { createEvent, createStore } from 'effector';

interface IStore {
  title: string;
  body: string;
  created_at: string;
  closed_at: string;
}

export const updateStore = createEvent<IStore[] | string>();

export const $store = createStore<IStore[] | string>([]);

$store.on(updateStore, (state, newState) => newState);
