import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            label: "1. Can I use React JS",
            content: "2.1 Yes, you can use React JS Yes, you can use React JS Yes, you can use React JS Yes, you can use React JS Yes, you can use React JS",
        },
        {
            label: "2. Can I use Next JS",
            content: "2.1 Yes, you can use Next JS Yes, you can use Next JS Yes, you can use Next JS Yes, you can use Next JS Yes, you can use Next JS",
        },
        {
            label: "3. Can I use Tailwind CSS",
            content: "3.1 Yes, you can use Tailwind CSS Yes, you can use Tailwind CSS Yes, you can use Tailwind CSS Yes, you can use Tailwind CSS Yes, you can use Tailwind CSS",
        },
    ];

    return (<>
        <Accordion items={items} />
    </>);
}

export default App;