import { firebaseCreateUser } from "@/utils/firebase";
import React, { useReducer } from "react";

const Login = () => {
  const initialState = {
    name: null,
    loading: false,
    email: null,
    password: null,
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  function reducerFunction(currentState, action) {
    console.log(currentState, "state");
    console.log(action, "action");
    switch (action.type) {
      case "UPDATE_EMAIL":
        return {
          ...currentState,
          [action.field]: action.value,
        };
      case "Loading":
        return {
          ...currentState,
          [action.field]: action.value,
        };
    }

    throw Error("Unknown action.");
  }

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "Loading",
      field: "loading",
      value: true,
    });

    const response = firebaseCreateUser(state.email, state.password);
    dispatch({
      type: "Loading",
      field: "loading",
      value: true,
    });
    dispatch({
      type: "UPDATE_EMAIL",
      field: "email",
      value: "",
    });
    dispatch({
      type: "UPDATE_EMAIL",
      field: "password",
      value: "",
    });
    console.log(response, "resonses");
  };
  console.log("re-render");
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handlerFormSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_EMAIL",
                    field: "email",
                    value: e.target.value,
                  })
                }
                value={state.email}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_EMAIL",
                    field: "password",
                    value: e.target.value,
                  })
                }
                value={state.password}
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {state.loading ? "Loading ..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
