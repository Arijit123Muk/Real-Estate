import '../styles/home.css';


const Home = () => {
    return ( 
        <section className="home">
            <h5 className="add">Looking for a Property!</h5>
            <h1><span className="blues-first">Buy</span> <span className="purples-first">and</span></h1>
            <h1 className="blues-sec">Sell</h1>
            <img src="/assets/home.png" alt="home-image" className="home-logo"/>
            <h1 className="purples-sec">Properties</h1>
            <p className="parag">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam sit magni, perspiciatis itaque dolore quas,
             fugiat sunt non beatae impedit nostrum autem odit aut! Reprehenderit a debitis ut modi! Similique.</p>

            <button className="btn">Details</button>
        </section>
     );
}
 
export default Home;
