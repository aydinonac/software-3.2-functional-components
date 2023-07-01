import Genre from './Genre'

function Container() {
  return (
    <>
      <h1 style={{border: '4px solid blue', background: 'skyblue', 
      padding: 10, marginLeft: 10, marginBottom: 20, 
      marginRight: 10}}> Best movie App ever!</h1>
      
      <Genre name="Genre: Comedy" 
      description="These are good for a laugh" 
      movieTitle1="Spy" 
      movieTitle2="The Office" 
      yearTitle1="2015" 
      yearTitle2="2005"/>
      
      <Genre name="Genre: Romance" 
      description="Dramas based on human relationships" 
      movieTitle1="Gone with the Wind" 
      movieTitle2="Sliding Doors" 
      yearTitle1="1939" 
      yearTitle2="1998"/>
    </>
  )
}

export default Container;

