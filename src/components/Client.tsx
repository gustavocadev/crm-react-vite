import { Link } from 'react-router-dom';
import { Client } from '../types/types';
import { deleteCustomer } from '../helpers/deleteCustomer';
type Props = {
  client: Client;
};
const Client = ({ client }: Props) => {
  const handleDelete = async () => {
    await deleteCustomer(client._id);
  };
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{client.name}</p>
        <p>{client.company}</p>
      </td>
      <td className="p-6">
        <p className=" text-gray-800">
          <span className="text-gray-800 uppercase font-bold">Email:</span>
          {client.email}
        </p>
        <p className=" text-gray-800">
          <span className="text-gray-800 uppercase font-bold">Tel:</span>
          {client.telephone}
        </p>
      </td>

      <td className="p-6 flex">
        <Link
          to={`clientes/${client._id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Editar
        </Link>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
export default Client;
