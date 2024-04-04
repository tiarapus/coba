import React from 'react'




const ArtikelCard = ({ img, title, category, date }) => {
    return (
        <a href="#">
            <div class="card w-full md:w-[234px] lg:w-80 object-cover ">
                    <img src={img} alt="" class="pb-2 rounded-xl h-50 md:h-[160px] lg:h-[200px] w-full object-cover"/>
                    <small>
                    {category} . {date}
                    </small>
                    <h3 class="font-['Clash_Display'] lg:text-left text-xl leading-none">
                        {title}
                    </h3>
                    
                    {/* <p class="text-justify">
                        {content}
                    </p> */}
            </div>
        </a>
    );
  };

export default ArtikelCard