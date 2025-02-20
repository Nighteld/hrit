const BookListGradeTwelve = () => {
    const tables = [
      {
        title: "Book Lists of Class 12 Law",
        data: [
          { id: 1, subject: "Compulsory Nepali", author: "Sajha" },
          { id: 2, subject: "Compulsory English", author: "Sajha" },
          { id: 3, subject: "Social Studies And Life Skills Education", author: "Sajha" },
          { id: 4, subject: "Nepalese Legal System", author: "Rewati Raj Tripathee" },
          { id: 5, subject: "Legal Drafting", author: "Som Kanta Bhandari" },
          { id: 6, subject: "Civil and Criminal Law and Justice", author: "Somkant Bhandari" },
          { id: 7, subject: "Human Rights/ General Law (Optional)", author: "" },
        ],
      },
      {
        title: "Book Lists of Class 12  Science",
        data: [
          { id: 1, subject: "Compulsory Nepali", author: "Curriculum Development Center Sajha Prakashan" },
          { id: 2, subject: "Compulsory English", author: "Curriculum Development Center Sajha Prakashan" },
          { id: 3, subject: "Upper Intermediate English Grammar", author: "C Publication" },
          { id: 4, subject: "Physics", author: "Ayam Publication (Manoj Kumar Thapa)" },
          { id: 5, subject: "Chemistry", author: "Aairawati Publication (Dr. Pathak and Others)" },
          { id: 6, subject: "Mathematics", author: "Sukunda Publication (BC Bajracharya)" },
          { id: 7, subject: "Biology", author: "C. Publication (Jib Gurung and Others)" },
          { id: 8, subject: "Computer Science", author: "Kosselli Publication" },
        ],
      },
      {
        title: "Book Lists of Class 12 Management ",
        data: [
          { id: 1, subject: "Mathematics", author: "Sukunda Publication, Advance Sarswati Publication" },
          { id: 2, subject: "Economics", author: "Boudha Publication, Advance Sarswati Publication" },
          { id: 3, subject: "Computer Science", author: "Kosselli Publication, Boudha Publication" },
          { id: 4, subject: "Accountancy", author: "Asmita Publication, Advance Saraswati Publication" },
          { id: 5, subject: "C. English", author: "Upper Intermediate English Grammar - C Publication" },
        ],
      },
    ];
  
    return (
      <div className="p-6">
        {tables.map((table, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{table.title}</h2>
            <table className="w-full border border-gray-300">
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
  
  export default BookListGradeTwelve;
  