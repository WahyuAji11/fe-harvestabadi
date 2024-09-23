const ServicesDetailCard = ({header, name, text}) => {
    return ( 
        <div className="card max-w-sm bg-gray-100 mb-3">
            <div className="card-header text-black bg-[#b8e4fc] p-2">{header}</div>
            <div className="card-body p-4">
                <h5 className="card-title text-black text-lg font-semibold">{name}</h5>
                <p className="card-text text-gray-700">
                {text}
                </p>
            </div>
        </div>
    );
}

export default ServicesDetailCard;