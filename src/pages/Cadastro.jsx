
export default function Cadastro({isOpen, closeCadastro}) {

    if(isOpen){

      return (
          <div className="z-10 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col py-10">
            <div className="bg-indigo-600 fixed flex px-20 py-10 flex-col rounded-xl">
              <div>
                <h2 className="text-center text-3xl font-bold leading-9 text-gray-900">
                  Cadastre-se aqui
                </h2>
              </div>
              <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6 text-sm font-medium" action="#" method="POST">
                <div>
                    <label htmlFor="user" className="block text-left  leading-6 text-gray-900">
                      Nome do usuário:
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md  py-1.5 text-gray-900 ring-inset  placeholder:text-gray-400  sm:text-sm "
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-left  leading-6 text-gray-900">
                      Email:
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Digite seu email válido..."
                        className="block w-full rounded-md  py-1.5 text-gray-900 ring-inset  placeholder:text-gray-400  sm:text-sm "
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block leading-6 text-gray-900">
                        Senha:
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block  leading-6 text-gray-900">
                        Confirme sua senha:
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-black text-white p-3 text-xl font-normal hover:bg-indigo-900 "
                    >
                      Cadastre-se
                    </button>
                  </div>
                </form>
              </div>
              <div onClick={closeCadastro} className="absolute top-3 right-6 text-2xl font-medium cursor-pointer">x</div>
            </div>
          </div>
      )
    }

    return null
  }

  