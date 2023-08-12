export const List = (props) => {
    const listItems = props.items.map((item) =>
      <li key={item}>{item}</li>
    );
    
    return <ul>{listItems}</ul>;
  }
  
  
 
  
  