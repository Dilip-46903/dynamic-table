import React from "react";

export default function Table({ data }) {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 font-medium py-4">
        No data available
      </p>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Dynamic Table
      </h1>

      <div className="overflow-x-auto w-full max-w-4xl shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-sm md:text-base font-semibold uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-100 transition`}
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-3 text-sm md:text-base border-b border-gray-200"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
