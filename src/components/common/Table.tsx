interface Props {
  headers: string[];
  data: string[][];
}

const Table = ({headers,data}: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="text-left p-4 font-semibold text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>

          </thead>

          <tbody>

            {data.map((row, index) => (
              <tr
                key={index}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="p-4 text-gray-600"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Table;