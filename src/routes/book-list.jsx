import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tableEleven, tableTwelve } from "@/helper/constant";
import { useState } from "react";
const colorTheme = {
  primary: "#016690",
  secondary: "#f9a427",
  light: "#e6f3f8",
  dark: "#014d6e",
  accent: "#ffc062",
};

// Function to export data to Excel
const exportToExcel = (data, filename) => {
  // Create a worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Courses");

  // Generate Excel file as an array buffer
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });

  // Create a Blob from the buffer
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create a download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.xlsx`;
  link.style.visibility = "hidden";

  // Append to document, trigger click, and clean up
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Function to export data to CSV
const exportToCSV = (data, filename) => {
  const headers = ["SN", "Subject", "Publication (Author)"];
  const csvRows = [
    headers.join(","),
    ...data.map((row) =>
      [row.sn, `"${row.subject}"`, `"${row.publication}"`].join(",")
    ),
  ];

  const csvString = csvRows.join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");

  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Get current courses based on active tab
const getCurrentCourses = () => {
  switch (activeTab) {
    case "law":
      return lawCourses;
    case "science":
      return scienceCourses;
    case "management":
      return managementCourses;
    default:
      return lawCourses;
  }
};

export default function BookList() {
  const [activeTab, setActiveTab] = useState("science");

  const { data: Law = [] } = tableEleven.find((item) => item.id === 1) || {};
  const { data: LawTwelve = [] } =
    tableTwelve.find((item) => item.id === 1) || {};

  const { data: Science = [] } =
    tableEleven.find((item) => item.id === 2) || {};
  const { data: ScienceTwelve = [] } =
    tableTwelve.find((item) => item.id === 2) || {};

  const { data: Management = [] } =
    tableEleven.find((item) => item.id === 3) || {};
  const { data: ManagementTwelve = [] } =
    tableTwelve.find((item) => item.id === 3) || {};

  return (
    <div className="container">
      <h1 className="mb-6 text-2xl font-bold">
        <span className="bg-text-next">Book</span> Lists
      </h1>
      <div className="">
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="mt-8"
        >
          <div className="flex justify-between items-center mb-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="law">Law</TabsTrigger>
              <TabsTrigger value="science">Science</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
            </TabsList>
            {/* <div className="flex gap-2">
            <Button
              onClick={() =>
                exportToExcel(getCurrentCourses(), `${activeTab}-courses`)
              }
              className="bg-[#f9a427] hover:bg-[#e89315] text-white"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Export Excel
            </Button>
            <Button
              onClick={() =>
                exportToCSV(getCurrentCourses(), `${activeTab}-courses`)
              }
              className="bg-[#016690] hover:bg-[#014d6e] text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div> */}
          </div>
          {/* <TabsContent value="law">
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="overflow-x-auto">
              <table>
              <thead className="whitespace-nowrap">

                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="w-16 font-bold p-2">SN</th>
                    <th className="font-bold p-2">Subject</th>
                    <th className="font-bold p-2">Publication (Author)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={row.id} className="border">
                      <td className="font-medium p-2 text-center">{index + 1}</td>
                      <td className="font-medium p-2">{row.subject}</td>
                      <td className="font-medium p-2">{row.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto">
              <table>
                <thead className="whitespace-nowrap">
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="w-16 font-bold p-2">SN</th>
                    <th className="font-bold p-2">Subject</th>
                    <th className="font-bold p-2">Publication (Author)</th>
                  </tr>
                </thead>
                <tbody>
                  {dataTwelve.map((row, index) => (
                    <tr key={row.id} className="border">
                      <td className="font-medium p-2 text-center">{index + 1}</td>
                      <td className="font-medium p-2">{row.subject}</td>
                      <td className="font-medium p-2">{row.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent> */}
          <TabsContent value="law" className="mt-0">
            <div className="grid md:grid-cols-2 gap-4 ">
              <div className="">
                <h2 className=" font-bold text-center">
                  <span className="bg-text-next">Grade</span> XI
                </h2>
                <CourseTable courses={Law} />
              </div>
              <div>
                <h2 className=" font-bold text-center ">
                  <span className="bg-text-next">Grade</span> XII
                </h2>
                <CourseTable courses={LawTwelve} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="science" className="mt-0">
            <div className="grid md:grid-cols-2 gap-4 ">
              <div className="">
                <h2 className=" font-bold text-center">
                  <span className="bg-text-next">Grade</span> XI
                </h2>
                <CourseTable courses={Science} />
              </div>
              <div>
                <h2 className=" font-bold text-center ">
                  <span className="bg-text-next">Grade</span> XII
                </h2>
                <CourseTable courses={ScienceTwelve} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="management" className="mt-0">
            <div className="grid md:grid-cols-2 gap-4 ">
              <div className="">
                <h2 className=" font-bold text-center">
                  <span className="bg-text-next">Grade</span> XI
                </h2>
                <CourseTable courses={Management} />
              </div>
              <div>
                <h2 className=" font-bold text-center ">
                  <span className="bg-text-next">Grade</span> XII
                </h2>
                <CourseTable courses={ManagementTwelve} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
const CourseTable = ({ courses }) => {
  return (
    <div className="overflow-x-auto">
      <div className="rounded-lg border border-gray-200 shadow-md">
        <table className="w-full text-sm text-left">
          <thead className="text-white bg-[#016690] whitespace-nowrap">
            <tr>
              <th className="py-3 px-6 font-semibold">SN</th>
              <th className="py-3 px-6 font-semibold">Subject</th>
              <th className="py-3 px-6 font-semibold">Publication (Author)</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-[#e6f3f8] ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50 leading-6"
                }`}
              >
                <td className="py-4 px-6 font-medium">{index + 1}</td>
                <td className="py-4 px-6">{course.subject}</td>
                <td className="py-4 px-6">{course.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
