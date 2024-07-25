
import './App.css'

const customers = [
    {
        "id": "1",
        "avatar": "https://i.redd.it/sc4fuafgx33c1.jpg", // Replace with actual image URL
        "customerName": "John Doe",
        "description": "A loyal customer who frequently shops for electronics.",
        "userProfile": "https://example.com/user/john-doe"
    },
    {
        "id": "2",
        "avatar": "https://www.boredpanda.com/blog/wp-content/uploads/2021/12/funny-movie-characters-41-61aa091c1ee21__700.jpg", // Replace with actual image URL
        "customerName": "Jane Smith",
        "description": "Enjoys trying new fashion trends and often leaves reviews.",
        "userProfile": "https://example.com/user/jane-smith"
    },
    {
        "id": "3",
        "avatar": "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/Tom-and-Jerry-Cue-Ball-Cat-1950.jpg", // Replace with actual image URL
        "customerName": "Kaveesha Perera",
        "description": "Regular customer who values local businesses and eco-friendly products.",
        "userProfile": "https://example.com/user/kaveesha-perera"
    },
    {
        "id": "4",
        "avatar": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFoRilww7HBpxl22w9v1fjGOVp5PAgOdb7KU0csVNKMv6-mrd8AipRiL0IcY-DfiO82NhXvj-OQye1SfLdXq__2fVu1ACGVQhztZxCJ4-woAhaUeIgB2xpbna02NLMPC_fDGfq/s1600/04garth.jpg", // Replace with actual image URL
        "customerName": "Miguel Fernandez",
        "description": "Tech enthusiast who actively participates in online communities.",
        "userProfile": "https://example.com/user/miguel-fernandez"
    },
    {
        "id": "5",
        "avatar": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/collage-maker-18-apr-2023-10-34-am-6037.jpg", // Replace with actual image URL
        "customerName": "Aisha Khan",
        "description": "Values personalized recommendations and appreciates excellent customer service.",
        "userProfile": "https://example.com/user/aisha-khan"
    }
]



function App() {

    return(
        <>
            <h1>Custmer Data</h1>
            <hr/>
            {
                customers.map((data,index)=>{
                    console.log(data.customerName)
                    return (
                        <>

                            <div className="card" key={index} onClick={
                                ()=>{
                                    console.log(data);
                                }}>
                                <img src={data.avatar} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className={data.customerName}>Card title</h5>
                                    <p className="card-text">{data.description}</p>
                                    <a href={data.userProfile} className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </>
                    );
                })
            }
        </>

    );
}

export default App
