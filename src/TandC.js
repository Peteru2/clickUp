import Navbar from "./Components/Navbar";
const TandC = () => {
    return ( 
        <>
            <Navbar />
            <section className="mt-20 w-full">
                <div className="mx-20">
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
                        </aside>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default TandC;