import { InputText } from "@/components/InputText";
import { Title } from "@/components/Title";

export default function TeachersPage() {
  return (
    <div className="w-5/6 m-auto mt-20">
      <Title text="Professores" />

      <div className=" mt-10 sm:mt-0 ">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <InputText
                      name="nome"
                      id="nome"
                      label="Nome"
                      htmlFor="nome"
                    />

                    <InputText 
                      name="registro"
                      id="registro"
                      label="Registro"
                      htmlFor="registro"
                    />

                    <InputText
                      name="cpf"
                      id="cpf"
                      label="CPF"
                      htmlFor="cpf"
                    />

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="turno" className="block text-sm font-medium leading-6 text-gray-900">
                        Turno
                      </label>
                      <select
                        id="turno"
                        name="turno"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option>Manhã</option>
                        <option>Tarde</option>
                        <option>Noite</option>
                      </select>
                    </div>

                  </div>

                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}