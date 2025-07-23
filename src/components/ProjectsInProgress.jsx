import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";



const videos = [
  { src: "./vid1.mp4", title: "MOJITO SITE" },
  { src: "./vid2.mp4", title: "AMAZON UI CLONE" },
  { src: "./vid3.mp4", title: "MOVIE SITE" },
];

function ProjectsInProgress() {
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // Play one video on hover, pause all others
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.play();
        gsap.to(video, { scale: 1.1, duration: 0.3, ease: "power1.out" });
      } else {
        gsap.to(video, { scale: 1, duration: 0.3 });
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const handleMouseLeave = (index) => {
    setActiveIndex(null);
    const video = videoRefs.current[index];
    if (!video) return;

    video.pause();
    video.currentTime = 0;
    gsap.to(video, { scale: 1, duration: 0.3 });
  };

  // Pause videos when they scroll out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (!entry.isIntersecting) {
            video.pause();
            gsap.to(video, { scale: 1, duration: 0.3 });

            if (video === videoRefs.current[activeIndex]) {
              setActiveIndex(null);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [activeIndex]);

  return (
    <section className="my-4 px-4">
      <h2 className="text-9xl font-bold text-center text-yellow-600 mt-4 mb-10 underline decoraton-double">
        Projects that I made for fun!
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {videos.map(({ src, title }, index) => (
          <div
            key={index}
            className="w-186 h-100 relative overflow-hidden shadow-md rounded-lg cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={src}
              muted
              loop
              preload="metadata"
              playsInline
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div className="absolute bottom-2 left-2 px-3 py-1 text-sm text-white bg-black bg-opacity-60 rounded ">
              {title} 
            </div>
          </div>
        ))} <img src="ov.png" className="h-64 w-86 ml-6 mt-32 p-2"></img>
      </div>

    </section>
  );
}

export default ProjectsInProgress;
