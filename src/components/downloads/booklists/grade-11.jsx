
const BookListGradeEleven = () => {
  const tables = [
    {
      id: 1,
      title: "Book Lists of Class 11 Law",

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
      title: "Book Lists of Class 11 Science",

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
      title: "Book Lists of Class 11 Management",

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
    <div className="p-6">
        {tables.map((table, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{table.title}</h2>
            <table className="w-full border border-gray-300 ">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">SN</th>
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Publication (Author)</th>
                </tr>
              </thead>
              <tbody>
                {table.data.map((row,index) => (
                  <tr key={row.id} className="border">
                    <td className="border p-2 text-center">{index+1}</td>
                    <td className="border p-2">{row.subject}</td>
                    <td className="border p-2">{row.author}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
  );
};

export default BookListGradeEleven;
