import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useNavigate,
} from 'react-router-dom';
import { getCustomer } from '../helpers/getCustomer';
import { Form } from 'react-router-dom';
import ClientForm from '../components/Form';
import { Client } from '../types/types';
import { updateCustomer } from '../helpers/updateCustomer';
export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  const customer = await getCustomer(id!);
  return customer;
};

export const action = async ({ request, params }: LoaderFunctionArgs) => {
  const body = Object.fromEntries(await request.formData()) as Omit<
    Client,
    '_id'
  >;
  const data = {
    ...body,
    _id: params.id!,
  };
  await updateCustomer(data);
  return redirect('/');
};

const EditClient = () => {
  const customer = useLoaderData() as Client;
  const navigate = useNavigate();
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate('/')}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        <Form method="post" noValidate>
          <ClientForm client={customer} />
          <button
            type="submit"
            className="mt-5 bg-blue-800 p-3 uppercase font-bold text-white text-lg"
          >
            Guardar cambios
          </button>
        </Form>
      </div>
    </>
  );
};
export default EditClient;
