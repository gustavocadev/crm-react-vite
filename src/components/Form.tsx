import { Client } from '../types/types';

type Props = {
  client?: Client;
};
const Form = ({ client }: Props) => {
  return (
    <>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del Cliente"
          defaultValue={client?.name}
          name="name"
        />
      </div>
      <div className="mb-4">
        <label className="text-gray-800" htmlFor="empresa">
          Empresa:
        </label>
        <input
          id="empresa"
          type="text"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Empresa del Cliente"
          defaultValue={client?.company}
          name="company"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="email">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Email del Cliente"
          defaultValue={client?.email}
          name="email"
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="telefono">
          Teléfono:
        </label>
        <input
          id="telefono"
          type="tel"
          className="mt-2 block w-full p-3 bg-gray-50"
          placeholder="Teléfono del Cliente"
          name="telephone"
          defaultValue={client?.telephone}
        />
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="notas">
          Notas:
        </label>
        <textarea
          // as="textarea"
          id="notas"
          // type="text"
          className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Notas del Cliente"
          name="notes"
          defaultValue={client?.notes}
        />
      </div>
    </>
  );
};
export default Form;
