import React from 'react'
import img from "../assets/img.png";


function About() {
    return (
        <div className='about-container pt-10 flex justify-center'>
            <div className='mt-10 flex justify-center flex-col bg-purple-600 w-fit h-fit rounded-t-full overflow-hidden mt-7 mr-4'>
                <img src={img} alt="img" className='w-60' />
            </div>
            <div className='w-4/12 mt-12'>
                <div className='font-extrabold text-red-600'>About Me :</div>
                <div className='text-white'>I’m Lingram Gurude, an undergraduate B.Tech student in Computer Engineering,
                    with skills across a range of technologies including React, Node.js, Express, Mongoose,
                    Prisma, PostgreSQL, SQL, Docker, Git, GitHub, Hono, and Cloudflare. I’m proficient in both
                    front-end and back-end development, and I work with JavaScript, TypeScript, HTML, CSS,
                    as well as C and C++. My focus is on building scalable and dynamic web applications,
                    using serverless architectures and containerization, while aiming to develop efficient
                    and innovative solutions to tackle real-world challenges across various domains.
                </div>
            </div>
        </div>
    )
}

export default About