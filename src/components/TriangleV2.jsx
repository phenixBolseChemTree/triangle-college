import { useState } from "react";

const Triangle = () => {
    const [leftA, setLeftA] = useState(0);
    const [rightB, setRightB] = useState(100);
    const [bottomC, setBottomC] = useState(100);

    const [leftFormA, setLeftFormA] = useState(0);
    const [rightFormB, setRightFormB] = useState(100);
    const [bottomFormC, setBottomFormC] = useState(100);

    const [perimeter, setPerimetr] = useState(200);

    const triangleStyle = {
        width: '0',
        height: '0',
        borderLeft: `${leftA}px solid transparent`,
        borderRight: `${rightB}px solid transparent`,
        borderBottom: `${bottomC}px solid red`,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLeftA(leftFormA);
        setRightB(rightFormB);
        setBottomC(bottomFormC);
    
        const per = parseFloat(leftFormA) + parseFloat(rightFormB) + parseFloat(bottomFormC);
        setPerimetr(per);
        console.log('Периметр треугольника:', per);
    }

    return (
        <>
        <div>
        <p className='text-gray-200 text-[20px]'>Разработка и тест оконного приложения для расчета периметра треугольника</p>
        <p className="text-[25px] mb-3">Периметр треугольника равен =  <span className="text-red-400 text-[40px]">{perimeter}</span></p>
        </div>
        <div className="flex bg-gray-800 w-[1000px] justify-between flex-row">
            <div className="zone-1 flex w-[500px] h-[500px] items-center justify-center">
                <form className="w-[278px]" onSubmit={handleSubmit} action="">
                    <div className="flex flex-col mb-5">
                        <p className="mt-2 mt-4">Лево</p>
                        <input className="rounded-xl p-2 bg-gray-600" value={leftFormA} onChange={(e) => setLeftFormA(e.target.value)} type="number" />
                        <p className="mt-2">Право</p>
                        <input className="rounded-xl p-2 bg-gray-600" value={rightFormB} onChange={(e) => setRightFormB(e.target.value)} type="number" />
                        <p className="mt-2">Нижний</p>
                        <input className="rounded-xl p-2 bg-gray-600" value={bottomFormC} onChange={(e) => setBottomFormC(e.target.value)} type="number" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Визуализировать треугольник</button>
                </form>
            </div>
            <div className="zone-2 grid place-content-center bg-gray-800     w-[500px] h-[500px]">
                <div className="opacity-80 pointer-events-none" style={triangleStyle} />
            </div>
            </div>
        </>
    );
};

export default Triangle;
