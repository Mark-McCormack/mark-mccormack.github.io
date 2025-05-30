import "./professional.css";

const Table = ({ title, columns, data }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col, index) => (
              <th key={index} className="border p-2 text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="border p-2">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ExternalCollaborations = () => (
  <Table
    title="External Collaborations"
    columns={["External Collaborator", "Nature of Collaboration", "Period", "Country"]}
    data={[
      {
        "External Collaborator": "John Doe",
        "Nature of Collaboration": "Research",
        Period: "2020-2023",
        Country: "USA",
      },
      {
        "External Collaborator": "John Doe",
        "Nature of Collaboration": "Research",
        Period: "2020-2023",
        Country: "USA",
      },
    ]}
  />
);

export const ResearchProjects = ({ title }) => (
  <Table
    title={title}
    columns={["Title", "Role", "Description", "Start Date", "End Date", "Amount"]}
    data={[
      {
        Title: "AI Research",
        Role: "Lead",
        Description: "Developing AI models",
        "Start Date": "2021",
        "End Date": "2024",
        Amount: "$500,000",
      },
      {
        Title: "AI Research",
        Role: "Lead",
        Description: "Developing AI models",
        "Start Date": "2021",
        "End Date": "2024",
        Amount: "$500,000",
      },
    ]}
  />
);

export const Publications = ({ category }) => (
  <Table
    title={`Publications - ${category}`}
    columns={["Year", "Name"]}
    data={[
      { Year: "2022", Name: "AI in Education" },
      { Year: "2022", Name: "AI in Education" },
    ]}
  />
);

export const CommitteesAndAssociations = () => (
  <Table
    title="Committees and Professional Associations"
    columns={["Committee", "Role", "Dates"]}
    data={[
      { Committee: "IEEE", Role: "Member", Dates: "2018-Present" },
      { Committee: "IEEE", Role: "Member", Dates: "2018-Present" },
    ]}
  />
);

export const EducationOrEmployment = ({ title }) => (
  <Table
    title={title}
    columns={["Institutions", "Award", "Dates"]}
    data={[
      { Institutions: "Harvard University", Award: "PhD in AI", Dates: "2015-2020" },
      { Institutions: "Harvard University", Award: "PhD in AI", Dates: "2015-2020" },
    ]}
  />
);

export const Teaching = () => (
  <Table
    title="Teaching"
    columns={["Module", "Institution", "URL", "Description", "Level"]}
    data={[
      {
        Module: "Machine Learning",
        Institution: "MIT",
        URL: "https://mit.edu/ml",
        Description: "Advanced ML techniques",
        Level: "Graduate",
      },
      {
        Module: "Machine Learning",
        Institution: "MIT",
        URL: "https://mit.edu/ml",
        Description: "Advanced ML techniques",
        Level: "Graduate",
      },
    ]}
  />
);
