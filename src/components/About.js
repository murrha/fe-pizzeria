import { Link } from "react-router-dom";


const About = () => {
    return ( 
        <>

  
    <div className="container mt-2 lead">
  <div className="row">
  <img src="img/about/welcome.png" height="200px" alt="pizza"/>
  </div>

    <div className="row mt-5">
        <div className="col-md-6">
            <h2>Our Story</h2>
            <p>
            Full Stack Pizzeria was founded by a team of software engineers who decided to pivot from code to crust. We saw that while our town had lots of great pizza joints, none specifically catered to the tech crowd. That’s why we opened Full Stack Pizzeria - to merge our love of pizza with our passion for technology.
            The founders of Full Stack Pizzeria met while working at a local software company.
             During late nights debugging code, we'd order pizza delivery and joke about opening our own pizza place.
            In 2023 we finally decided to turn the joke into reality.</p>
            

        </div>
        <div className="col-md-6">
            <h2>Our Pizza</h2>
            <p>
           We use fresh, high-quality ingredients. Our dough is hand stretched daily and our veggies are locally sourced. 
         We offer a wide variety of pizzas to choose from. Whether you're a classic pizza lover or you're looking for something more adventurous, we have a pizza that you'll love.
           Our pizzas are made to order. This means that your pizza will be fresh and hot when it arrives.
            We offer a convenient delivery service. So you can enjoy our delicious pizza without even having to leave your home.
              
      </p>
            
        </div>

    </div>
    <h2 className="mt-5">Quality Guarantee</h2>
        <p>
        At Full Stack Pizzeria, we have 'The Backend' loaded with pepperoni and sausage, and 'The Frontend' with fresh veggies and pesto sauce.
         We even created a signature pizza called 'The Full Stack' with every topping imaginable! We may have quirky technologic roots, but we're seriously committed to making insanely delicious pizza with quality ingredients.
         
        </p>
        <p>
        We hope you'll stop by to grab a slice, enjoy our tech-inspired atmosphere, and sample some of the best pizza in town!
         The laptop bar is always open for coders and pizza lovers alike. Our website also makes it simple to get delicious pizza on demand fast. Just a few clicks and we’ll deliver hot pizza to your door!
        </p>
      
        <Link name="order button" id="order" class="btn fw-bold btn-lg btn-warning text-dark" to="/menu" role="button">Order Now</Link>

    </div>
 
   

    </>
    );
}
 
export default About;

