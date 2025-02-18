
const BookListGradeEleven = () => {
  const tables = [
    {
      id: 1,
      data: [
        { subject: "Compulsory Nepali", author: "Sajha" },
        { subject: "Compulsory English", author: "Sajha" },
        { subject: "Compulsory Social Studies And Life Skills Education", author: "Sajha" },
        { subject: "Constitutional Law", author: "Dr. Basyal" },
        { subject: "Procedural Law", author: "Rewati Raj Tripathee & Prabin Maharjan" },
        { subject: "Jurisprudence and Legal Theories", author: "Nomita Agrawal" },
        { subject: "Human Rights/ General Law (Optional)", author: "" },
      ],
    },
    {
      id: 2,
      data: [
        { subject: "Compulsory Nepali", author: "Curriculum Development Center Sajha Prakashan" },
        { subject: "Compulsory English", author: "Curriculum Development Center Sajha Prakashan" },
        { subject: "C. English-Reference Book: Upper Intermediate English Grammar", author: "C Publication" },
        { subject: "Physics", author: "Ayam Publication (Manoj Kumar Thapa)" },
        { subject: "Chemistry", author: "Aairawati Publication (Dr. Pathak and Others)" },
        { subject: "Mathematics", author: "Sukunda Publication (BC Bajracharya)" },
        { subject: "Biology", author: "C. Publication (Jib Gurung and Others)" },
        { subject: "Computer Science", author: "Kosselli Publication" },
      ],
    },
    {
      id: 3,
      data: [
        { subject: "Economics", author: "Textbook: Advance Sarswati Publication | Reference Book: Asmita Publication" },
        { subject: "Business Studies", author: "Textbook: Boudha Publication | Reference Book: Asmita Publication" },
        { subject: "Computer Science", author: "Textbook: Kosselli Publication | Reference Book: Advance Sarswati" },
        { subject: "Accountancy", author: "Textbook: Asmita Publication | Reference Book: Advance Sarswati" },
        { subject: "C. English", author: "Reference Book: Upper Intermediate English Grammar- C Publication" },
      ],
    },
  ];

  return (
    <div className="p-4">
      {tables.map((table) => (
        <table key={table.id} className="w-full border border-gray-300 mb-6">
          <thead>
            <tr className="bg-green-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Publication (Author)</th>
            </tr>
          </thead>
          <tbody>
            {table.data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 text-blue-500 font-bold">{item.subject}</td>
                <td className="border px-4 py-2 text-orange-500">{item.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default BookListGradeEleven;
