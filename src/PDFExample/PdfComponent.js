import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const PdfComponent = () => {
  const handleClick = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10,20,30);
    autoTable({ html: "#my-table" });
    doc.save("table.pdf");
    console.log("clicked");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>PDF Example</h2>
      <button onClick={handleClick}>Generate Checklist</button>
      <div id="my-table" style={{ textAlign: "center" }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>abdulkadirkhan547@gmail.com</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>Michael Smith</td>
              <td>abdulkadirk059@gmail.com</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>abdulkadirk343@gamil.com</td>
              <td>United Kingdom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PdfComponent;
