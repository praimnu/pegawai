import React from "react";
import axios from "axios";

export default class Person extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://localhost/restapi/api.php`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  handleDelete = (itemId: any) => {
    // Whatever you want to do with that item

    axios
      .delete("http://localhost/restapi/api.php", { data: { nip: itemId } })
      .then((response) => {
        console.log(response);
        window.location.reload();
      });
  };

  render() {
    return (
      <>
        {/* <!-- Table Section --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Card --> */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                  {/* <!-- Header --> */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                    <div>
                      <h2 className="text-xl text-left font-semibold text-gray-800">
                        Pegawai
                      </h2>
                      <p className="text-sm text-gray-600">
                        Tambah, Edit, Hapus Pegawai
                      </p>
                    </div>

                    <div>
                      <div className="inline-flex gap-x-2">
                        <a
                          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                          Tambah Pegawai
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End Header --> */}

                  {/* <!-- Table --> */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="ps-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              NIP
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Nama
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Alamat
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Tanggal Lahir
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Nama Ruangan
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                              Pilihan
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      {this.state.persons.map((person: any) => (
                        <tr className="hover:bg-gray-100" key={person.nip}>
                          <td className="size-px whitespace-nowrap">
                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div className="flex items-center gap-x-3">
                                {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"> */}
                                <div className="grow">{person.nip}</div>
                              </div>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div className="flex items-center gap-x-3">
                                {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"> */}
                                <div className="grow">{person.nama}</div>
                              </div>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div className="flex items-center gap-x-3">
                                {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"> */}
                                <div className="grow">{person.alamat}</div>
                              </div>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap">
                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div className="flex items-center gap-x-3">
                                {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"> */}
                                <div className="grow">{person.tgl_lahir}</div>
                              </div>
                            </div>
                          </td>

                          <td className="size-px whitespace-nowrap">
                            <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                              <div className="flex items-center gap-x-3">
                                {/* <img className="inline-block size-[38px] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar"> */}
                                <div className="grow">{person.id_ruangan}</div>
                              </div>
                            </div>
                          </td>

                          <td className="size-px whitespace-nowrap">
                            <div className="px-6 py-1.5">
                              <a
                                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                                href="#"
                              >
                                Edit
                              </a>
                              <button
                                className="pl-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                                onClick={() => this.handleDelete(person.nip)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* <!-- End Table --> */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Table Section --> */}
      </>
    );
  }
}
