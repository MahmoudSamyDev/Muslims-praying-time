type CardProp = {
    details: {
        id: number,
        title: string,
        time: string,
        img: string
    }
}

function Card(props: CardProp) {
    const { title, time, img } = props.details;
    return (
        <div className="h-[360px] rounded-xl shadow relative bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-105 overflow-hidden" style={{ backgroundImage: `url(${img})` }}>
            <div className='absolute top-0 left-0 w-full h-full bg-[#000000a1] opacity-50 rounded-xl'></div>
            <main className='absolute bottom-0 w-full h-[40%] text-right bg-gradient-to-t from-[#041a4d59] to-transparent text-white px-[25px] flex flex-col justify-center gap-[40px]'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='text-2xl' dir="ltr">{time}</p>
            </main>
        </div>
    );
}

export default Card;
