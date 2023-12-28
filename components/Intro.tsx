import Image from "next/image";

const Intro = () => {
  return (
    <div className="intro">
      <div className="backgroundImage">
        <Image
          src="/images/background-one.jpg"
          alt="Background image"
          fill
          className="object-cover"
        />
      </div>

      <div className="introContainer">
        <div data-scroll data-scroll-speed='0.3' className="introImage">
          <Image src="/images/background-two.jpg" alt="Background image" fill />
        </div>

        <h1 data-scroll data-scroll-speed='0.7'>Smooth Scroll</h1>
      </div>
    </div>
  );
};

export default Intro;
