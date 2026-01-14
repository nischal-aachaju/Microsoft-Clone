

const LandingPageComponent = ({ data }) => {
    return (
        <div className={`w-full ${data.bg}  h-160 flex justify-center`}>

            {/* Text */}
            <div className="h-full w-1/2 flex flex-col gap-6 justify-center pl-24">
                <h4 className={`h-8 w-fit text-center text-sm font-semibold px-2 pt-1 rounded ${data.tag_col}`}>
                    {data.tag}
                </h4>

                <h2 className="text-5xl font-semibold leading-tight">
                    {data.title} <br /> {data.subtitle}
                </h2>

                <p>{data.desc}</p>

                <button className="px-3 py-2 h-12 w-fit text-white font-semibold bg-blue-500 rounded-lg">
                    {data.button}
                </button>
            </div>

            {/* Image */}
            <div className="h-full w-1/2 flex justify-center items-center">
                <img src={data.img} className="h-120" />
            </div>
        </div>
    );
};

export default LandingPageComponent;
