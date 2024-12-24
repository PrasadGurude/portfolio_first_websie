import React, { useState } from 'react'
import img1 from "../assets/javascript.jpeg"
import img2 from "../assets/typescript.jpg"
import img3 from "../assets/C-Programming.jpg"
import img4 from "../assets/cpp.png"
import img5 from "../assets/react.jpeg"
import img6 from "../assets/node.jpeg"
import img7 from "../assets/express.jpeg"
import img8 from "../assets/hono.avif"
import img9 from "../assets/mongodb.png"
import img10 from "../assets/postgreSQL.jpg"
import img11 from "../assets/prisma.jpeg"
import img12 from "../assets/git.jpeg"
import img13 from "../assets/github.jpeg"
import img14 from "../assets/Docker.png"
import img15 from "../assets/cloud_falare.webp"
import img16 from "../assets/tailwind.png"

function Skills() {
    const [imgs, setImgs] = useState([img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16])
    return (
        <div className='skill-container mt-7 m '>
            <hr />
            <div className='font-extrabold text-red-600 ml-8 text-2xl'>Skills :</div>
            <div className='inginite-loop flex flex-wrap m-10 mb-5'>
                {
                    imgs.map((e,index) => {
                        return(
                            <div key={index} className='border-2 w-1/12 relative border-red-600 m-2 mt-1 rounded-lg overflow-clip'>
                            <img src={e} alt={e} className='h-full'/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills