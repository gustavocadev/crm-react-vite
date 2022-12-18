export const getCustomer = async (id: string) => {
  const resp = await fetch(
    `https://deno-server-rest-api.deno.dev/clients/${id}`
  );
  const { document } = await resp.json();
  return document;
};
