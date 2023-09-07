import CustomerImg from "./customerSupport.avif"
const CustomerSupport = () => {
    return ( 
            <>
    
    <section className=" DocsRound big-round mb-20 md:pt-10 pt-0">
               
               <div className="grid md:grid-cols-2 gap-4 grid-cols-1 md:mx-10 mx-6">
                <div className="md:order-1 order-2">
               <p className=" py-4 px-2 rounded-lg bg-blue-600 w-20  text-center cursor-pointer md:mt-4 mt-16"><i className="fa fa-clone text-white text-2xl"></i></p>
              
               <p className="mt-12  mb-6 text-xs text-blue-500 font-bold">#1 SUPPORT IN SOFTWARE</p>
                                          
                    
                        <p className="md:text-6xl text-3xl font-bold md:w-96 w-80 ">24/7 real-time support.</p>
                        <p className="my-10 md:w-96">ClickUp has the highest rated client support in software. We're here 24 hours a day, every day of the week, including holidays.</p>
                        <div className="flex flex-wrap mr-10 ">
                            
                           <div className="flex mr-6 my-3"><span className="mr-4"><i className="fa fa-check-circle-o text-2xl text-blue-600"></i></span> <p className="mt-1">Email Support</p></div>
                            <div className="flex mr-6 my-3"><span className="mr-4"><i className="fa fa-check-circle-o text-2xl text-blue-600"></i></span>  <p className="mt-1 ">Live Chat for Unlimited Plan+ Workspaces</p></div>
                           
                            <div className="flex mr-6 my-3"> <span className="mr-4"><i className="fa fa-check-circle-o text-2xl text-blue-600"></i></span><p className="mt-1">Frequent Webinars</p>
                            </div>
                            

                        </div>
                        
               </div>
               <div className=" mb:mt-20 mt-5  md:mb-0 mb-6 rounded-lg order2 block md:order-2 order-1">
                    {/* <video autoPlay loop muted playsInline className="md:rounded-xl md:block hidden">
                            <source src={DownloadVid} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video> */}
                    <img src={CustomerImg} alt="ProjectImg" className=" mb-4 rounded-lg"/>
                </div>
            </div>
    </section>
            </> 
    );
}
 
export default CustomerSupport;