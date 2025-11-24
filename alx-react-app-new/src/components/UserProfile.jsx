function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '15px', 
      margin: '15px', 
      borderRadius: '8px', 
      maxWidth: '400px', 
      marginLeft: 'auto', 
      marginRight: 'auto' 
    }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
