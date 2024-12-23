import React from "react";
import Image from "next/image";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className="about">
          <div className="about-image">
            <Image
              src="https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/12/tes_gen_blog_code7-1-800x412.jpg"
              alt="A programmer coding"
              width={800}
              height={412} 
            />
            <div className="about-text">
              <p>
                My name is Amanda Yu and I am from Oakland, CA. I am a 3rd year
                majoring in computer science. I enjoy playing video games (i.e.
                Valorant) and watching TV shows.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
