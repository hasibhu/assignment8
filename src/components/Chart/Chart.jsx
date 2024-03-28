
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import UseLocalStorageReadData from '../../Hooks/UseLocalStorageReadData';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomShapeBarChart = () => {
    // Get local read data
    const { localReadData } = UseLocalStorageReadData();

    if (!localReadData) {
        return <div>Loading...</div>;
    }

    // Extract number of pages for each book
    const pageData = localReadData.map(book => ({
        name: book.bookName,
        totalPages: book.totalPages
    }));

    return (
        <div className="flex flex-col justify-center items-center  max-w-screen-xl">
            <h1>Chart</h1>
            <BarChart
                width={990}
                height={600}
                data={pageData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3 " />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {pageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default CustomShapeBarChart;
