import React from 'react'

const Details = ({items}) => {
  return (
    <>
       { items?.map((item,id)=>(
        <div className="five wide column">
                    <div className="ui link cards" key={id} style={{alignItems:"center"}}>
                        <div className="card">
                            <div className="image">
                                <img  src={item.flag} alt={item.name} />
                            </div>
                            <div className="content">
                                <div className="header">Country: {item.name}</div>
                                <div className="content" style={{marginLeft:"3%"}}>
                                    <ul>
                                        <li className="meta price">Capital : {item.capital}</li>
                                        <li className="meta price">Region : {item.region}</li>
                                        <li className="meta price">Sub Region : {item.subregion}</li>
                                        <li className="meta price">Total Population: {item.population}</li>
                                    </ul>
                                    <ul>
                                        <li className="meta price">Borders:</li>
                                        {
                                            item.borders.map((border)=>
                                              
                                                (
                                                    <li>{border}</li>
                                                )
                                                   
                                            )
                                        }
                                    </ul>
                                    <ul>
                                        <li className="meta price">Languages:</li>
                                        {
                                            item.languages.map((language)=>
                                                (
                                                    <ul>
                                                        <li>{language.name}</li>
                                                    </ul>
                                                )
                                                   
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        ))}
    </>
  )
}

export default Details
