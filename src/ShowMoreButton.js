import { useState } from "react";
import "./style.css"
const List = ({segments}) => {
console.log(segments)
    const [segmentStates, setSegmentStates] = useState(
        segments.map(segment => ({ 
            content: segment.content, 
            showContent: false, 
            title: segment.title, 
            showTitle:false }))
      );
    
      const toggleContent = (index) => {
        setSegmentStates(prevStates => {
          const updatedStates = [...prevStates];
          updatedStates[index].showContent = !updatedStates[index].showContent;
          return updatedStates;
        });
      };
    return ( <>
      
        <div>
        {segmentStates.map((segment, index) => (
          <div key={index} className={`show-more-container ${segment.showContent ? "expanded" : "collapsed"}`}>
            <p className="content">{segment.showContent ? segment.content : segment.content.substring(0, 100) + "..."}</p>
            <p className="content">{segment.showTitle ? segment.title : segment.title.substring(0, 100) + "..."}</p>

            <button className="toggle-button" onClick={() => toggleContent(index)}>
              {segment.showContent ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}
      </div>
      </>
     );

    //  ShowMoreButton.defaultProps = {
    //     segments: [], // Provide an empty array as the default value
    //   };
}
 
export default List;