import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import Client from '../components/Client';
import { getCustomers } from '../helpers/getCustomers';
import { Client as ClientType } from '../types/types';

export const loader = async (args: LoaderFunctionArgs) => {
  const customers = await getCustomers();
  return customers;
};

const Index = () => {
  const clients = useLoaderData() as ClientType[];
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clients.length ? (
        <table className="w-full bg-white shadw mt-5 table-auto">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => {
              return <Client client={client} />;
            })}
          </tbody>
        </table>
      ) : (
        <p>No hay Clientes</p>
      )}
    </>
  );
};
export default Index;
