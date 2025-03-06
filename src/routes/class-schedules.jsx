// Get current courses based on active tab

export default function ClassSchedules() {
  const classRoutine = [
    {
      time: "6:20-7:00",
      subjects: [
        "Cont. Society - H.K.R.",
        "C. English - P.B.",
        "C. English - N.A.",
        "Economics - B.J.",
        "Accountancy",
      ],
    },
    {
      time: "7:00-7:40",
      subjects: [
        "C. English - P.B.",
        "Economics - B.J.",
        "M. English - A.Y.",
        "C. English - N.A.",
        "C. Nepali - DR. C.M.S.",
      ],
    },
    {
      time: "7:40-7:45",
      subjects: [
        "Short Break",
        "Short Break",
        "Short Break",
        "Short Break",
        "Short Break",
      ],
    },
    {
      time: "7:45-8:25",
      subjects: [
        "M. English - A.Y.",
        "Marketing - K.P.",
        "Economics - B.J.",
        "C. Nepali - DR. C.M.S.",
        "C. English - N.A.",
      ],
    },
    {
      time: "8:25-8:55",
      subjects: [
        "Short Break",
        "Short Break",
        "Short Break",
        "Short Break",
        "Short Break",
      ],
    },
    {
      time: "8:55-9:35",
      subjects: [
        "Economics - B.J.",
        "Accountancy - S.N.",
        "General Law - P.N.R.",
        "Business Studies - M.S.",
        "Business Studies - M.S.",
      ],
    },
    {
      time: "9:35-10:15",
      subjects: [
        "General Law - P.N.R.",
        "Business Studies - M.S.",
        "Hotel Management - K.Y.",
        "C. Nepali - P.N.R.",
        "Economics - S.N.",
      ],
    },
  ];

  return (
    <div className="container">
      <h1 className="mb-6 text-2xl font-bold">
        <span className="bg-text-next">Class</span> Schedules
      </h1>
      <div className="overflow-x-auto p-4">
        <table className="w-full text-sm text-left">
          <thead className="text-white bg-[#016690] whitespace-nowrap">
            <tr>
              <th className="py-3 px-6 font-semibold">SN</th>

              <th className="py-3 px-6 font-semibold">Time</th>
              <th className="py-3 px-6 font-semibold">12 LAW</th>
              <th className="py-3 px-6 font-semibold">12 MGMT</th>
              <th className="py-3 px-6 font-semibold">11 LAW</th>
              <th className="py-3 px-6 font-semibold">11 MGMT A</th>
              <th className="py-3 px-6 font-semibold">11 MGMT B</th>
            </tr>
          </thead>
          <tbody>
            {classRoutine.map((row, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-[#e6f3f8] ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50 leading-6"
                }`}
              >
                <td className="py-4 px-6 font-medium">{index + 1}</td>

                <td className="py-4 px-6">{row.time}</td>
                {row.subjects.map((subject, subIndex) => (
                  <td key={subIndex} className="py-4 px-6">
                    {subject}
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
