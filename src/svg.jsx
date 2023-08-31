import "./style.css"

const SVG = () => {
    return ( 
        <>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  className="landingSvg"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "rgb(37 99 235)", stopOpacity: 1 }} />
      <stop offset="100%" style={{ stopColor: "rgba(192, 38, 211,.7)", stopOpacity: 1 }} />
    </linearGradient>
   
  </defs>
  <path
    d="M0,80 Q10,20 70,1 H70 Q120,0 100,90 V100 H18 Z"
    fill="url(#grad1)"
    transform="scale(1, -1) translate(0, -100)" // Flip and translate the path for the curvy bottom
  />
  
  
</svg>
        </>
     );
}
 
export default SVG;