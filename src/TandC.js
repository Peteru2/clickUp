import Navbar from "./Components/Navbar";
import { useEffect,useState } from "react";

const TandC = () => {

    
        const [fixed, setFixed] = useState(true);
        console.log(fixed);
    
        useEffect(() => {
            const handleScroll = () => {
                const footer = document.querySelector('footer');
                const termsList = document.querySelector('.termsList');
    
                if (footer && termsList) {
                    const footerTop = footer.offsetTop;
                    const windowHeight = window.innerHeight;
                    const scrollY = window.scrollY;
    
                    if (scrollY + windowHeight >= footerTop) {
                        setFixed(false);
                    } else {
                        setFixed(true);
                    }
                }
            };
    
            window.addEventListener('scroll', handleScroll);
    
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
    return ( 
        <>
            <Navbar />
            <section className="mt-20 w-full">
                <div className="md:mx-20 mx-8 text-justify">
                    <div className="grid grid-cols-8 ">
                        <div className="col-span-2 bg-white termsList mt-9 shadow-lg p-8 fixed">
                                <p className="text-xl text-gray-500 font-bold">Policies</p>
                                <div className="px-2">
                                        <p className="border-b-2 py-2 my-2 border-dashed text-gray-400  text-lg border-blue-500 px-2">Privacy Policy</p>
                                        <p className="border-b-2  py-2 my-2 border-dashed text-gray-400  text-lg border-blue-500 px-2">Security Policy</p>
                                        <p className="border-b-2  py-2 my-2 border-dashed text-gray-400  text-lg border-blue-500 px-2">Cookies Policy</p>
                                        <p className="border-b-2  py-2 my-2 border-dashed text-white  text-lg border-blue-500 bg-blue-500 rounded-md px-2">Terms of Service</p>
                                        <p className="border-b-2  py-2 my-2 border-dashed text-gray-400  text-lg border-blue-500 px-2">Data Protection Addendum</p>
                                        <p className="border-b-2  py-2 my-2 border-dashed text-gray-400  text-lg border-blue-500 px-2">Subprocessors</p>
                                        <p className="border-b-2  py-2 my-2 border-dashed text-gray-400  text-lg border-blue-500 px-2">ClickUp AI Additional Terms</p>

                                        
                                </div>
                        </div>
                        <aside className="col-span-8 terms mt-16">
                            <p className="text-center justidy-center text-2xl font-bold text-gray-600 mb-4">Terms of Use</p>

                            <p className="text-gray-500 mb-4 text-lg font-bold">These Terms of Use are effective as of December 22, 2019.</p>

                            <p className="text-gray-500 mb-4 text-lg font-bold">These Terms of Service (“Terms”) govern your use of the free and paid services, software and websites (the “Service”) provided by Mango Technologies, Inc. DBA Clickup (“Clickup”, “we”, “our”, etc.), and any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links, created tasks and associated information, text, files and other content or materials (together, the “Content”) uploaded, downloaded, or appearing on our websites or applications.</p>

                            <p className="text-gray-500 mb-4 text-lg font-bold">Our Privacy Policy explains the way we collect and use your information. By using the Service, you agree to be bound by these Terms and our Privacy Policy. If you’re using our Service on behalf of an organization or entity (“Organization”), then you are agreeing to these Terms on behalf of that Organization and you represent and warrant that you have the authority to bind the Organization to these Terms. In that case, “you” and “your” refers to that Organization.</p>

                            <p className="text-gray-500 mb-4 text-lg font-bold">Our Terms and Privacy Policy affect your legal rights and obligations. If you do not agree to be bound by all of these, do not access or use our Service.</p>

                            <p className="text-gray-500 mb-4 text-lg font-bold">ARBITRATION NOTICE: UNLESS YOU OPT-OUT AND EXCEPT FOR CERTAIN TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION SECTION BELOW, YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p>

                            <p className="text-gray-600 mb-4 text-xl font-bold">Your User Account and Content</p>

                            <ol  className="md:px-10 px-3" style={{ listStyleType: "decimal" }}>
                                <li className="text-gray-500 mb-4 text-lg ">You must provide accurate information when you create your Clickup account.</li>
                                <li className="text-gray-500 mb-4 text-lg ">You are responsible for safeguarding the password and for all activities that occur under your account. You should notify us immediately if you become aware of any breach of security or unauthorized use of your account.</li>
                                <li className="text-gray-500 mb-4 text-lg ">You may never use another user’s account without permission.</li>
                                <li className="text-gray-500 mb-4 text-lg ">You may not disassemble, decompile, or reverse engineer the Service or attempt or assist anyone else to do so, unless such restriction is prohibited by law.</li>
                                <li className="text-gray-500 mb-4 text-lg ">Your account must be registered by a human. Accounts registered by "bots" or other automated methods are not permitted. Additionally, you must be 13 years of age or older.</li>
                                <li className="text-gray-500 mb-4 text-lg ">You may not use the Service for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations (for example, federal, state, local and provincial) applicable to your use of the Service and your Content (defined below), including but not limited to, copyright laws.</li>
                                <li className="text-gray-500 mb-4 text-lg ">In the event you have a paid account, fees are non-refundable except as required by law or in the event that you cancel your account during the 30-day money back guarantee period. You will pay all applicable fees when due and, if such fees are being paid via credit card or other electronic means, you authorize us to charge such fees using your selected payment method. By default, customer accounts are set to auto-renew and we may automatically charge you for such renewal on or after the renewal date associated with your account unless you have cancelled the Service prior to its renewal date. We may revise fee rates for the Service from time to time and will provide you with email notice of any changes in fees at least thirty (30) days prior to your Service renewal date. You are responsible for providing complete and accurate billing information to Clickup. We may suspend or terminate your use of the Service if fees become past due. You are responsible for all taxes (excluding taxes on our net income), and we will charge tax if required to do so by law.

                                <p className="mt-5">If you require the use of a purchase order or purchase order number, you (a) must provide the purchase order number at the time of purchase; and (b) agree that any terms and conditions on your purchase order will not apply and are null and void.
                                </p>
                                </li>




                            </ol>

                        </aside>
                    </div>
                </div>
                <footer className="bg-gray-200 w-full  md:px-20 px-10 py-10">
                    <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
                        <ul className="text-sm">
                            <li><b>CLICKUP</b></li>
                            <li className="my-4 text-gray-800 hover:text-blue-500">Download</li>
                            <li className="my-4 text-gray-800">Careers</li>
                            <li className="my-4 text-gray-800">About Us</li>
                            <li className="my-4 text-gray-800">Product Roadmaps</li>
                            <li className="my-4 text-gray-800">Press</li>
                        </ul>
                        <ul className="text-sm">
                            <li><b>RESOURCES</b></li>
                            <li className="my-4 text-gray-800 hover:text-blue-500">Download</li>
                            <li className="my-4 text-gray-800">Careers</li>
                            <li className="my-4 text-gray-800">About Us</li>
                            <li className="my-4 text-gray-800">Product Roadmaps</li>
                            <li className="my-4 text-gray-800">Press</li>
                        </ul>
                        <ul className="text-sm">
                            <li><b>FEATURES</b></li>
                             <li className="my-4 text-gray-800 hover:text-blue-500">Download</li>
                            <li className="my-4 text-gray-800">Careers</li>
                            <li className="my-4 text-gray-800">About Us</li>
                            <li className="my-4 text-gray-800">Product Roadmaps</li>
                            <li className="my-4 text-gray-800">Press</li>
                        </ul>
                        <ul className="text-sm">
                            <li><b>COMPARE</b></li>
                             <li className="my-4 text-gray-800 hover:text-blue-500">Download</li>
                            <li className="my-4 text-gray-800">Careers</li>
                            <li className="my-4 text-gray-800">About Us</li>
                            <li className="my-4 text-gray-800">Product Roadmaps</li>
                            <li className="my-4 text-gray-800">Press</li>
                        </ul>
                        <ul className="text-sm">
                            <li><b>LEARN</b></li>
                            <li className="my-4 text-gray-800 hover:text-blue-500">Download</li>
                            <li className="my-4 text-gray-800">Careers</li>
                            <li className="my-4 text-gray-800">About Us</li>
                            <li className="my-4 text-gray-800">Product Roadmaps</li>
                            <li className="my-4 text-gray-800">Press</li>
                        </ul>
                        </div>
                </footer>
            </section>
        </>
     );
}
 
export default TandC;