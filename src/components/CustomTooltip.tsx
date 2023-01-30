import React from "react";

const CustomTooltip = (props: any) => {
    const { payload, active, label } = props;

    if (active && payload && payload.length) {
      return (
        <div className='bg-white px-4 py-2 border-red-700 border-solid border-2 flex flex-col justify-center items-center rounded-md'>
           <span className='p-2 text-base font-bold justify-self-start'>{label}</span>
           <div>
            {
            payload[0].payload.list.map((title:string) => {
               return(
                  <div className='text-base text-center'>
                    {title}
                  </div>
                )
            })
            }
           </div>
        </div>
      );
    }
    return null;
};

export default CustomTooltip