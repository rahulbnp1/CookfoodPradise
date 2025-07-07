import NavBar from "../navBar/NavBar";
import Search from "../searchBar/search";
import CategoryBar from "../category/CategoryBar";
import PoojaImage from '../../picture/pooja.webp';
import Rahul from '../../picture/rahul.png'
import './AboutUs.css';
import Footer from "../footer/Footer";
import Copyright from "../copyright/Copyright";




export default function AboutUs() {
    return ( <>
         <NavBar />
            <Search />
            <CategoryBar />
            <div id="about-us">
            <h4>About Us- Cookfood Paradise</h4>
                    <p>
                        Welcome to Cookfood Paradise, your one-stop destination for discovering the joy of cooking, the warmth of shared meals, and the magic that happens when flavors come together. <br/>
                        Founded in 2018, Cookfood Paradise has spent over 6 wonderful years earning the trust of food lovers across India and beyond. What began as a simple passion project has blossomed into a vibrant platform dedicated to sharing authentic, easy-to-follow recipes, heartwarming stories, and culinary inspiration for every kitchen.
                    </p>

              <div id="banner1">
                 <div id="banner-text">
                    <h2>Meet Your Host – Pooja Kumari</h2>
                    At the heart of Cookfood Paradise is Pooja Kumari, a passionate and creative home cook who infuses every recipe with tradition, flavor, and love. Pooja’s mission is to make cooking accessible and enjoyable for everyone — whether you're a beginner learning to boil your first egg or a seasoned cook looking for new ideas. Her approach is rooted in authenticity, yet she’s never afraid to experiment with modern twists, viral recipes, or international flavors. <br/>

                    With her calm, clear style and personal connection to each dish, Pooja has built a loyal audience who trust her recipes not just for taste, but for their reliability.<br/>
                    Cooking is more than a chore — it's a celebration of culture, creativity, and care. At Cookfood Paradise, we welcome you to cook with us, laugh with us, and share meals that bring joy to your table.

                    So subscribe, follow, cook, and be part of our ever-growing paradise of taste, tradition, and trust.

                        Welcome to Cookfood Paradise — where every recipe has a story, and every story is shared with love.
                 </div>
                <div id="bannerimg">
                 <img src={PoojaImage} alt="PoojaImage" />
                 </div>
              </div>

            <div id="banner1">

                <div id="bannerimg">
                 <img src={Rahul} alt="Rahul" />
                </div>

                 <div id="banner-text">
                    <h2>Tech Backbone – Rahul Kumar</h2>
                    <p>Ensuring that the vision of Cookfood Paradise comes to life is Rahul Kumar, the backbone of the platform’s management and digital growth. From video editing and publishing to managing blog content, marketing, and community engagement — Rahul handles it all with precision and dedication. His commitment ensures that the quality of Cookfood Paradise remains consistent, professional, and ever-evolving.</p>
                    <p>Behind the smooth experience and growing reach of Cookfood Paradise stands Rahul Kumar — the technical brain and co-visionary who ensures everything runs seamlessly behind the scenes. As the platform's manager and developer, Rahul brings together innovation, design, and functionality to give users a delightful and user-friendly interface. From building the website to maintaining performance, handling content systems, and managing outreach strategies, Rahul’s commitment and tech-savvy solutions have played a crucial role in transforming Cookfood Paradise from a simple idea into a trusted digital destination for food lovers. His vision is to constantly evolve the platform, introduce smart features, and make culinary inspiration accessible to all.</p>
                 </div>
                
              </div>



            
            
            <h2 >What We Do</h2>
            <ul>
            <li><b>Step-by-Step Recipe Videos</b>  <br/>
            Simple and detailed cooking videos that guide viewers with clarity and confidence.<br/></li>

            <li><b>Food Blogs & Culinary Articles</b> <br/>
            Tips, techniques, health hacks, festival guides, and personal stories that enrich your culinary knowledge.</li>

            <li><b>Viral & Internet-Sourced Recipes</b> <br/>
            The latest food trends, kitchen hacks, and popular recipes from across the web — all tested and simplified.</li>

            <li><b>Seasonal Specials & Festive Favorites</b> <br/>
            Dishes that celebrate every Indian festival, season, and regional tradition with joy and authenticity.</li>

            <li><b>Interactive Community </b><br/>
            Engaging with our audience through comments, guest episodes, and social media — because food is best when shared.</li>
            </ul>
            
        </div>
        <Footer />
        <Copyright />
        </>
    );
}