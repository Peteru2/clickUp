import logo from "./logo.svg"
import Security from "./SecurityBadge.svg"
import Support from "./SupportBadge.svg"
import Uptime from "./UptimeBadge.svg"
const Footer = () => {
    return ( 
        <>
                <footer className="Footer w-full border-top-2 border-gray-400   mt-16 px-10 py-20">
                    <div className="FooterTop">
                    <div className="FooterValue">
                        <img src={logo} alt="logo" className="FooterTopLogo" /> 
                            <div className="FooterTopText">
                                    <p className="text-gray-900 FootTopText font-bold">One app to replace them all.</p>
                                    <p className="mt-4">All of your work in one place: Tasks, Docs, Chat, Goals, & more.</p>
                            </div>
                            <div>
                                <button className="FooterTopButton py-3 px-7 rounded-md text-white">
                                    Free Forever
                                </button>
                            </div>
                    </div>
                    </div>
                    <div className="FooterFreeCover">
                        <p className="FooterFree flex  items-center"><img src={Support} alt="support" className="mr-3"/>Free training & 24-hours support</p>
                        <p className="FooterFree flex  items-center"><img src={Security} alt="security" className="mr-3"/>Serious about security & privacy</p>
                        <p className="FooterFree flex  items-center"><img src={Uptime} alt="uptime" className="mr-3"/>Highest levels of uptime the last 12 months</p>    
                    </div>
                    <div className="footerPad">                   
                        <div className="FooterGrid  pt-10 border-t-2 border-gray-400  ">
                        <ul className="text-sm text-white">
                            <li><b>CLICKUP</b></li>
                            <li className="my-4 text-gray-800 hover:text-blue-500 text-white">Download</li>
                            <li className="my-4 text-gray-800">Careers</li>
                            <li className="my-4 text-gray-800">About Us</li>
                            <li className="my-4 text-gray-800">Product Roadmaps</li>
                            <li className="my-4 text-gray-800">Press</li>
                            <li className="my-4 text-gray-800">Clients</li>
                            <li className="my-4 text-gray-800">Brand</li>
                            <li className="my-4 text-gray-800">Verified</li>
                            <li className="my-4 text-gray-800">Affilate & Referrals</li>
                            <li className="my-4 text-gray-800">Reviews</li>
                            <li className="my-4 text-gray-800">Status</li>

                        </ul>
                        <ul className="text-sm">
                            <li><b>RESOURCES</b></li>
                            <li className="my-4 text-gray-800 hover:text-blue-500">Help Docs</li>
                            <li className="my-4 text-gray-800">On-Demand Demo</li>
                            <li className="my-4 text-gray-800">Webinars</li>
                            <li className="my-4 text-gray-800">Contact Us</li>
                            <li className="my-4 text-gray-800">Templates</li>
                            <li className="my-4 text-gray-800">Import</li>
                            <li className="my-4 text-gray-800">API</li>
                            <li className="my-4 text-gray-800">Consultants</li>
                            <li className="my-4 text-gray-800">Partners</li>
                            <li className="my-4 text-gray-800">ClickUp University</li>
                            <li className="my-4 text-gray-800">Events</li>

                        </ul>
                        
                        <ul className="text-sm">
                            <li><b>FEATURES</b></li>
                             <li className="my-4 text-gray-800 hover:text-blue-500">Download</li>
                            <li className="my-4 text-gray-800">Dashboards</li>
                            <li className="my-4 text-gray-800">Native Time Tracking</li>
                            <li className="my-4 text-gray-800">Mind Maps</li>
                            <li className="my-4 text-gray-800">Automations</li>
                            <li className="my-4 text-gray-800">Notepad</li>
                            <li className="my-4 text-gray-800">Integrations</li>
                            <li className="my-4 text-gray-800">Email</li>
                            <li className="my-4 text-gray-800">To-Do List</li>
                            <li className="my-4 text-gray-800">Kanban Board</li>
                            <li className="my-4 text-gray-800">Sprints</li>


                        </ul>

                        <ul className="text-sm">
                            <li><b>COMPARE</b></li>
                             <li className="my-4 text-gray-800 hover:text-blue-500">vs Monday</li>
                            <li className="my-4 text-gray-800">vs Asana</li>
                            <li className="my-4 text-gray-800">vs Jira</li>
                            <li className="my-4 text-gray-800">vs Trello</li>
                            <li className="my-4 text-gray-800">vs Airtable</li>
                            <li className="my-4 text-gray-800">vs Notion</li>
                            <li className="my-4 text-gray-800">vs Basecamp</li>
                            <li className="my-4 text-gray-800">vs Wrike</li>
                            <li className="my-4 text-gray-800">vs Todoist</li>
                            <li className="my-4 text-gray-800">vs Smartsheet</li>


                        </ul>
                        




                        <ul className="text-sm">
                            <li><b>LEARN</b></li>
                            <li className="my-4 text-gray-800 hover:text-blue-500">Software Team Hub</li>
                            <li className="my-4 text-gray-800">Agency Hub</li>
                            <li className="my-4 text-gray-800">PM Software Guide</li>
                            <li className="my-4 text-gray-800">Newsletter</li>
                            <li className="my-4 text-gray-800">Podcast</li>

                            <div className="pt-20 border-t-2 mt-10 w-40 text-white">
                                <button className="FooterButton px-3">
                                    <p className="grid grid-cols-5 text-left">
                                    <i className="fa fa-apple text-3xl "></i>
                                    <p className="text-left col-span-4 px-2">
                                        <h2 className="FootDownload">Download on the</h2>
                                        <h2 className="FootApp">App Store</h2>

                                    </p>
                                    </p>
                                </button>
                                <button className="FooterButton px-3 mt-4">
                                    <p className="grid grid-cols-5 text-left">
                                    <i className="fab fa-google-play text-2xl mt-1 "></i>
                                    <p className="text-left col-span-4 px-2">
                                        <h2 className="FootDownload">GET IT ON</h2>
                                        <h2 className="FootGplay">Google Play</h2>

                                    </p>
                                    </p>
                                </button>
                            </div>
                        </ul>
                        </div>
                        </div>
 
                        <div className="FooterClickSvg mt-20 border-t-2 border-gray-400">
                            <div>
                            <svg width="146" height="38" className="FooterSvg" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="m5.615 27.26 5.015-3.851c2.664 3.485 5.494 5.092 8.645 5.092 3.134 0 5.884-1.588 8.428-5.046l5.086 3.758c-3.67 4.986-8.232 7.62-13.514 7.62-5.265 0-9.871-2.617-13.66-7.574Z" fill="url(#clickup-logo-text-white_svg__a)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m18.992 10.523-8.925 7.71-4.126-4.797 13.07-11.29 12.967 11.299-4.145 4.78-8.84-7.702Z" fill="url(#clickup-logo-text-white_svg__b)"></path><path d="M51.754 30.077c-3.047 0-5.587-.99-7.647-2.97-2.06-2.008-3.075-4.582-3.075-7.723 0-3.167 1.043-5.77 3.102-7.807 2.09-2.065 4.63-3.082 7.65-3.082 3.725 0 7.025 1.61 8.946 4.13l-3.36 3.535c-1.608-1.727-3.358-2.603-5.247-2.603-1.61 0-2.936.536-4.038 1.64-1.072 1.105-1.607 2.492-1.607 4.16 0 1.612.535 2.97 1.607 4.074 1.102 1.074 2.428 1.61 4.008 1.61 2.06 0 3.867-.905 5.362-2.687l3.5 3.367c-.96 1.273-2.258 2.32-3.866 3.14-1.61.82-3.387 1.216-5.335 1.216ZM66.875 8.182v21.584H61.91V8.182h4.966Zm4.707 4.581c-1.663 0-2.877-1.216-2.877-2.883 0-1.613 1.27-2.83 2.877-2.83 1.61 0 2.852 1.217 2.852 2.83 0 1.667-1.243 2.886-2.852 2.886v-.003Zm2.513 1.387v15.616h-4.996V14.15h4.996Zm9.561 15.956c-2.456 0-4.43-.764-5.981-2.292-1.525-1.527-2.287-3.48-2.287-5.884 0-2.405.762-4.355 2.314-5.884 1.553-1.528 3.555-2.29 6.038-2.29 3.246 0 6.097 1.583 7.422 4.553l-3.978 2.095c-.79-1.33-1.891-2.01-3.33-2.01-1.044 0-1.891.34-2.57 1.02a3.526 3.526 0 0 0-.987 2.516c0 2.065 1.495 3.593 3.5 3.593 1.439 0 2.766-.792 3.33-2.008l3.98 2.375c-1.356 2.603-4.149 4.216-7.45 4.216Zm24.773-.34h-5.928l-4.602-6.196-.733.68v5.516h-4.963V8.182h4.965v10.495l4.684-4.527h6.068l-6.687 6.281 7.196 9.335Zm.333-8.119V8.86h5.305v12.703c0 2.347 1.355 3.479 3.303 3.479 1.918 0 3.272-1.189 3.272-3.48V8.86h5.335v12.787c0 6.167-4.263 8.487-8.607 8.487-4.318 0-8.608-2.32-8.608-8.487Zm29.005-7.891c2.23 0 4.037.791 5.475 2.375 1.439 1.556 2.144 3.508 2.144 5.799 0 2.293-.733 4.243-2.171 5.856-1.441 1.583-3.246 2.377-5.419 2.377-1.723 0-3.218-.566-4.431-1.697v7.722h-4.996V14.15h4.912v1.444c1.213-1.218 2.708-1.838 4.486-1.838Zm2.539 8.23c0-2.036-1.465-3.592-3.498-3.592-2.032 0-3.527 1.556-3.527 3.593 0 .99.337 1.839.987 2.546.676.707 1.523 1.047 2.54 1.047 1.015 0 1.862-.34 2.511-1.047a3.648 3.648 0 0 0 .99-2.546h-.003Z" fill="#fff"></path><defs><linearGradient id="clickup-logo-text-white_svg__a" x1="5.615" y1="31.179" x2="32.789" y2="31.179" gradientUnits="userSpaceOnUse"><stop stop-color="#8930FD"></stop><stop offset="1" stop-color="#49CCF9"></stop></linearGradient><linearGradient id="clickup-logo-text-white_svg__b" x1="5.941" y1="13.086" x2="31.978" y2="13.086" gradientUnits="userSpaceOnUse"><stop stop-color="#FF02F0"></stop><stop offset="1" stop-color="#FFC800"></stop></linearGradient></defs>
                            </svg>
                            <div>
                                <p className="text-sm">&copy; 2023 ClickUp | Security | Your privacy | Terms</p>
                            </div>
                            </div>
                            <div className="FooterIcon">
                                    <span><i className="fa fa-linkedin bg-white px-1 text-2xl text-fuchsia-600 rounded mx-2"></i></span>
                                    <span><i className="fa fa-facebook bg-white px-1 text-2xl text-fuchsia-600 rounded mx-2 text-right"></i></span>
                                    <span><i className="fa fa-instagram   text-white  FIconSize rounded mx-3"></i></span>
                                    <span><i className="fa fa-twitter   text-white  rounded mx-3 FIconSize"></i></span>


                            </div>
                        </div>
                </footer>
        </>
     );
}
 
export default Footer;