import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    { label: "Orange", color: "bg-orange-500", score: 5 },
    { label: "Apple", color: "bg-red-500", score: 3 },
    { label: "Banana", color: "bg-yellow-500", score: 1 },
    { label: "Lime", color: "bg-green-500", score: 4 },
    { label: "Cherry", color: "bg-red-500", score: 2.5 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.label,
      sortValue: (fruit) => fruit.label,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Score Squared",
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <>
      <div>
        {/* <Table data={data} config={config} keyFn={keyFn} /> */}
        <SortableTable data={data} config={config} keyFn={keyFn} />
      </div>
    </>
  );
}

export default TablePage;
