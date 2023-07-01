import Card from './Card';

function Movie({title, year}) {
  return (
    <>
      <Card>
        <p style={{color: 'black', border: '3px solid #aa5522', 
        background: 'pink', padding: 6, marginLeft: 10, 
        fontSize: 28, fontWeight: 'bold',
        marginRight: 200, marginBottom: 2}}>
        {title}</p>
        <h3 style={{marginLeft: 10,}}>Year {year}</h3>
      </Card>
    </>
  );
}

export default Movie;