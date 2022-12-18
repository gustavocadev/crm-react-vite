import { Client } from '../types/types';

export const getCustomers = async (): Promise<Client[]> => {
  const clients = await fetch('https://deno-server-rest-api.deno.dev/clients');
  const { documents } = await clients.json();
  return documents;
};
