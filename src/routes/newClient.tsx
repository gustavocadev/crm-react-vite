import {
  useNavigate,
  Form,
  ActionFunctionArgs,
  useActionData,
  redirect,
} from 'react-router-dom';
import Error from '../components/Error';
import ClientForm from '../components/Form';

export const action = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData()) as {
    nombre: string;
    telefono: string;
    email: string;
    empresa: string;
    notas: string;
  };
  console.log(data);

  const email = data.email;

  const errors = [];
  if (Object.values(data).includes('')) {
    errors.push('Todos los campos son requeridos');
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push('Email no valido');
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  const resp = await fetch('https://deno-server-rest-api.deno.dev/clients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
    }),
  });
  return redirect('/');
};

const NewClient = () => {
  const actionData = useActionData() as string[];
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
        {actionData?.length &&
          actionData.map((err, idx) => <Error key={idx}>{err}</Error>)}
        <Form method="post" noValidate>
          <ClientForm />
          <button
            type="submit"
            className="mt-5 bg-blue-800 p-3 uppercase font-bold text-white text-lg"
          >
            Regitrar Cliente
          </button>
        </Form>
      </div>
    </>
  );
};
export default NewClient;
