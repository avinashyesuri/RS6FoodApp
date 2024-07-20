// import React from 'react'

// const SubLandingPg = ({data}) => {       // **(props) --destructuring so, ({data})
//   return (
//     <div>
//         {data.map((food)=>(
//             <div className='card' key = {food.name}>
//                    <img src={food.image} alt={food.name}/>
//                    <div>
//                         <h1>{food.name}</h1>
//                         <p>{food.text}</p>
//                         <div>
//                             <h3>{food.price}</h3>
//                             <p>{food.type}</p>
//                         </div>
//                    </div> 
//             </div>
//         ))}
//     </div>
//   )
// }

// export default SubLandingPg









import React from 'react';

const SubLandingPg = ({ filtdata, URL }) => {
    const containerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Ensures 3 cards per row
        gap: '16px',
        padding: '60px',
        color:"white"
    };

    const cardStyle = {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        alignItems: 'center',
        padding: '22px',
        backgroundBlendMode:'overlay, normal',
        backdropFilter:'blur(13.1842px)'
    };

    const imgStyle = {
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginRight: '16px',
    };

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    };

    const priceTypeStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    return (
        <div style={containerStyle}>
            {filtdata?.map((food) => (
                <div className='card' key={food.name} style={cardStyle}>
                    <img src={URL + food.image} alt={food.name} style={imgStyle} />
                    <div style={contentStyle}>
                        <h1 style={{ margin: '0 0 8px 0' }}>{food.name}</h1>
                        <p style={{ margin: '0 0 16px 0' }}>{food.text}</p>
                        <div style={priceTypeStyle}>
                            <h3 style={{ margin: '0' }}>{food.price}</h3>
                            <p style={{ margin: '0' }}>{food.type}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubLandingPg;
