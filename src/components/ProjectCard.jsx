import React from 'react'




const ProjectCard = ({ img, institution, desc, dateIn, dateOut }) => {
    return (
      
        <div className="card flex flex-row items-center md:w-[358px] lg:w-[486px] rounded-xl bg-white/25 backdrop-blur-md border select-none hover:shadow hover:shadow-violet-600">
          <img src={img} alt="" className='hidden md:block w-28 h-full rounded-l-xl object-cover'/>
          <a href="">
            <div className=" bg-white/35 backdrop-blur-md h-full rounded-xl md:rounded-l-none md:rounded-r-xl">
              <div className='items-center py-4 px-4'>
                <h1 className="font-bold">
                  {institution}
                </h1>
                <small class="text-indigo-950/50">
                  {dateIn} - {dateOut}
                </small>
                <p className="text-base">
                  {desc}
                </p>
              </div>
            </div>
          </a>
        </div>
      
    );
  };

export default ProjectCard