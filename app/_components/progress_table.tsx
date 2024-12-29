import React from "react";

const ProgressTable = () => {
  const data = [
    { id: 1, goal: "Feature Launch", progress: 45, color: "#3B82F6" }, // Blue
    { id: 2, goal: "Disney Princess Pink Bag 18'", progress: 29, color: "#10B981" }, // Green
    { id: 3, goal: "Bathroom Essentials", progress: 18, color: "#8B5CF6" }, // Purple
    { id: 4, goal: "Apple Smartwatches", progress: 25, color: "#F59E0B" }, // Orange
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-xs font-semibold text-gray-600">#</th>
            <th className="py-3 px-4 text-xs font-semibold text-gray-600">Goal</th>
            <th className="py-3 px-4 text-xs font-semibold text-gray-600">Progress</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t border-gray-200">
              <td className="py-3 px-4 text-gray-700 text-xs">{item.id.toString().padStart(2, "0")}</td>
              <td className="py-3 px-4 text-gray-700 text-xs">{item.goal}</td>
              <td className="py-3 px-4">
                <div className="flex items-center space-x-4">
                  <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        width: `${item.progress}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${item.color}33`, // Transparent background
                      color: item.color,
                    }}
                  >
                    {item.progress}%
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressTable;
