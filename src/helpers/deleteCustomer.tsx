export const deleteCustomer = async (id: string) => {
  const resp = await fetch(
    `https://deno-server-rest-api.deno.dev/clients/${id}`,
    {
      method: 'DELETE',
    }
  );
};
