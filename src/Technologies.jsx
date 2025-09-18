import { technologies } from "./assets/img/data";
import { Tooltip, TooltipTrigger , TooltipContent } from "./components/ui/tooltip";

export default function Technologies(){

  return (
    <>
      <section className="flex flex-col lg:p-15 lg:gap-12 p-4 gap-3 bg-secondary font-montserrat text-primary">
        
        <div >
          <h1 className="lg:text-8xl text-4xl pb-3">Technologies/</h1>
        </div>

        {technologies.map((items) => (
          <div key={items.id} className="flex justify-between">

            <div className="lg:w-1/2 w-[35vw] ">
              <p className="lg:text-2xl font-bold">( {items.id} )</p>
            </div>
            
            <div className="lg:w-1/2 lg:mx-8 lg:p-4 p-2 mb-5 border-1 rounded-lg bg-primary/5 ">

              <div className="">
                <h1 className="lg:text-2xl text-xl lg:pb-2 font-bold ">{items.title}</h1>
                <p className="lg:text-xl lg-pb-5 pb-3">{items.description}</p>
                <div >
                {items.techs.map((logo, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <img className="lg:w-12 lg:h-12 w-9 h-9  mr-4 bg-primary/10 rounded-md object-cover" src={logo.src} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <h1>{logo.name}</h1>
                    </TooltipContent>
                  </Tooltip>
                ))}
                </div>
              </div>
            </div>
          </div>
        ))}

     <hr className="border-b-1 border-primary" />
    </section>
    </>
  );
}


