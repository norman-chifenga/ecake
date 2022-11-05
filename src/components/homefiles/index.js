import Category from "./Category";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Others from "./OtherCake";

export const Homepage = (props) => {
    return (
        <>
            <Hero />
            <Category title="Popular" notify={props.notify} />
            <Category title="Trending" notify={props.notify} />
            <Others notify={props.notify} />
            <AboutUs />
            <ContactUs />
        </>
    );
};
