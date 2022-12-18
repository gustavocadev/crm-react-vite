import { Client } from '../types/types';

export const updateCustomer = async (data: Client) => {
  console.log(data);
  // todo: Solucionar la api, porque no actualiza bien
  try {
    const resp = await fetch(
      `https://deno-server-rest-api.deno.dev/clients/${data._id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const result = await resp.json();
    console.log(result);
  } catch (error) {
    console.log(error);
    console.log('Algo salió mal');
  }
};
