import React from 'react'






const Experience = ({ data }) => {
    return (
        <ol class="relative border-s border-indigo-950 ">   
            {
                data.slice(0, 2).map((item,index) =>(
                    <React.Fragment key={index}>
                        <li className="mb-0 -mt-4 ms-4"></li>
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-indigo-950 font-bold font-['Clash_Display']">{item.title} @ {item.institution}</time>
                            <h3 className="text-sm text-indigo-950/50">{item.dateIn} - {item.dateOut}</h3>
                            <p className="text-base text-indigo-950">{item.description}</p>
                        </li>
                    </React.Fragment>
                ))
            }              
            
        
    </ol>
    );
  };

export default Experience